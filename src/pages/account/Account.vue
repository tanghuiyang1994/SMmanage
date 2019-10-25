<template>
  <div>
    <div>查看所有管理员账号</div>
    <div class="account">
      <el-tabs type="border-card" class="tab">
          <!-- 账号管理 -->
        <el-tab-pane label="账号管理">
          <div>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="用户名称" width="180">admin</el-table-column>
              <el-table-column prop="name" label="用户组" width="180">超级管理员</el-table-column>
              <el-table-column prop="address" label="管理">
                <button>修改</button>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <!-- 添加账号 -->
        <el-tab-pane label="添加账号">
         
        </el-tab-pane>
        <!-- 修改密码 -->
        <el-tab-pane label="修改密码">
    
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

 
export default {

  data() {
     
    return {
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }], 
    }
    },
 
   
};
</script>

<style lang="less" scoped>
</style>