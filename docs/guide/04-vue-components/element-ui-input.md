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

```
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
```
