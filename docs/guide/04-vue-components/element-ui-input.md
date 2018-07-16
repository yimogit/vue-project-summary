## 强类型文本框

## 组件测试

<div>
    <v-form-input v-model="inputValue" validate="z-number" :min="1" :max="1"/>
    inputValue:{{inputValue}}
    <v-form-input v-model="inputValue2" validate="f-number" :min="-100" :max="-1"/>
    inputValue:{{inputValue2}}
</div>

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputValue2: '',
    }
  }
}
</script>

### 使用代码

```vue
<div>
    <v-form-input v-model="inputValue" validate="z-number" :min="1" :max="1"/>
    inputValue:{{inputValue}}
    <v-form-input v-model="inputValue2" validate="f-number" :min="-100" :max="-1"/>
    inputValue:{{inputValue2}}
</div>

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputValue2: ''
    }
  }
}
</script>
```

## 组件源码

```vue
<template>

  <el-input :type="type" v-model="currentValue" :maxlength="maxlength" :disabled="disabled" :class="small?'inline-small-input':''" :placeholder="placeholder">
    <slot name="prefix" slot="prefix"></slot>
    <slot name="suffix" slot="suffix"></slot>
    <slot name="prepend" slot="prepend"></slot>
    <slot name="append" slot="append"></slot>
  </el-input>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    },
    maxlength: {
      type: Number
    },
    small: {
      type: Boolean,
      default: false
    },
    validate: {
      type: String,
      default: '' // number float
    },
    fixed: {
      type: Number,
      default: -1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  data() {
    return {
      currentValue: null
    }
  },
  watch: {
    value: {
      handler(val) {
        if (val !== this.currentValue) {
          this.currentValue = val
        }
      },
      immediate: true
    },
    currentValue(val, oldVal) {
      this.$nextTick(() => {
        this.currentValue = this.convert(val)
        this.$emit('input', this.currentValue)
      })
    }
  },
  methods: {
    convert(val) {
      switch (this.validate) {
        case 'number':
          val = parseInt(this.currentValue) || 0
          break
        case 'z-number':
          val = Math.max(parseInt(this.currentValue) || 0, 0)
          break
        case 'f-number':
          val = Math.min(parseInt(this.currentValue) || 0, 0)
          break
        case 'float':
          val = parseFloat(this.currentValue) || 0
          val = this.fixed > -1 ? val.toFixed(this.fixed) : val
          break
        case 'z-float':
          val = Math.max(parseFloat(this.currentValue) || 0, 0)
          val = this.fixed > -1 ? val.toFixed(this.fixed) : val
          break
        case 'f-float':
          val = Math.min(parseFloat(this.currentValue) || 0, 0)
          val = this.fixed > -1 ? val.toFixed(this.fixed) : val
          break
        default:
          break
      }
      if (this.validate !== '') {
        if (typeof this.max === 'number') {
          val = Math.min(this.max, val)
        }
        if (typeof this.min === 'number') {
          val = Math.max(val, this.min)
        }
      }
      return val
    }
  }
}
</script>
```
