#!/usr/bin/env node

/**
 * Setup Script for New Documentation Projects
 * 
 * This script helps you quickly configure a new documentation site
 * based on the AnythingLLM Docs template.
 * 
 * Usage: node scripts/setup-new-project.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

async function setup() {
  console.log('🚀 Documentation Site Setup\n');
  console.log('This will create a .env.local file for your new project.\n');

  const answers = {
    siteName: await question('Site Name (e.g., "My Project Docs"): '),
    siteDomain: await question('Site Domain (e.g., "docs.myproject.com"): '),
    companyName: await question('Company/Organization Name: '),
    companyUrl: await question('Company URL (e.g., https://github.com/myorg): '),
    docsRepo: await question('Documentation Repository URL: '),
    twitterUrl: await question('Twitter/X URL (press Enter to skip): ') || '',
    discordUrl: await question('Discord URL (press Enter to skip): ') || '',
  };

  // Generate .env.local content
  const envContent = `# ${answers.siteName} - Environment Configuration
# Generated on ${new Date().toISOString()}

# ================================================
# SITE CONFIGURATION
# ================================================

NEXT_PUBLIC_SITE_NAME="${answers.siteName}"
NEXT_PUBLIC_SITE_DOMAIN="${answers.siteDomain}"
NEXT_PUBLIC_SITE_URL="https://${answers.siteDomain}"
NEXT_PUBLIC_SITE_DESCRIPTION="Documentation for ${answers.siteName}"

# ================================================
# BRANDING
# ================================================

NEXT_PUBLIC_COMPANY_NAME="${answers.companyName}"
NEXT_PUBLIC_COMPANY_URL="${answers.companyUrl}"
NEXT_PUBLIC_LOGO_TEXT="${answers.siteName}"

# ================================================
# SOCIAL & COMMUNITY
# ================================================

NEXT_PUBLIC_TWITTER_URL="${answers.twitterUrl}"
NEXT_PUBLIC_DISCORD_URL="${answers.discordUrl}"
NEXT_PUBLIC_GITHUB_URL="${answers.companyUrl}"
NEXT_PUBLIC_DOCS_REPO="${answers.docsRepo}"

# ================================================
# FEATURES & BANNER
# ================================================

NEXT_PUBLIC_ENABLE_BANNER="false"
NEXT_PUBLIC_BANNER_TEXT="🚀 New version available!"
NEXT_PUBLIC_BANNER_URL="${answers.companyUrl}"
NEXT_PUBLIC_BANNER_KEY="release"

# ================================================
# SEO & META
# ================================================

NEXT_PUBLIC_TITLE_TEMPLATE="%s ~ ${answers.siteName}"
NEXT_PUBLIC_THEME_COLOR="#2f3136"
NEXT_PUBLIC_FAVICON_PATH="/favicon.png"
NEXT_PUBLIC_OG_IMAGE="/images/og.png"

# ================================================
# BUILD & DEPLOYMENT
# ================================================

NEXT_PUBLIC_BASE_PATH=""
NEXT_PUBLIC_OUTPUT_DIR="dist"
`;

  // Write .env.local
  fs.writeFileSync(path.join(process.cwd(), '.env.local'), envContent);

  console.log('\n✅ Configuration saved to .env.local');
  console.log('\n📋 Next steps:');
  console.log('   1. Install dependencies: yarn install');
  console.log('   2. Start development server: yarn dev');
  console.log('   3. Build for production: yarn build');
  console.log('   4. Deploy the "dist" folder to your hosting');
  console.log('\n🎉 Happy documenting!\n');

  rl.close();
}

setup().catch(console.error);
