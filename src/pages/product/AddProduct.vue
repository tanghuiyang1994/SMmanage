<template>
  <div>
    <p class="addProductTitle">所属分类</p>
    <el-select v-model="category" placeholder="选择分类">
      <el-option v-for="item in options" :key="item.value"  :value="item.value"></el-option>
    </el-select>
    <p class="addProductTitle">商品名称</p>
    <el-input placeholder="请输入内容" v-model="name" class="InputBox"></el-input>
    <p class="addProductTitle">商品条形码</p>
    <el-input placeholder="请输入内容" v-model="barCode" class="InputBox"></el-input>
    <p class="addProductTitle">商品售价</p>
    <el-input placeholder="请输入内容" v-model="salePrice" class="InputBox"><template slot="append">元</template></el-input>
    <p class="addProductTitle">市场价</p>
    <el-input placeholder="请输入内容" v-model="marketPrice" class="InputBox"><template slot="append">元</template></el-input>
    <p class="addProductTitle">商品进价</p>
    <el-input placeholder="请输入内容" v-model="stockPrice" class="InputBox"><template slot="append">元</template></el-input>
    <p class="addProductTitle">入库数量</p>
    <el-input placeholder="请输入内容" v-model="stockCount" class="InputBox"></el-input>
    <p class="addProductTitle">商品重量</p>
    <el-input placeholder="请输入内容" v-model="commodityWeight" class="InputBox"></el-input>
    <p class="addProductTitle">商品单位</p>
    <el-input placeholder="请输入内容" v-model="commodityUnit" class="InputBox"></el-input>
    <p class="addProductTitle">会员优享</p>
    <el-radio v-model="vipDiscount" label="1">享受</el-radio>
    <el-radio v-model="vipDiscount" label="0">不享受</el-radio>
    <p class="addProductTitle">是否促销</p>
    <el-radio v-model="promotion" label="1">启用</el-radio>
    <el-radio v-model="promotion" label="0">禁用</el-radio>
    <p class="addProductTitle">商品简介</p>
    <el-input type="textarea" placeholder="请输入内容" v-model="goodsDesc" maxlength="200" show-word-limit></el-input>
    <div style="color:red;width:200px;height:20px;" >
      <span v-show="show">内容填写不完整!</span>
    </div>
    <el-button type="primary" class="addProductBtn" @click="addProduct">添加</el-button>
  </div>
</template>

<script>
import {addProductApi} from '../../apis/api'
export default {
  data() {
    return {
      show:false,
      category: "",
      name: "",//商品名称
      barCode:'',//商品条形码
      salePrice:'',//商品售价
      marketPrice:'',//市场价
      stockPrice:'',//进价
      stockCount:'',//入库数量
      commodityWeight:'',//商品重量
      commodityUnit:'',//商品单位
      vipDiscount: "1",//会员优惠
      promotion: "0",//是否促销
      goodsDesc: '',//商品简介
      options: [
        {
          value: "奶茶",
        },
        {
          value: "水果"
        }
      ]
    };
  },
  methods:{
    
    addProduct(){
      if(this.category&&this.name&&this.barCode&&this.salePrice&&this.marketPrice&&this.stockPrice&&this.stockCount&&this.commodityWeight&&this.commodityUnit&&this.vipDiscount&&this.promotion&&this.goodsDesc){
         addProductApi(this.category,this.name,this.barCode,this.salePrice,this.marketPrice,this.stockPrice,this.stockCount,this.commodityWeight,this.commodityUnit,this.vipDiscount,this.promotion,this.goodsDesc).then(res=>{
        if(res.data=='ok'){
          alert('商品添加成功');
          this.$router.history.push('/index/product')
        }else{
          alert('商品添加失败')
        }
      })
      }else{
        this.show=true;
      }
     
    }
  }
};
</script>

<style lang="less" scoped>
.addProductTitle{
    margin: 10px 0;
}
.InputBox {
  width: 400px;
}
.addProductBtn{
    width:200px;
    margin: 40px 0;
}
</style>