<template>
  <div>
    <el-tabs type="border-card">
      <!-- 库存情况 -->
      <el-tab-pane label="销售明细">
        &nbsp;<span>开始时间:</span>&nbsp;
        <el-input placeholder="请输入内容" v-model="startDtae" clearable class="textInp"></el-input>&nbsp;
        <span>结束时间:</span>&nbsp;
        <el-input placeholder="请输入内容" v-model="overDate" clearable class="textInp"></el-input>&nbsp;
        <div class="query">
           &nbsp;<span>关键字:</span>&emsp;&nbsp;
          <el-input placeholder="请输入内容" v-model="keyword" clearable class="textInp"></el-input>&nbsp;
          <span>商品名称，订单号，客户名字，会员卡号</span>&nbsp;
          <el-button type="primary">查询</el-button>
        </div>
        <!-- 商品列表 -->
        <el-table :data="tableData" stripe style="width: 100%" class="border">
          <el-table-column prop="orderNum" label="订单号" width="150"></el-table-column>
          <el-table-column prop="name" label="名称" width="180"></el-table-column>
          <el-table-column prop="num" label="数量)"></el-table-column>
          <el-table-column prop="price" label="实际售价"></el-table-column>
          <el-table-column prop="vip" label="优惠(促销/会员)"></el-table-column>
          <el-table-column prop="refund" label="退款"></el-table-column>
          <el-table-column  prop="sellDate"  label="销售时间"></el-table-column>
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
      <!-- 商品出库 -->
      <el-tab-pane label="商品出库">
          
      </el-tab-pane>
      <el-tab-pane label="商品退货">
      
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentPage: 1, //分页
      tableData: [
        //商品列表
        {
          orderNum: "4561566515",
          name: "优乐美",
          price: "5.00",
          num: "10",
          vip: "1.00元/无",
          refund: "无退款",
          sellDate:'2012-02-17',
        },
       {
          orderNum: "4561566515",
          name: "优乐美",
          price: "5.00",
          num: "10",
          vip: "1.00元/无",
          refund: "无退款",
          sellDate:'2012-02-17',
        },
      ],
      options: [
        //选择分类
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ],
      value: "",
      startDtae: "",
      overDate: "",
      keyword: "",
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
.textInp {
  width: 200px;
  display: inline-block;
}
.colorRed {
  color: red;
}
.productBtnBox {
  display: flex;
}
.productBtn {
  width: 50px;
  height: 30px;
  padding: 0;
}
.block {
  margin: 30px;
}
.query{
    margin-top: 10px
}
.border{
    margin-top:20px;
    border-top: 1px solid #ccc;
}
</style>