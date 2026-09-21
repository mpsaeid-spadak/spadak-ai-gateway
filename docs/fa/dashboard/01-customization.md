# راهنمای توسعه و کاستوم‌سازی داشبورد Spadak (UI Dashboard)

این راهنما نحوه راه‌اندازی، تغییر، توسعه و کاستوم‌سازی داشبورد وب **Spadak AI Gateway** را توضیح می‌دهد.

## معماری بخش Frontend

- **فریم‌ورک:** React 19 + TypeScript
- **ابزار ساخت (Bundler):** Vite
- **استایل‌دهی:** Tailwind CSS v4 + UI Components
- **مدیریت وضعیت:** TanStack Query (React Query)
- **چندزبانه (i18n):** سیستم داخلی i18n با پشتیبانی از ۶۰ زبان از جمله فارسی (`fa`)

## راه‌اندازی محیط توسعه (Development)

برای توسعه و اعمال تغییرات در داشبورد:

```bash
# 1. نصب وابستگی‌ها
npm install

# 2. اجرای سرور توسعه فرانت‌اند و بک‌اند به صورت هم‌زمان
npm run dev
```

در حالت `npm run dev`:
- فرانت‌اند روی `http://localhost:5173` یا به صورت یکپارچه با سرور Express روی `http://localhost:3001` اجرا می‌شود.
- تغییرات فایل‌های React به صورت زنده (Hot Reload) بروزرسانی می‌شوند.

## نحوه کاستوم‌سازی UI

### 1. لوگو و برندینگ (Brand Component)

کامپوننت برندینگ اصلی داشبورد در مسیر زیر قرار دارد:
`client/src/App.tsx`

برای تغییر لوگو یا عنوان هدر:
```tsx
function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-70">
      <span className="inline-block size-2.5 rounded-full bg-emerald-500 shadow-sm" />
      <span className="font-semibold tracking-tight text-sm text-foreground">Spadak AI Gateway</span>
    </Link>
  )
}
```

### 2. تم و رنگ‌بندی (Theme & Styling)

کلاس‌ها و متغیرهای Tailwind در مسیر `client/src/index.css` قرار دارند.
می‌توانید رنگ‌های اصلی (Primary, Accent, Background) را بر اساس برندینگ Spadak سفارش‌سازی کنید.

### 3. ویرایش ترجمه‌ها و متون فارسی

متون فارسی داشبورد در فایل زیر مدیریت می‌شوند:
`client/src/i18n/locales/fa.json`

با اضافه کردن یا تغییر کلیدها در این فایل، متون فارسی داشبورد بلافاصله به روز می‌شوند.

### 4. ساخت نهایی (Production Build)

پس از اتمام کارهای توسعه و کاستوم‌سازی:

```bash
npm run build
```

با اجرای این دستور، کامپایل نهایی انجام شده و فایل‌های استاتیک در `server/dist/public` قرار می‌گیرند. سپس با `npm start` داشبورد جدید شما آماده استفاده در محیط عملیاتی خواهد بود.
