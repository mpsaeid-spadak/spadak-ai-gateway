# راهنمای استقرار با Docker

راه‌اندازی سریع **Spadak AI Gateway** با داکر.

## استفاده از Docker Compose

یک فایل `docker-compose.yml` آماده در ریشه پروژه قرار دارد:

```yaml
version: '3.8'

services:
  spadak:
    image: ghcr.io/mpsaeid-spadak/spadak-ai-gateway:latest
    ports:
      - "3001:3001"
    environment:
      - ENCRYPTION_KEY=your-secret-key-here
      - PORT=3001
    volumes:
      - spadak-data:/app/server/data
    restart: unless-stopped

volumes:
  spadak-data:
```

### دستور اجرا:

```bash
docker compose up -d
```
مشاهده لاگ‌ها:
```bash
docker compose logs -f spadak
```
