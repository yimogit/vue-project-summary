## 强类型文本框

## 组件测试

<v-form-input v-model="inputValue" validate="z-number" :min="1" :max="1"/>
inputValue:{{inputValue}}

<script>
export default {
  data() {
    return {
      inputValue: null
    }
  }
}
</script>

### 使用代码

```
<v-form-input v-model="inputValue" validate="z-number" :min="1" :max="1"/>
inputValue:{{inputValue}}

<script>
export default {
  data() {
    return {
      inputValue: 233
    }
  }
}
</script>
```
