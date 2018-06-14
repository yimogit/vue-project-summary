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
    },
    downOptions: Object,
    upOptions: Object
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
  beforeDestroy() {
    // if (this.instance) this.instance.destroy()
  },
  methods: {
    $_init() {
      this.showEmptySlot = false
      if (this.instance) this.instance.destroy()
      this.instance = new MeScroll(this.refName, {
        down: Object.assign(
          {
            use: true,
            auto: false //默认不执行下拉刷新的回调
          },
          this.downOptions
        ),
        up: Object.assign(
          {
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
          },
          this.upOptions
        )
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