(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{290:function(t,s,n){"use strict";n.r(s);var a=n(1),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"vue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[t._v("#")]),t._v(" vue")]),n("h2",{attrs:{id:"根据环境读取配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据环境读取配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 根据环境读取配置")]),n("p",[t._v("在实际项目开发中,接口域名等配置开发环境和生成有所不同,需要将其剥离开来,方法很多,下面介绍我所认为的最简单做法")]),n("ol",[n("li",[t._v("在项目中新建 config 文件夹")]),n("li",[t._v("添加 index.js 并写入"),n("code",[t._v("export default require('./_' + process.env.NODE_ENV)")])]),n("li",[t._v("根据 vue-cli 生成的环境变量(根目录 config 设置)有三个环境:"),n("code",[t._v("development")]),t._v(","),n("code",[t._v("testing")]),t._v(","),n("code",[t._v("production")]),t._v(",config 目录结构如下所示")])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    config\n        - _development.js\n        - _production.js\n        - _testing.js\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("使用:"),n("code",[t._v("import webConfig from '@/config'")]),t._v(",运行后将自动根据环境加载不同的配置")]),n("li",[t._v("config 代码示例\n"),n("img",{attrs:{src:"https://dn-coding-net-production-pp.qbox.me/a9d58aac-b0d0-4350-8f8d-4c6e839fae6f.png",alt:"图片"}})])]),n("h3",{attrs:{id:"其他配置方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他配置方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他配置方式")]),n("ol",[n("li",[t._v("在 "),n("code",[t._v("build\\webpack.base.conf.js")]),t._v(" 中设置别名")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  resolve"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    extensions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.json'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alias"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'vue$'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vue/dist/vue.esm.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'@'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'src'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'config$'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n        "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'src/config/config.prod.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'src/config/config.dev.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[t._v("使用的时候直接"),n("code",[t._v("import config from 'config'")]),t._v("即可")]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("直接将配置写在 config\\xxx.env.js 中。通过"),n("code",[t._v("process.env.变量")]),t._v("使用，但这种开发时变更配置测试的时候不太方便，需要重启开发服务器才能生效")])])])}],!1,null,null,null);o.options.__file="根据环境读取配置.md";s.default=o.exports}}]);