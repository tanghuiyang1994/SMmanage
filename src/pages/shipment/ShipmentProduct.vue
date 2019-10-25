<template>
  <div>
    <p class="margin weight">商品条形码</p>
    <el-input v-model="code" placeholder="请输入内容" clearable style="width:300px"></el-input>
    <p class="margin weight">数量</p>
    <el-input v-model="productNum" placeholder="请输入内容" clearable style="width:200px"></el-input>
    <span style="fontSize:12px;color:#878A8B">计重商品单位为千克</span>

    <div class="margin">
      <el-button type="success" style="width:70px;height:30px;padding:0px">加入订单</el-button>&nbsp;
      <span style="fontSize:12px;color:#85CE61">重新出库</span>
    </div>
    <!-- 商品列表 -->
    <el-table :data="tableData" stripe style="width: 100%;borderTop:1px solid #ccc;">
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="num" label="数量"></el-table-column>
      <el-table-column prop="price" label="单价(元)"></el-table-column>
      <el-table-column prop="allPrice" label="总价(元)"></el-table-column>
      <el-table-column prop="vipAllPrice" label="优惠总价(元)"></el-table-column>
    </el-table>
    <div style="borderBottom:1px solid #ccc;fontSize:14px;lineHeight:40px;">
      总价：0元，优惠：0元，
      <span style="color:red">小计：0元</span>
    </div>
    <p class="margin weight">会员卡号</p>
    <el-input v-model="vipNum" placeholder="请输入内容" clearable style="width:300px"></el-input>
    <div style="fontSize:12px;color:#878A8B">填写会员卡卡号</div>
    <div class="margin">
      <el-button type="success" style="width:70px;height:30px;padding:0px">确认提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      productNum: "",
      vipNum: "",
      tableData: [
        {
          name: "电视机",
          num: 5,
          price: 1000,
          allPrice: 14000,
          vipAllPrice: 12000
        },
        {
          name: "电视机",
          num: 5,
          price: 1000,
          allPrice: 14000,
          vipAllPrice: 12000
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.margin {
  margin: 10px 0;
}
.weight {
  font-weight: bold;
}
</style>