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
