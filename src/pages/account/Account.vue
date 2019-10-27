<template>
  <div>
    <div>查看所有管理员账号</div>
    <div class="account">
      <el-tabs type="border-card" class="tab">
          <!-- 账号管理 -->
        <el-tab-pane label="账号管理">
         
            <!-- <el-table :data="tableData" style="width: 100%" @row-click="del">
              <el-table-column prop="id" label="用户名称" width="180"></el-table-column>
              <el-table-column prop="userGroup" label="用户组" width="180"></el-table-column>
              <el-table-column  label="管理">
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="del(row)"></el-button>
              </el-table-column>
            </el-table> -->
            <table>
                <thead>
                  <tr>
                    <th>用户名称</th>
                    <th>用户组</th>
                    <th>管理</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(item) in tableData' :key="item.id">
                    <td>{{item.account}}</td>
                    <td>{{item.userGroup=='0'?'超级管理员':(item.userGroup=='1'?'管理员':'店员')}}</td>
                    <td> <el-button type="primary" icon="el-icon-edit" circle @click="change(item.id)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle @click="del(item.id)"></el-button></td>
                  </tr>
                </tbody>
            </table>
         
        </el-tab-pane>
      
      
      </el-tabs>
    </div>
  </div>
</template>

<script>
import {accApi,delaccApi} from '../../apis/api'
 
export default {

  data() {
     
    return {
         tableData: [], 
    }
    },
  created(){
    accApi().then(res=>{
    //    for(let i of res.data){
    //   i.userGroup=i.userGroup=='0'?'超级管理员':(i.userGroup=='1'?'管理员':'店员')
    //  }
     this.tableData=res.data;
     console.log(this.tableData)
    })
    
  },
  methods:{
    del(id){//删除账号
      delaccApi(id).then(res=>{
        res.data=='ok'?alert('删除成功'):alert('删除失败');
        this.$router.history.push('/index')
      })
    },
    change(id){

    }
  }
   
};
</script>

<style lang="less" scoped>
table{
  width:100%;
  text-align: center;
  border-collapse: collapse;
  thead{
    tr{
      border-bottom: 1px solid #cccccc;
      th{
        padding: 10px;
      }
    }
  }
  td{
    padding: 20px;
  }
}
tr+tr{
  border-top:1px solid #ccc;
}
tr:hover{
  background: aliceblue;
}
</style>