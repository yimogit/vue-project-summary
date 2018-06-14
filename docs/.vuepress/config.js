const themeConfig = require('./themeConfig')

module.exports = {
  // host: '0.0.0.0',
  //   port: 3030,
  title: 'Vue.js 项目实践',
  description: '使用 vue 相关技术栈的经验总结',
  base: '/',
  dest: './dist',
  serviceWorker: true, //PWA
  themeConfig,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Vue.js 项目实践',
      description: '使用 vue 相关技术栈的经验总结'
    }
  },
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]]
}
