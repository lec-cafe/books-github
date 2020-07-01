const { description } = require('../../package')
const sidebar = require("./nav.js")

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GitHub Note',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "GitHub を利用した バージョン管理の手法をまとめています。",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'lec-cafe/books-nuxtjs',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'ページに不明点や誤字等があれば、Github にて修正を提案してください！',
    lastUpdated: false,
    nav: [
      {text: 'Lec Café', link: 'https://leccafe.connpass.com/'},
    ],
    sidebar: {
      "/lessons/": [
        {
          title: 'Nuxt.js を利用したWebサイト制作',
          collapsable: false,
          path: "/lessons/github",
          children: [
            'github/1.setup',
            'github/2.page',
            'github/3.subpage',
            'github/4.css',
            'github/5.image',
            'github/6.build',
          ]
        },
        "/nuxtjs/"

      ],
      "/nuxtjs/": [
        {
          title: 'Nuxt.js Tips',
          collapsable: false,
          children: [
            'layout',
            'scss',
            'ssr',
            'lint',
            // 'setup.draft',
          ]
        }
      ],
      '/guide/': [
        {
          title: 'Guid!!e',
          collapsable: false,
          children: [
            '',
            'using-vue',
            'using-vue',
          ]
        }
      ],
      '/guide2/': [
        {
          title: 'Guid!!e',
          collapsable: false,
          children: [
            '',
            'using-vue',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
