const utils = require('./helper/utils')
module.exports = {
  repo: 'yimogit/vue-project-summary',
  repoLabel: 'Github',
  editLinks: true,
  docsDir: 'docs',
  activeHeaderLinks: true,
  sidebarDepth: 1,
  search: true,
  locales: {
    '/': {
      label: '简体中文',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: '一点经验',
          link: '/guide/'
        },
        {
          text: '玩具链接',
          items: [
            { text: 'metools', link: 'https://github.com/yimogit/metools/' },
            {
              text: 'metools-plugin',
              link: 'https://github.com/yimogit/metools-plugin'
            },
            {
              text: 'vue-mui-app',
              link: 'https://github.com/yimogit/vue-mui-app'
            },
            { text: 'vue-layui', link: 'https://github.com/yimogit/vue-layui' },
            { text: '易墨‘Blogs', link: 'https://www.yimo.link/' }
          ]
        }
      ],
      sidebar: {
        '/guide/': utils.genSidebarConfig('一点经验', './docs/guide', true)
      }
    }
  }
}
