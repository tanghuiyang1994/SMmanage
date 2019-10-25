<template>
  <div>
    <p class="stockTitle">商品条形码</p>
    <el-input placeholder="请输入内容" v-model="input1" clearable class="InputW"></el-input>
    <p class="stockTitle">数量</p>
    <el-input placeholder="请输入内容" v-model="input2" clearable class="InputW"></el-input>
    <p class="weight">计重商品单位为千克</p>
    <p class="stockTitle">进价</p>
    <el-input placeholder="请输入内容" v-model="input3" clearable class="InputW"></el-input>
    <span>元</span>
    <div>
      <el-button type="primary" class="stockBtn">入库</el-button>
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
     
    };
  }
};
</script>

<style lang="less" scoped>
.InputW {
  width: 200px;
}
.weight {
  font-size: 12px;
}
.stockTitle {
  margin: 10px 0;
}
.stockBtn {
  width: 100px;
  margin: 30px;
}

</style>