export default {
  props: {
    value: {
      type: [String, Array] // 对象属性包含filePath
    },
    category: {
      type: String,
      default: 'common'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    isFile: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String
    },
    limit: {
      type: Number,
      default: 100
    },
    maxSize: {
      type: Number,
      default: 5
    },
    formName: {
      type: String,
      default: 'file'
    },
    disabled: Boolean,
    action: Function,
    previewAction: Function,
    toastAction: Function
  },
  data() {
    return {
      acceptValue: !this.isFile && !this.accept ? 'image/*' : this.accept
    }
  },
  methods: {
    uploadAction(formData, category) {
      return this.action
        ? this.action(formData, category)
        : new Promise((resolve, reject) => {
            resolve({
              status: 1,
              msg: '测试',
              data: {
                filePath: 'https://cn.vuejs.org/images/logo.png'
              }
            })
          })
    },
    getDownloadUrl(url) {
      return (this.previewAction && this.previewAction(url)) || url
    },
    warnToast(msg) {
      ;(this.toastAction && this.toastAction('warn', msg)) || alert(msg)
    },
    successToast(msg) {
      ;(this.toastAction && this.toastAction('success', msg)) || alert(msg)
    },
    showProgress() {},
    hideProgress() {},
    beforeUpload(file) {
      const isLt = file.size / 1024 / 1024 < this.maxSize
      if (!isLt) {
        this.warnToast('上传文件大小不能超过 ' + this.maxSize + 'MB!')
        return isLt
      }
      this.fileList = []
      return true
    }
  }
}
