<template>
  <el-upload :list-type="!isFile?'picture-card':'text'" :disabled="disabled" action="" :accept="acceptValue" :limit="limit" :multiple="multiple" :http-request="uploadImg" :file-list="fileList" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :before-upload="beforeUpload">
    <el-button size="small" type="primary" v-if="isFile" :disabled="disabled||fileList.length>=limit">
      <i class="el-icon-plus"></i>点击上传</el-button>
    <i class="el-icon-plus" v-else-if="fileList.length<limit"></i>
    <i class="el-icon-warning" v-else-if="fileList.length>=limit"></i>
  </el-upload>
</template>
<script>
import Upload from './mixins/upload'
export default {
  mixins: [Upload],
  props: {
    value: Array
  },
  data() {
    return {
      fileList: [],
      currentValue: this.value || [],
      dialogImageUrl: ''
    }
  },
  watch: {
    value(val) {
      this.currentValue = val || []
    },
    currentValue(val) {
      this.fileList = val.map((e, i) => {
        return { name: i, url: this.getDownloadUrl(e) }
      })
    }
  },
  methods: {
    uploadImg(e) {
      const _this = this
      _this.showProgress()
      var formData = new FormData()
      formData.append(_this.formName, e.file) // 文件对象
      _this
        .uploadAction(formData, _this.category)
        .then(res => {
          if (res.status !== 1) {
            return _this.warnToast(res.msg)
          }
          const tempValue = _this.currentValue
          _this.fileList.push({
            name: res.data.fileName,
            url: res.data.fileUrl
          })
          tempValue.push(res.data.filePath)
          _this.$emit('input', tempValue)
          _this.hideProgress()
        })
        .catch(e => {
          _this.hideProgress()
        })
    },
    handleRemove(file, fileList) {
      const _this = this
      const tempValue = _this.currentValue.filter((e, i) => i !== file.name)
      _this.$emit('input', tempValue)
    },
    handlePictureCardPreview(file) {
      window.open(this.getDownloadUrl(file.url))
    }
  }
}
</script>
