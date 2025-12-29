// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit',
    '@nuxthub/core',
    'nuxt-studio'
  ],

  studio: {
    enabled: true,
    route: '/_studio', // 관리자 페이지 접속 경로
    repository: {
      provider: 'github',
      owner: 'biwoom',       // 귀하의 GitHub 사용자명/조직명
      repo: 'damdam-base',   // 귀하의 리포지토리 이름
      branch: 'main'         // 커밋할 브랜치
    }
  },

  hub: {
    database: true, // D1 데이터베이스 사용 활성화
    blob: true,     // (필요시) 파일 업로드용 R2 스토리지 활성화
    analytics: true // (필요시) 방문자 분석 활성화
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://damdam.info',
    title: 'damdam',
    description: 'A template for building documentation with Nuxt UI and Nuxt Content.',
    full: {
      title: 'damdam - Full Documentation',
      description: 'This is the full documentation for the damdam.'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/essentials%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'damdam'
  }
})