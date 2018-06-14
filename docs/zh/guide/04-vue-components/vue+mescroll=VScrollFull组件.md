## vue+mescroll==》VScrollFull

简单封装了 [mescroll.js](https://github.com/mescroll/mescroll.git) 使其能再 vue 项目中更方便的使用

### 示例

<div style="height:300px;border:1px solid green;">
  <v-scroll-full ref="myscrollfull"  @load="loadData">
    <div slot="empty" style="text-align:center">无任何数据</div>
    <div v-for="(item,index) in list" :key="index">
    {{item}}
    </div>
  </v-scroll-full>
</div>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods:{
      loadData(pageIndex){
        setTimeout(()=>{
            if(pageIndex==1)this.list=[]
            for(var i=0;i<20;i++){
                this.list.push(pageIndex+'_'+i)
            }
            this.$refs.myscrollfull.endByPage(this.list.length,3)
        },1000)
      }
  }
}
</script>

### 使用说明

在项目中根据需要封装一下即可[仓库地址](https://github.com/yimogit/vue-project-summary/docs/.vuepress/components/VScrollFull.vue)

在 vue 项目中安装 mescroll.js (`npm install --save mescroll.js`) ,然后参考下面代码即可封装自己的滚动组件(上拉下拉就都有了)

### 组件封装

```html
<template>
  <div :id="refName" class="mescroll" :ref="refName">
    <div :class="emptyCls" v-show="showEmptySlot">
      <slot name="empty"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import MeScroll from 'mescroll.js'
import 'mescroll.js/mescroll.min.css'
export default {
  props: {
    pageSize: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      showEmptySlot: false,
      refName: 'mescroll_' + Date.now(),
      instance: null
    }
  },
  computed: {
    emptyCls() {
      return this.refName + '_empty'
    }
  },
  mounted() {
    this.$nextTick(this.$_init())
  },
  methods: {
    $_init() {
      this.showEmptySlot = false
      if (this.instance) this.instance.destroy()
      this.instance = new MeScroll(this.refName, {
        down: {
          use: true,
          auto: false //默认不执行下拉刷新的回调
        },
        up: {
          callback: this.$_upCallback,
          use: true,
          isBounce: false,
          offset: 100,
          noMoreSize: 10,
          loadFull: {
            //不满一屏自动加载
            use: false,
            delay: 500
          },
          page: {
            num: 0,
            size: this.pageSize,
            time: null
          },
          scrollbar: {
            use: false
          }
        }
      })
      let _this = this
      this.instance.showEmpty = function() {
        _this.showEmptySlot = true
      }
      this.instance.removeEmpty = function() {
        _this.showEmptySlot = false
      }
    },
    // 上拉回调
    $_upCallback(page) {
      this.$emit('load', page.num)
    },
    getInstance() {
      return this.instance
    },
    endByPage(curPagelen, totalPage) {
      this.instance && this.instance.endByPage(curPagelen, totalPage)
    }
  }
}
</script>
```

### 测试代码

```html
<div style="height:300px;border:1px solid green;">
  <v-scroll-full ref="myscrollfull"  @load="loadData">
    <div slot="empty" style="text-align:center">无任何数据</div>
    <div v-for="(item,index) in list" :key="index">
    {{item}}
    </div>
  </v-scroll-full>
</div>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods:{
      loadData(pageIndex){
        setTimeout(()=>{
            if(pageIndex==1)this.list=[]
            for(var i=0;i<20;i++){
                this.list.push(pageIndex+'_'+i)
            }
            this.$refs.myscrollfull.endByPage(this.list.length,3)
        },1000)
      }
  }
}
</script>
```
