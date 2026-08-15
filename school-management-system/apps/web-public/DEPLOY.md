# Hillfort International School
## Deployment Guide — GitHub + Vercel + Supabase

---

## What changed from the PHP version

| Old (PHP/cPanel)              | New (Vercel/Supabase)              |
|-------------------------------|-------------------------------------|
| `backend/api/contact-mail.php` | `api/contact.js` (Node.js)          |
| `backend/api/admission-mail.php` | `api/apply.js`                    |
| `backend/api/tour.php`         | `api/tour.js`                       |
| `backend/api/send-otp.php`, `verify-otp.php` | `api/otp.js` (`?action=send`/`verify`) |
| `backend/api/admin-login.php` etc. | `api/admin.js` (`?action=login`/`logout`/`session`/`users`/`content`, JWT-based) |
| (none — no CMS)                | `api/content.js` (public content reads) + Content Admin UI |
| MySQL on cPanel                | Supabase (PostgreSQL)               |
| PHP sessions (cookies)         | JWT tokens in localStorage          |
| File-based rate limiting       | DB-based rate limiting (Supabase)   |
| PHPMailer                      | Nodemailer                          |

---

## Step 1 — Create your Supabase project

1. Go to [supabase.com](https://supabase.com) and sign in / create account
2. Click **New Project** → name it `hillfort-db` → choose a region close to Nigeria (Europe West works well)
3. Set a strong database password and save it somewhere safe
4. Wait for the project to provision (~2 minutes)

### Run the schema
1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click **New Query**
3. Copy the entire contents of `supabase-schema.sql` and paste it in
4. Click **Run** — you should see "Success"
5. Go to **Table Editor** to confirm all 10 tables were created

### Copy your API keys
Go to **Project Settings → API**:
- Copy **Project URL** → this is your `SUPABASE_URL`
- Copy **service_role** key (under "Project API keys") → this is your `SUPABASE_SERVICE_ROLE_KEY`

> ⚠️ The `service_role` key bypasses RLS. Keep it server-side only — never put it in frontend JS.

---

## Step 2 — Create the admin user in Supabase

Since there's no registration UI yet, add yourself directly in Supabase:

1. Go to **SQL Editor**, run:
```sql
insert into admin_users (name, email, password_hash, role, verified, approved)
values (
  'Your Name',
  'yourname@hillfortintlschool.ng',
  -- Generate bcrypt hash: https://bcrypt-generator.com (cost 12)
  '$2a$12$REPLACE_WITH_BCRYPT_HASH_OF_YOUR_PASSWORD',
  'super_admin',
  true,
  true
);
```

2. To generate the bcrypt hash locally:
```bash
node -e "const b=require('bcryptjs'); b.hash('YourPassword123', 12).then(console.log)"
```

---

## Step 2b — Content Admin (site content, no separate CMS)

Site content — term calendar, key events, media gallery, downloads,
staff, and flexible content pages — is managed entirely inside this
same admin login, no separate CMS or hosting required.

1. **Run the schema**: SQL Editor → paste the full contents of
   `supabase-content-schema.sql` → Run. Creates 9 tables
   (`site_settings`, `term_dates`, `calendar_events`,
   `gallery_categories`, `media_gallery_items`, `download_categories`,
   `downloads`, `staff_members`, `pages`), all RLS-enabled with no
   public policies — every read/write goes through the API using the
   `service_role` key, same as every other table in this project.

2. **Create the Storage bucket** for uploaded photos/files:
   Supabase → **Storage** → **New bucket** → name it exactly
   `site-uploads` → toggle **Public bucket** on → Create.
   (Uploads go through `/api/admin?action=content` with `action:'upload'`,
   which uses the `service_role` key server-side — the bucket only
   needs to be *readable* publicly, not writable.)

3. **Use it**: log in at `/secure-admin-2026/` — you land on
   `post-admin.html`, which now covers everything in one place. The
   sidebar is grouped into **Posts & Events** (unchanged — news,
   events, pop-ups, gallery posts), **Term Calendar**, **Media &
   Files**, and **People & Pages**. Each of the newer sections is a
   plain list-and-form UI; image/file fields
   upload straight to Supabase Storage (photos are automatically
   resized client-side before upload, so large phone photos won't hit
   upload limits).

4. **Site Pages block reference** — the `pages` collection's "Content
   Blocks (JSON)" field takes an array of `{type, ...}` objects,
   rendered by `public/assets/js/page-blocks-renderer.js`:

   | type | fields |
   |---|---|
   | `intro_stats` | `label, title, paragraphs[], stats:[{value,label}], image, image_badge_icon, image_badge_text` |
   | `timeline` | `label, title, shaded, items:[{year,title,body}]` |
   | `value_cards` | `label, title, shaded, items:[{icon,title,body}]` |
   | `rich_text` | `label, title, shaded, html` |
   | `image_gallery` | `label, title, shaded, images:[{id,caption}]` (`id` = an uploaded file's public URL) |
   | `youtube_embed` | `label, title, caption, video_url, audio_only` |
   | `cta` | `title, body, buttons:[{text,href,style}]` |

   For a page to render this way instead of its existing static
   content, wrap the page's sections in `<div id="pageContent">...</div>`
   and add `mountPageFromDirectus('#pageContent', '<slug>')` on
   `DOMContentLoaded` (the function name is a holdover from before
   this ran on our own backend, kept as-is so pages didn't need
   touching beyond this wiring).

   **This is done for every static informational page** — `about`,
   `admission`, `career`, `co-curricular`, `curriculum`,
   `entry-requirements`, `eyfs`, `facilities`, `government-approved`,
   `mission-vision`, `our-story`, `pastoral-care`, `primary`,
   `school-life`, `school-tour`, `secondary`, `sports-clubs`,
   `student-leadership`, `uniform-guide`, `why-choose-us` — each is
   ready to go the moment a `pages` row with the matching `slug`
   exists in Content Admin; until then, every page keeps showing its
   current static content exactly as-is.

   **`leadership.html` is deliberately NOT wired this way.** All 5
   leader cards there are tied to a bespoke popup-modal system
   (`openLeaderPopup(id)`) with hardcoded IDs, plus a hand-built
   photo-right/text-left hero layout for the Founder/Director card —
   neither has an equivalent block type. Migrating it would need a
   new `leader_popup_card` block type built specifically for that
   layout; left as static/hand-edited for now rather than done lossy.

---

## Step 3 — Push to GitHub

```bash
# From the project root (hillfort-vercel/)
git init
git add .
git commit -m "Initial commit — Hillfort Vercel + Supabase"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hillfort-website.git
git push -u origin main
```

---

## Step 4 — Deploy to Vercel

### Option A: Vercel Dashboard (recommended for first deploy)

1. Go to [vercel.com](https://vercel.com) → Log in with GitHub
2. Click **Add New → Project**
3. Import your `hillfort-website` repository
4. Vercel will auto-detect the settings from `vercel.json`:
   - **Framework Preset**: Other
   - **Build Command**: `npm install`
   - **Output Directory**: `public`
5. Before clicking Deploy, add your **Environment Variables** (see Step 5)
6. Click **Deploy**

### Option B: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Step 5 — Set Environment Variables in Vercel

Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**
and add each of these:

| Variable | Value |
|---|---|
| `SUPABASE_URL` | `https://YOUR_PROJECT_ID.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Your service_role key from Supabase |
| `SITE_URL` | `https://hillfortintlschool.ng` |
| `SMTP_HOST` | `smtp-relay.brevo.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USERNAME` | `hillfortinternationals@gmail.com` |
| `SMTP_PASSWORD` | Your Brevo SMTP password |
| `MAIL_FROM` | `noreply@hillfortintlschool.ng` |
| `MAIL_FROM_NAME` | `Hillfort International School` |
| `MAIL_CONTACT` | `info@hillfortintlschool.ng` |
| `MAIL_ADMISSIONS` | `admissions@hillfortintlschool.ng` |
| `RECAPTCHA_SECRET_KEY` | Your reCAPTCHA v3 secret key |
| `RECAPTCHA_MIN_SCORE` | `0.5` |
| `ADMIN_JWT_SECRET` | Run: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"` |

After adding all variables, click **Redeploy** (from the Deployments tab).

---

## Step 6 — Set up custom domain

1. In Vercel → Project → **Settings → Domains**
2. Add `hillfortintlschool.ng` and `www.hillfortintlschool.ng`
3. Vercel will give you DNS records to add at your domain registrar
4. Add the records and wait for propagation (usually < 30 minutes)

---

## Step 7 — Test everything

After deployment, test each form:

| Page | API called | What to check |
|---|---|---|
| `/pages/contact.html` | `/api/contact` | Email arrives at info@hillfortintlschool.ng |
| `/pages/apply.html` | `/api/apply` | Confirmation email to parent + admin notification |
| `/pages/school-tour.html` | `/api/tour` | Tour booking saved in Supabase + emails sent |
| `/pages/parent-portal.html` | `/api/send-otp` + `/api/verify-otp` | OTP arrives by email, verification works |

Check **Supabase → Table Editor** to confirm rows are being saved.

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Copy .env.example to .env.local and fill in values
cp .env.example .env.local

# 3. Run Vercel dev server (serves both frontend and API)
npx vercel dev
```

Visit `http://localhost:3000`

---

## Continuous deployment (automatic)

Once connected to GitHub, every `git push` to `main` automatically deploys to production.

```bash
# Make a change, then:
git add .
git commit -m "Update contact page"
git push

# Vercel automatically deploys within ~30 seconds
```

---

## Supabase scheduled cleanup

To run cleanup (purge expired OTPs, rate limits) automatically:

1. Go to **Supabase → Database → Extensions**
2. Enable `pg_cron`
3. Run this SQL:
```sql
select cron.schedule(
  'daily-cleanup',
  '0 2 * * *',   -- 2 AM daily
  $$ select cleanup_expired_data(); $$
);
```

---

## Project structure

```
hillfort-vercel/
├── api/                   ← Vercel serverless functions (Node.js ES modules)
│   ├── admin.js           ← /api/admin?action=login|logout|session|users|content
│   ├── content.js         ← GET /api/content?type=... (public content reads)
│   ├── parent.js          ← /api/parent?action=login|register|session
│   ├── otp.js             ← /api/otp?action=send|verify
│   ├── posts.js           ← news/events/popups (admin-only CRUD)
│   ├── contact.js         ← POST /api/contact
│   ├── apply.js           ← POST /api/apply
│   ├── tour.js            ← POST /api/tour
│   └── newsletter.js      ← newsletter subscribe/unsubscribe
├── lib/
│   └── supabase.js        ← Shared: Supabase client, mail, helpers
├── public/                ← Static files served as-is
│   ├── index.html
│   ├── assets/
│   │   ├── css/style.css
│   │   ├── js/
│   │   └── images/
│   ├── secure-admin-2026/ ← Admin login
│   └── pages/
│       ├── post-admin.html    ← Posts, events, pop-ups, gallery, user approvals, AND term calendar/media/downloads/staff/pages ("Content Admin" is merged in, not a separate page)
│       └── ...             ← All other public pages
├── supabase-schema.sql         ← Core schema — run once in Supabase SQL Editor
├── supabase-content-schema.sql ← Content Admin tables — run once (see Step 2b)
├── vercel.json             ← Routing (incl. legacy /api/* URL rewrites) + headers config
├── package.json
├── .env.example             ← Template — copy to .env.local
└── .gitignore
```
