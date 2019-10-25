<template>
  <div>
    <el-tabs type="border-card">
      <!-- 账号管理 -->
      <el-tab-pane label="账号管理">
        <span>搜索：</span>
        <el-input placeholder="请输入内容" v-model="search" clearable style="width:300px;"></el-input>
        <span>会员卡，会员名，电话，手机</span>&emsp;
         <el-button type="success">查询</el-button>
         <!-- 会员列表 -->
        <el-table :data="tableData" stripe style="width: 100%" class="border">
          <el-table-column prop="vipNum" label="会员卡卡号" width="150"></el-table-column>
          <el-table-column prop="vipName" label="会员姓名" width="180"></el-table-column>
          <el-table-column prop="vipGarde" label="会员等级"></el-table-column>
          <el-table-column prop="vipIntegral" label="会员积分"></el-table-column>
          <el-table-column prop="vipDiscount" label="折扣"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column  prop="homePhone"  label="座机号"></el-table-column>
            <el-table-column  prop="set"  label="管理">
                <el-button type="primary" style="width:50px;height:30px;padding:0;">设置</el-button>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="10"
          ></el-pagination>
        </div>
      </el-tab-pane>

      <!-- 配置管理 -->
      <el-tab-pane label="添加账号">
     
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data() {
    return {
        search:'',
           currentPage: 1, //分页
      tableData: [
        //会员列表
        {
          vipNum: "4561566515",
          vipName: "优乐美",
          vipGarde: '铜牌会员',
          vipIntegral: "211",
          vipDiscount: "50%",
          phone: "15866488988",
          homePhone:'028-86547875',
          
        },
        {
          vipNum: "4561566515",
          vipName: "优乐美",
          vipGarde: '铜牌会员',
          vipIntegral: "211",
          vipDiscount: "50%",
          phone: "15866488988",
          homePhone:'028-86547875',
          
        },
       
      ],
    };
  },
   methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  
};
</script>

<style lang="less" scoped>
.border{
  border-top: 1px solid #ccc;
  margin:20px 0;
}
.block{
  padding: 20px;
}
</style>