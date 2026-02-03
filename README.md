<a name="readme-top"></a>

<p align="center">
  <a href="https://anythingllm.com"><img src="https://github.com/Mintplex-Labs/anything-llm/blob/master/images/wordmark.png?raw=true" alt="AnythingLLM logo"></a>
</p>

## Project Structure

```
├── public/
│   ├── images/
│   │   ├── anythingllm-setup/
│   │   ├── cloud/
│   │   ├── faq/
│   │   ├── features/
│   │   ├── getting-started/
│   │   ├── guides/
│   │   ├── home/
│   │   ├── legal/
│   │   ├── product/
│   │   └── thumbnails/
│   ├── favicon.png
│   ├── licence.txt
│   └── robots.txt
├── pages/
│   ├── agent/
│   ├── api/
│   ├── changelog/
│   ├── cloud/
│   ├── features/
│   ├── installation/
│   ├── setup/
│   ├── _meta.json
│   └── index.mdx
├── components/
│   └── icons/
├── next-env.d.ts
├── next.config.js
├── package.json
├── pull-request-template.md
├── README.md
├── theme.config.tsx
└── tsconfig.json
```

## Setup for Local Development

1. Clone this Repository to your local machine using git clone:

```sh
git clone https://github.com/codingsoftmx/anythingllm-docs.git
```


2. Install dependencies using yarn:

```sh
yarn
```

3. Start the development server:

```sh
yarn dev
```

## Contributing

- Create issue
- Create PR with branch name format of `<issue number>-<short name>`
- yee haw let's merge

## License

This project is licensed under the MIT License.

_special thanks to [@ShadowArcanist](https://github.com/ShadowArcanist) for the migration to NextJS_

---

## Reusable Template Guide 🚀

This documentation site is now configured as a **reusable template** using environment variables. You can easily fork or clone this repository to create documentation sites for other projects.

### Quick Start for New Projects

#### Option 1: Interactive Setup (Recommended)

```bash
# Clone the repository
git clone https://github.com/codingsoftmx/anythingllm-docs.git my-project-docs
cd my-project-docs

# Install dependencies
yarn install

# Run the setup wizard
node scripts/setup-new-project.js

# Start developing
yarn dev
```

#### Option 2: Manual Setup

1. **Clone and configure:**
   ```bash
   git clone https://github.com/codingsoftmx/anythingllm-docs.git my-project-docs
   cd my-project-docs
   yarn install
   ```

2. **Copy environment template:**
   ```bash
   cp .env.example .env.local
   ```

3. **Edit `.env.local`** with your project details

4. **Start development:**
   ```bash
   yarn dev
   ```

### Environment Variables Reference

All configuration is now managed through environment variables in `.env.local`:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_NAME` | Site name displayed in logo and titles | `"My Project Docs"` |
| `NEXT_PUBLIC_SITE_DOMAIN` | Your docs domain | `"docs.myproject.com"` |
| `NEXT_PUBLIC_SITE_URL` | Full site URL | `"https://docs.myproject.com"` |
| `NEXT_PUBLIC_COMPANY_NAME` | Organization name for footer | `"My Company"` |
| `NEXT_PUBLIC_COMPANY_URL` | Organization URL | `"https://github.com/myorg"` |
| `NEXT_PUBLIC_LOGO_TEXT` | Text next to logo icon | `"My Project"` |
| `NEXT_PUBLIC_TWITTER_URL` | Twitter/X profile URL | `"https://twitter.com/myhandle"` |
| `NEXT_PUBLIC_DISCORD_URL` | Discord invite URL | `"https://discord.gg/invite"` |
| `NEXT_PUBLIC_DOCS_REPO` | GitHub repo for "Edit this page" | `"https://github.com/myorg/docs/tree/main"` |
| `NEXT_PUBLIC_ENABLE_BANNER` | Show announcement banner | `"true"` or `"false"` |
| `NEXT_PUBLIC_BANNER_TEXT` | Banner message content | `"🚀 v2.0 is live!"` |
| `NEXT_PUBLIC_TITLE_TEMPLATE` | Browser tab title format | `"%s ~ My Project"` |
| `NEXT_PUBLIC_BASE_PATH` | Subdirectory path (if needed) | `"/docs"` |

### Files Modified for Template Support

- ✅ `.env.example` - Template with all variables
- ✅ `.env.local` - Local configuration (gitignored)
- ✅ `next.config.js` - Dynamic build configuration
- ✅ `theme.config.tsx` - All branding via environment variables
- ✅ `scripts/setup-new-project.js` - Interactive setup wizard

### Deployment

Build the static site for deployment:

```bash
# Creates 'dist' folder with static files
yarn build

# Deploy 'dist' folder to your hosting provider
# (Vercel, Netlify, GitHub Pages, AWS S3, etc.)
```

### Customization Tips

1. **Logo:** Replace `public/favicon.png` with your favicon
2. **Images:** Add your images to `public/images/`
3. **Content:** Edit files in the `pages/` directory
4. **Navigation:** Modify `pages/_meta.json` for sidebar structure
5. **Styling:** Customize in `theme.config.tsx` or add custom CSS

### Using This Template for Multiple Projects

1. **Fork this repository** for each new project
2. **Run the setup script** or manually edit `.env.local`
3. **Customize content** in `pages/`
4. **Deploy** to your preferred hosting

No code changes needed - just environment variables!

---

**Template Version:** 2.0.0 | **Last Updated:** February 2026
