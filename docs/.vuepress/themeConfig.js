const utils = require('./helper/utils')
module.exports = {
  repo: 'yimogit/',
  repoLabel: 'Github',
  editLinks: false,
  activeHeaderLinks: true,
  sidebarDepth: 1,
  search: true,
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '帮助我们改善此页面！',
      lastUpdated: '上次更新',
      nav: [
        {
          text: '一点经验',
          link: '/zh/guide/'
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
        '/zh/guide/': utils.genSidebarConfig(
          '一点经验',
          './docs/zh/guide',
          true
        ),
        // '/zh/test/': utils.genSidebarConfig('测试', './docs/zh/test', true) 
      }
    }
  }
}
