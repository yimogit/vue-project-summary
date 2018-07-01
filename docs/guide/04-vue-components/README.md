# vue-components

经常会使用到组件封装

## element-ui 上传组件的二次封装

- [v-upload-single](./element-ui-upload.md#单选上传)
- [v-upload-multiple](./element-ui-upload.md#多选上传)

## element-ui 表格组件的二次封装

- [v-table-pager](./element-ui-table.md)

## vue+mescroll 打造移动端滚动条组件

说时移动端，PC 端也挺好用：[vue-mescroll](./vue-mescroll.md)

简单在 vue 中封装了 mescroll.js 使其能够更容易在项目中使用，包含下拉刷新，上拉加载功能

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
