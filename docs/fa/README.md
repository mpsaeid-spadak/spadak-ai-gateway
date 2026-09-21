# مستندات Spadak AI Gateway (فارسی)

خوش آمدید به مستندات رسمی **Spadak AI Gateway** به زبان فارسی.

## بخش‌های اصلی مستندات

- 🚀 **[راهنمای نصب و راه‌اندازی](install/01-install.md)** — نصب، متغیرهای محیطی و اجرای سرور
- 🏗️ **[معماری و نحوه کار](architecture/00-high-level-index.md)** — سیستم مسیریابی، کلیدهای یکپارچه و زنجیره Fallback
- 💻 **[راهنمای دستورات CLI](cli/01-generators.md)** — استفاده از ابزار `npx spadak` برای پیکربندی هوشمند عامل‌ها
- 🐳 **[استقرار با داکر](deployment/01-docker.md)** — راه‌اندازی سریع با Docker و Docker Compose
- 🎨 **[راه‌اندازی و توسعه داشبورد (UI)](dashboard/01-customization.md)** — اجرای `npm start`، کاستوم‌سازی رابط کاربری و توسعه

## شروع سریع (Quick Start)

برای راه‌اندازی سریع اسپاداک روی سیستم یا سرور خود:

```bash
# نصب وابستگی‌ها
npm install

# ساخت کدهای پروژه
npm run build

# اجرای سرور
npm start
```

پس از اجرا، داشبورد در آدرس `http://localhost:3001` در دسترس خواهد بود.
