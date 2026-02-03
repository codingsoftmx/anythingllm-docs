import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

// Environment variables with fallbacks
const env = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'AnythingLLM Docs',
  siteDomain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'docs.anythingllm.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.anythingllm.com',
  siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'All-in-one AI application with RAG, AI Agents, and more.',
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Mintplex Labs',
  companyUrl: process.env.NEXT_PUBLIC_COMPANY_URL || 'https://github.com/Mintplex-Labs',
  logoText: process.env.NEXT_PUBLIC_LOGO_TEXT || 'AnythingLLM Docs',
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@mintplexlabs',
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/mintplexlabs',
  discordUrl: process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/Dh4zSZCdsC',
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/Mintplex-Labs',
  docsRepo: process.env.NEXT_PUBLIC_DOCS_REPO || 'https://github.com/Mintplex-Labs/anythingllm-docs/tree/main',
  enableBanner: process.env.NEXT_PUBLIC_ENABLE_BANNER === 'true',
  bannerText: process.env.NEXT_PUBLIC_BANNER_TEXT || '🚀 AnythingLLM is live! Update now →',
  bannerUrl: process.env.NEXT_PUBLIC_BANNER_URL || 'https://anythingllm.com/download',
  bannerKey: process.env.NEXT_PUBLIC_BANNER_KEY || 'release',
  titleTemplate: process.env.NEXT_PUBLIC_TITLE_TEMPLATE || '%s ~ AnythingLLM',
  themeColor: process.env.NEXT_PUBLIC_THEME_COLOR || '#2f3136',
  faviconPath: process.env.NEXT_PUBLIC_FAVICON_PATH || '/favicon.png',
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || '/images/og.png',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

// Import meta file for version detection
let newRelease = '1.0.0'
try {
  const metaModule = require('./pages/changelog/_meta.json')
  const versions = Object.keys(metaModule)
    .filter((version) => !version.endsWith('.pre') && !version.includes('rc'))
  if (versions.length > 0) {
    newRelease = versions.reduce((a, b) =>
      0 < a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
        ? a
        : b
    )
  }
} catch (e) {
  // If meta file doesn't exist, use env or default
  console.log('Changelog meta not found, using default version')
}

const config: DocsThemeConfig = {
  project: {
    link: env.twitterUrl,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
      </svg>
    )
  },
  chat: {
    link: env.discordUrl,
  },
  docsRepositoryBase: env.docsRepo,
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href={env.companyUrl} target="_blank" rel="noreferrer">
          {env.companyName}
        </a>
        .
      </span>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: env.titleTemplate
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: null,
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? `${env.siteUrl}${env.ogImage}`
        : `${env.siteUrl}/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content={env.themeColor} />
        <meta name="theme-color" content={env.themeColor} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={env.siteDescription} />
        <meta name="og:description" content={env.siteDescription} />
        <meta property="og:url" content={env.siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content={env.siteDomain} />
        <meta property="twitter:title" content={`${env.siteName} | The all-in-one AI desktop app.`} />
        <meta property="twitter:description" content={env.siteDescription} />
        <meta name="twitter:url" content={env.siteUrl} />
        <meta name="og:title" content={title ? title + ' – ' + env.siteName : env.siteName} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content={env.siteName} />
        <link rel="icon" href={`${env.basePath}${env.faviconPath}`} type="image/png" />
      </>
    )
  },
  logo: (
    <>
      <img 
        src="/anything-llm-light.png" 
        alt="AnythingLLM Logo" 
        width="35" 
        height="35"
        style={{ marginRight: '0.7em' }}
      />
      <span style={{ marginLeft: '.7em', fontWeight: 700, color: '#ffffff' }}>
        {env.logoText}
      </span>
    </>
  ),
  banner: env.enableBanner ? {
    dismissible: true,
    key: `${newRelease}-${env.bannerKey}`,
    text: (
      <a href={env.bannerUrl} target="_blank" rel="noreferrer">
        {env.bannerText.replace('{version}', newRelease)}
      </a>
    )
  } : undefined
}

export default config
