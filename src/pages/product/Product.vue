<template>
  <div>
    <p>查看和管理所有已有的商品</p>
    <el-tabs type="border-card">
      <el-tab-pane label="商品管理">
        <el-select v-model="value" placeholder="全部分类">
          <el-option v-for="item in options" :key="item.index" :value="item.name"></el-option>
        </el-select>&emsp;
        <span>关键字:</span>
        &emsp;
        <el-input placeholder="请输入内容" v-model="input" clearable class="textInp"></el-input>&emsp;
        <span>(商品名称,条形码)</span>
        &emsp;
        <el-button type="primary" @click="search">查询</el-button>
        <!-- 商品列表 -->
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="barCode" label="商品条形码" width="180"></el-table-column>
          <el-table-column prop="name" label="商品名称"></el-table-column>
          <el-table-column prop="category" label="所属分类"></el-table-column>
          <el-table-column prop="salePrice" label="售价(元)"></el-table-column>
          <el-table-column prop="stockPrice" label="进价(元)"></el-table-column>
          <el-table-column prop="marketPrice" label="市场价(元)"></el-table-column>
          <el-table-column prop="stockCount" label="库存"></el-table-column>
          <el-table-column prop="vipDiscount" label="会员优惠"></el-table-column>
          <el-table-column prop="promotion" label="是否促销"></el-table-column>

          <el-table-column prop="address" label="管理">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 商品分页 -->
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[pageNum]"
            :page-size="pageNum"
            layout="total, sizes, prev, pager, next, jumper"
            :total="count"
          ></el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { productApi, getTotalApi } from "../../apis/api";
import category from "@/json/category.json";
export default {
  data() {
    return {
      pageNum: 2,
      currentPage: 1,
      tableData: [],
      input: "",
      count: 0,
      options: [],
      value: ""
    };
  },
  created() {
    
    this.options = [{ name: "全部分类", index: 0 }, ...category];
    this.getgoods(this.currentPage); //初始化商品列表
  },
  computed: {},
  methods: {
   
    getgoods(currentPage, input = "", value = "") {
      //获取商品公共函数
      // if(currentPage==this.currentPage&&input==this.input&&value==this.value)return
      productApi(currentPage, this.pageNum, input, value).then(res => {
       
        for(let obj of res.data.data){
        
           obj.vipDiscount=obj.vipDiscount=='0' ? '无优惠':'有优惠';
          obj.promotion=obj.promotion=='0' ? '无促销':'促销中';
           
        }
         console.log(res.data);
        this.tableData = res.data.data;
        this.count = res.data.total;
      });
    },
    search() {
      console.log(this.value)
      //搜索商品
      this.getgoods(1, this.input, this.value);
    },
    handleCurrentChange(val) {
      this.getgoods(val, this.input, this.value);
      // productApi(this.currentPage, this.pageNum).then(res => {
      //   this.tableData = res.data.data;
      //   this.count = res.data.total;
      // });
      console.log(`当前页: ${val}`);
    },
    handleClick() {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
table {
  margin-top: 30px;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  thead {
    th {
      border-bottom: 1px solid #cccccc;
      padding: 10px;
    }
  }
  td {
    padding: 20px;
  }
}
tr + tr {
  border-top: 1px solid #ccc;
}
tr:hover {
  background: aliceblue;
}
.selBox {
  padding: 8px;
  border-radius: 4px;
  outline: none;
}
.textInp {
  display: inline-block;
  width: 200px;
}
.colorRed {
  color: red;
}
.block {
  margin: 30px 10px;
}
.productBtnBox {
  display: flex;
}
.productBtn {
  width: 50px;
  height: 30px;
  padding: 0;
}
</style>