import { useI18n } from '@/i18n'
import { formatTokens, platformColors } from '@/lib/routing'

// Month-to-date spend for the embedding / image / audio tabs, in the same card
// slot the chat tab uses for its budget bar.
//
// It is deliberately NOT a budget bar. Chat can draw a percentage because
// `models.monthly_token_budget` is a real number. `embedding_models` and
// `media_models` only carry a free-text `quota_label` — "10K neurons/day
// (shared)", "$0.10/mo credits", "MP3 output - multilingual" — and there is no
// honest conversion from Neurons or dollar credits to tokens, nor is the last
// one a quota at all. So the bar shows how spend is *distributed* across
// providers (which is real), the total is what was actually spent, and each
// provider's quota label is printed verbatim for the reader to judge.
export interface UsageRow {
  /** Family name for embeddings, model display name for media. */
  label: string
  platform: string | null
  quotaLabel?: string | null
  /** Whichever unit this modality is metered in. */
  amount: number
  requestsToday: number
}

export function UsageSummaryCard({
  rows,
  total,
  requestsToday,
  unit,
}: {
  rows: UsageRow[]
  total: number
  requestsToday: number
  /** 'tokens' for embeddings, 'requests' for image/audio (billed per image or per character). */
  unit: 'tokens' | 'requests'
}) {
  const { t } = useI18n()
  const spent = rows.filter(r => r.amount > 0)
  const fmt = (n: number) => (unit === 'tokens' ? formatTokens(n) : String(n))

  return (
    <section className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 opacity-80" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
        <h2 className="text-base font-semibold tracking-tight">{t('models.usageThisMonth')}</h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground shadow-inner">
            <span>
              {unit === 'tokens'
                ? t('embeddings.usageMonth', { count: fmt(total) })
                : t('models.usageRequestsMonth', { count: total })}
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 shadow-inner">
            <span>{t('embeddings.usageToday', { count: requestsToday })}</span>
          </div>
        </div>
      </div>

      {total > 0 ? (
        <div className="flex h-3 w-full rounded-full overflow-hidden bg-secondary shadow-inner">
          {spent.map((r, i) => (
            <div
              key={i}
              title={`${r.label}${r.platform ? ` (${r.platform})` : ''}: ${fmt(r.amount)}`}
              className="transition-all duration-500 ease-in-out hover:opacity-80 cursor-pointer"
              style={{
                width: `${(r.amount / total) * 100}%`,
                backgroundColor: platformColors[r.platform ?? ''] ?? '#94a3b8',
              }}
            />
          ))}
        </div>
      ) : (
        <div className="h-3 w-full rounded-full bg-secondary shadow-inner opacity-50" />
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-sm tabular-nums">
        {rows.map((r, i) => (
          <div key={i} className="group flex items-center gap-3 rounded-lg border border-transparent p-2 hover:bg-secondary/30 hover:border-border/50 transition-colors min-w-0">
            <span
              className="size-3 rounded-full flex-shrink-0 shadow-sm transition-transform group-hover:scale-110"
              style={{ backgroundColor: platformColors[r.platform ?? ''] ?? '#94a3b8' }}
            />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="truncate font-medium">{r.label}</span>
              {r.quotaLabel && (
                <span className="truncate text-[10px] text-muted-foreground font-normal opacity-80">{r.quotaLabel}</span>
              )}
            </div>
            <span className="font-mono text-xs font-semibold bg-background border px-2 py-0.5 rounded shadow-sm">
              {fmt(r.amount)}
            </span>
          </div>
        ))}
      </div>

      {total === 0 && (
        <div className="mt-6 flex flex-col items-center justify-center py-6 text-center text-muted-foreground border-2 border-dashed rounded-xl opacity-60">
          <p className="text-sm font-medium">{t('models.usageEmpty')}</p>
        </div>
      )}
    </section>
  )
}
