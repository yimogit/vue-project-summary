## element-ui 表格的封装

> 添加了分页及其多选单选的封装，通过传入接口方法，即可调初始化表格

仅供参考，[最新源码戳这里](https://github.com/yimogit/me-admin-template/blob/master/src/components/VTable/Pager.vue)

<div style="clear:both;padding-bottom: 40px;">
    <el-row>
        <el-col :span="18">
            <el-form :inline="true">
                <el-form-item label="关键字">
                    <el-input type="text" v-model="search.keyword">
                        <el-button slot="append" icon="el-icon-search" @click="e=>this.$refs.mytable.loadData()"></el-button>
                    </el-input>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
    <v-table-pager :height="400" :loadAction="getAdminList" :loadSearch="search" ref="mytable" :show-checkbox="true" radio-key="id" :hide-pager="false" @handle-radio="e=>toast(e.adminName)" @handle-checkbox="e=>{checkList=e;toast(e.map(s=>s.adminName))}">
        <div slot="toolbar">
            <el-button type="primary" @click="e=>this.toast(checkList.length)">选中行数</el-button>
            <el-button type="danger" @click="e=>this.toast(checkList.map(s=>s.adminName))">选择名称</el-button>
        </div>
        <el-table-column type="expand" :resizable="false">
            <template slot-scope="props">
                <p>表格嵌套</p>
                <v-table-pager :loadAction="getAdminList">
                    <el-table-column prop="adminName" label="管理员名称">
                    </el-table-column>
                </v-table-pager>
            </template>
        </el-table-column>
        <el-table-column prop="adminName" label="管理员名称">
        </el-table-column>
        <el-table-column label="是否启用">
            <template slot-scope="prop">
                <el-tag type="prop.row.isEnable?'success':'info'">{{prop.row.isEnable?'是':'否'}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间">
        </el-table-column>
    </v-table-pager>
</div>

<script>
export default {
  data() {
    return {
      search: {
        keyword: ''
      },
      list: [],
      editDialog: {
        title: '',
        editId: null,
        show: false
      },
      checkList: []
    }
  },
  methods: {
    toast(msg){
       this.$message({
            message: msg,
            type: 'info',
            showClose: true,
            duration: 1500,
        })
    },
    getAdminList(serch){
      return new Promise((resolve, reject) => {
        resolve(
          require('mockjs-lite').mock({
            status: 1,
            data: {
              'rows|10': [
                {
                  id: '@increment',
                  adminName: '@cname',
                  isEnable: '@boolean()',
                  createdAt: '@datetime',
                  'roleIds|1-3': [1, 2, 3]
                }
              ],
              total: 30
            }
          })
        )
      })
    },
  }
}
</script>

```html
<div style="clear:both;padding-bottom: 40px;">
    <el-row>
        <el-col :span="18">
            <el-form :inline="true">
                <el-form-item label="关键字">
                    <el-input type="text" v-model="search.keyword">
                        <el-button slot="append" icon="el-icon-search" @click="e=>this.$refs.mytable.loadData()"></el-button>
                    </el-input>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
    <v-table-pager :tableHeight="300" :loadAction="getAdminList" :loadSearch="search" ref="mytable" :show-checkbox="true" radio-key="id" :hide-pager="false" @handle-radio="e=>toast(e.adminName)" @handle-checkbox="e=>{checkList=e;toast(e.map(s=>s.adminName))}">
        <div slot="toolbar">
            <el-button type="primary" @click="e=>this.toast(checkList.length)">选中行数</el-button>
            <el-button type="danger" @click="e=>this.toast(checkList.map(s=>s.adminName))">选择名称</el-button>
        </div>
        <el-table-column type="expand" :resizable="false">
            <template slot-scope="props">
                <p>表格嵌套</p>
                <v-table-pager :loadAction="getAdminList">
                    <el-table-column prop="adminName" label="管理员名称">
                    </el-table-column>
                </v-table-pager>
            </template>
        </el-table-column>
        <el-table-column prop="adminName" label="管理员名称">
        </el-table-column>
        <el-table-column label="是否启用">
            <template slot-scope="prop">
                <el-tag type="prop.row.isEnable?'success':'info'">{{prop.row.isEnable?'是':'否'}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间">
        </el-table-column>
    </v-table-pager>
</div>

<script>
export default {
  data() {
    return {
      search: {
        keyword: ''
      },
      list: [],
      editDialog: {
        title: '',
        editId: null,
        show: false
      },
      checkList: []
    }
  },
  methods: {
    toast(msg){
       this.$message({
            message: msg,
            type: 'info',
            showClose: true,
            duration: 1500,
        })
    },
    getAdminList(serch){
      return new Promise((resolve, reject) => {
        resolve(
          require('mockjs-lite').mock({
            status: 1,
            data: {
              'rows|10': [
                {
                  id: '@increment',
                  adminName: '@cname',
                  isEnable: '@boolean()',
                  createdAt: '@datetime',
                  'roleIds|1-3': [1, 2, 3]
                }
              ],
              total: 30
            }
          })
        )
      })
    },
  }
}
</script>
```
