## 组件说明

此组件的封装时为了在项目中更加方便的使用，上传接口默认使用 FormData 的格式上传，后台通过接收 formData 保存后台并返回新的图片路径,若为相对路径则通过传递 `previewAction` 参数获取预览路径即可
默认数据返回接口如下：

```json
{
  "status": 1,
  "data": {
    "filePath": ".../xxxxxx.jpg"
  }
}
```

此组件使用的最佳方式(且只能)引入源码使用.hhhhhhhh，
[完整源码戳这里](https://github.com/yimogit/me-admin-template/blob/master/src/components/VUpload/)

## 单选上传

- 上传图片：{{uploadImg}}
  <v-upload-single v-model="uploadImg" />

```html
<v-upload-single v-model="uploadImg" />
```

- 上传文件：{{uploadFile}}
  <v-upload-single v-model="uploadFile" is-file/>

```html
<v-upload-single v-model="uploadFile" is-file/>
```

## 多选上传

- 多选上传多张图片，最多上传 2 张每张最大 1M：{{uploadImgList}}
  <v-upload-multiple v-model="uploadImgList"  :multiple="true" :limit="2" :max-size="1" />

```html
<v-upload-multiple v-model="uploadImgList" :multiple="true" :limit="2" :max-size="1" />
```

- 多选上传单个文件，最多上传 2 张每张最大 1M：{{uploadFileList}}
  <v-upload-multiple v-model="uploadFileList" is-file :limit="2" :max-size="1" />

```html
<v-upload-multiple v-model="uploadFileList" is-file :limit="2" :max-size="1" />
```

- 自定义上传事件
  <v-upload-multiple v-model="uploadFileList" :action="uploadAction" />

```html
<v-upload-multiple v-model="uploadFileList" :action="uploadAction" />
<script>
uploadAction(formData,category){
return new Promise((resolve, reject) => {
    resolve({
        status: 1,
        msg: '测试',
        data: {
            filePath: 'https://avatars0.githubusercontent.com/u/15975059'
        }
    })
  })
}
</script>
```

<script>
export default {
  data() {
    return {
        uploadImg:'',
        uploadFile:'',
        uploadImgList: [],
        uploadFileList: [],
    }
  },
  methods:{
      uploadAction(formData,category){
        return new Promise((resolve, reject) => {
            resolve({
              status: 1,
              msg: '测试',
              data: {
                filePath: 'https://avatars0.githubusercontent.com/u/15975059'
              }
            })
          })
      }
  }
}
</script>

### Attribute

| 参数          | 说明                               | 类型     | 默认值   |
| ------------- | ---------------------------------- | -------- | -------- |
| value         | 绑定值                             | string   | -        |
| category      | 上传时追加的分类参数               | string   | common   |
| formName      | 指定上传文件的 form 名称           | String   | file     |
| accept        | 用逗号隔开的 MIME 类型列表         | String   | image/\* |
| multiple      | 是否能一次选择多个                 | Boolean  | false    |
| isFile        | 是否时文件(false:图片,true:文件)   | Boolean  | false    |
| limit         | 最大多选数                         | Number   | 100      |
| maxSize       | 单个文件大小限制，兆(M)为单位      | Number   | 5        |
| disabled      | 是否禁用                           | Boolean  | false    |
| action        | 项目中应当在组件中使用通用上传接口 | Function | -        |
| toastAction   | 通用提示方法                       | Function | -        |
| previewAction | 通用图片预览方法                   | Function | -        |
