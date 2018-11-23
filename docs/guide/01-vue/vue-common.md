---
sidebar: auto
---

# 常用微型组件封装

## loading

<v-loading no-full/>

### 组件源码

```html
<template>
  <div class="loadEffect "
       :class="{'isFull':!noFull}">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
export default {
  props: {
    noFull: Boolean
  }
}
</script>

<style >
@keyframes load {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
@-webkit-keyframes load {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
.loadEffect.isFull {
  position: absolute;
  top: 50%;
  margin-top: -50px;
  left: 50%;
  margin-left: -50px;
}
.loadEffect {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 15px auto;
  text-align: center;
}
.loadEffect span {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #46bd87;
  position: absolute;
  animation: load 1.04s ease infinite;
  -webkit-animation: load 1.04s ease infinite;
}
.loadEffect span:first-child {
  left: 0;
  top: 50%;
  margin-top: -8px;
  animation-delay: 0.13s;
  -webkit-animation-delay: 0.13s;
}
.loadEffect span:nth-child(2) {
  left: 14px;
  top: 14px;
  animation-delay: 0.26s;
  -webkit-animation-delay: 0.26s;
}
.loadEffect span:nth-child(3) {
  left: 50%;
  top: 0;
  margin-left: -8px;
  animation-delay: 0.39s;
  -webkit-animation-delay: 0.39s;
}
.loadEffect span:nth-child(4) {
  top: 14px;
  right: 14px;
  animation-delay: 0.52s;
  -webkit-animation-delay: 0.52s;
}
.loadEffect span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -8px;
  animation-delay: 0.65s;
  -webkit-animation-delay: 0.65s;
}
.loadEffect span:nth-child(6) {
  right: 14px;
  bottom: 14px;
  animation-delay: 0.78s;
  -webkit-animation-delay: 0.78s;
}
.loadEffect span:nth-child(7) {
  bottom: 0;
  left: 50%;
  margin-left: -8px;
  animation-delay: 0.91s;
  -webkit-animation-delay: 0.91s;
}
.loadEffect span:nth-child(8) {
  bottom: 14px;
  left: 14px;
  animation-delay: 1.04s;
  -webkit-animation-delay: 1.04s;
}
</style>
```

## toast

<div>
<v-toast ref="metoast"/>
<button @click="toast">toast</button>
</div>

### 组件源码

```html
<template>
  <div class="custom-toast"
       v-if="options.msg"
       v-html="options.msg"></div>
</template>

<script>
export default {
  data() {
    return {
      options: {},
      $_toast_timer: null
    }
  },
  methods: {
    show(opt) {
      if (!opt || !opt.msg) return
      this.options = Object.assign({}, opt, {
        time: opt.time || 2000
      })
      clearTimeout(this.$_toast_timer)
      this.$_toast_timer = setTimeout(() => {
        this.options.msg = ''
      }, this.options.time)
    }
  }
}
</script>

<style scoped>
.custom-toast {
  position: fixed;
  z-index: 1999;
  top: 10%;
  left: 50%;
  width: 200px;
  margin-left: -100px;
  border: 1px solid #000000;
  background-color: #000c1c;
  padding: 10px 0;
  text-align: center;
  opacity: 0.9;
  -webkit-transition: opacity 0.5s ease-out;
  transition: opacity 0.5s ease-out;
  color: white;
  border-radius: 50px;
  padding: 10px;
  word-break: break-all;
}
</style>
```

## popup

<div>
<button @click="open">弹层</button>
<v-popup v-model="showPopup"
            v-if="showPopup"
            @close="closeHandler">
    <div>
    <img src="http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"
            class="center-img" />
    </div>
</v-popup>
</div>

<script>
    export default {
        data() {
            return {
            showPopup: false
            }
        },
        methods:{
            toast(){
                this.$refs.metoast.show({msg:'23333333'})
            },
            open() {
            this.showPopup = true
            },
            closeHandler() {
            console.log('close')
            }
        }
    }
</script>

### 组件源码

``` html
<template>
  <div class="custom-popup" v-show="popupStatus">
    <div class="custom-popup-block">
      <slot></slot>
    </div>
    <span class="custom-popup-close" @click="close">X</span>
    <div class="custom-popup-shade"></div>
  </div>
</template>


<script>
export default {
  props: {
    value: Boolean
  },
  watch: {
    value: {
      handler(val) {
        if (val !== this.popupStatus) {
          this.popupStatus = val
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      popupStatus: false
    }
  },
  methods: {
    show() {
      this.popupStatus = true
    },
    close() {
      console.log(this.popupStatus)
      this.popupStatus = false
      this.$emit('input', false)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.custom-popup {
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}

.custom-popup .custom-popup-close {
  color: #fff;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  z-index: 100;
  cursor: pointer;
}

.custom-popup .custom-popup-block {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
}
.custom-popup .custom-popup-shade {
  width: 100%;
  height: 100%;
  margin: 0;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
}
</style>

```


