<template>
  <div>
    <div>查看所有管理员账号</div>
    <div class="account">
      <el-tabs type="border-card" class="tab">
          <!-- 账号管理 -->
        <el-tab-pane label="账号管理">
          <div>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="account" label="用户名称" width="180"></el-table-column>
              <el-table-column :prop="userGroup==0?'超级管理员':(userGroup==1?'管理员':'店员')" label="用户组" width="180"></el-table-column>
              <el-table-column  label="管理">
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      
      
      </el-tabs>
    </div>
  </div>
</template>

<script>
import {accApi} from '../../apis/api'
 
export default {

  data() {
     
    return {
         tableData: [], 
    }
    },
  created(){
    accApi().then(res=>{
      console.log(res.data)
      this.tableData=res.data;
    })
  }
   
};
</script>

<style lang="less" scoped>
</style>