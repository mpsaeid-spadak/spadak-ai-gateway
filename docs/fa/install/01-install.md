# راهنمای نصب و راه‌اندازی Spadak AI Gateway

این سند نحوه نصب، پیکربندی و اجرای سرور **Spadak AI Gateway** را توضیح می‌دهد.

## پیش‌نیازها

- Node.js نسخه 20.18.0 یا بالاتر (کمتر از 25.0.0)
- npm نسخه 10.0.0 یا بالاتر
- (اختیاری) Docker و Docker Compose

## مراحل نصب و اجرا

### 1. دریافت سورس کد و نصب وابستگی‌ها

```bash
git clone https://github.com/mpsaeid-spadak/spadak-ai-gateway.git
cd spadak-ai-gateway
npm install
```

### 2. پیکربندی کلید اصلی (Encryption Key)

اسپاداک برای امنیت بیشتر، کلیدهای ارائه دهندگان را به صورت AES-256-GCM رمزنگاری می‌کند. یک متغیر `ENCRYPTION_KEY` تعیین کنید:

```bash
# در لینوکس / مک:
export ENCRYPTION_KEY="your-32-character-secret-key-here"

# یا ایجاد فایل .env در ریشه پروژه:
echo "ENCRYPTION_KEY=your-secret-key-here" > .env
```

### 3. ساخت پروژه (Build)

```bash
npm run build
```

### 4. اجرای سرور (Run)

```bash
npm start
```

سرور روی پورت `3001` اجرا می‌شود و داشبورد وب در آدرس زیر قابل مشاهده است:
`http://localhost:3001`

### 5. حالت توسعه (Development Mode)

اگر می‌خواهید تغییرات کد را زنده مشاهده کنید:

```bash
npm run dev
```

این دستور به صورت هم‌زمان Server و Client Dashboard را در حالت hot-reload اجرا می‌کند.

---

## توکن یکپارچه Spadak (Unified Token)

پس از ورود به داشبورد و افزودن کلیدهای ارائه‌دهندگان (مانند OpenAI, Groq, Gemini)، اسپاداک یک کلید یکپارچه با پیشوند `spadak-...` تولید می‌کند. 

شما می‌توانید تمامی ابزارها و کلاینت‌های هوش مصنوعی خود را به اسپاداک متصل کنید:
- Base URL: `http://localhost:3001/v1`
- API Key: `spadak-your-generated-key`
