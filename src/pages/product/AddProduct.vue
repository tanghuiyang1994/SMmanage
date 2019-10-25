<template>
  <div>
    <p class="addProductTitle">所属分类</p>
    <el-select v-model="value" placeholder="选择分类">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <p class="addProductTitle">商品名称</p>
    <el-input placeholder="请输入内容" v-model="productName" class="InputBox"></el-input>
    <p class="addProductTitle">商品售价</p>
    <el-input placeholder="请输入内容" v-model="productName" class="InputBox"></el-input>
    <p class="addProductTitle">市场价</p>
    <el-input placeholder="请输入内容" v-model="productName" class="InputBox"></el-input>
    <p class="addProductTitle">商品进价</p>
    <el-input placeholder="请输入内容" v-model="productName" class="InputBox"></el-input>
    <p class="addProductTitle">入库数量</p>
    <el-input placeholder="请输入内容" v-model="productName" class="InputBox"></el-input>
    <p class="addProductTitle">商品质量</p>
    <el-input placeholder="请输入内容" v-model="productName" class="InputBox"></el-input>
    <p class="addProductTitle">商品单位</p>
    <el-input placeholder="请输入内容" v-model="productName" class="InputBox"></el-input>
    <p class="addProductTitle">会员优享</p>
    <el-radio v-model="radio" label="1">享受</el-radio>
    <el-radio v-model="radio" label="2">不享受</el-radio>
    <p class="addProductTitle">是否促销</p>
    <el-radio v-model="radio2" label="1">启用</el-radio>
    <el-radio v-model="radio2" label="2">禁用</el-radio>
    <p class="addProductTitle">商品简介</p>
    <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="200" show-word-limit></el-input>
    <el-button type="primary" class="addProductBtn">添加</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      productName: "",
      radio: "1",
      radio2: "2",
       text: '',
      textarea: '',
      options: [
        {
          value: "选项1",
          label: "奶茶"
        },
        {
          value: "选项2",
          label: "水果"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.addProductTitle{
    margin: 10px 0;
}
.InputBox {
  width: 300px;
}
.addProductBtn{
    width:200px;
    margin: 40px 0;
}
</style>