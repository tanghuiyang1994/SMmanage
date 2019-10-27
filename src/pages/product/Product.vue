<template>
  <div>
    <p>查看和管理所有已有的商品</p>
    <el-tabs type="border-card">
      <el-tab-pane label="商品管理">
        <el-select v-model="value" placeholder="选择分类">
          <el-option
            v-for="(item,key) in tableData"
            :key="key"
            :value="item.category"
          ></el-option>
        </el-select>&emsp;
        <span>关键字:</span>
        &emsp;
        <el-input placeholder="请输入内容" v-model="input" clearable class="textInp"></el-input>&emsp;
        <span>(商品名称,条形码)</span>
        &emsp;
        <el-button type="primary">查询</el-button>
        <!-- 商品列表 -->
        <table>
          <thead>
            <th>商品条形码</th>
            <th>商品名称</th>
            <th>所属分类</th>
            <th>售价(元)</th>
            <th>促销价(元)</th>
            <th>市场价(元)</th>
            <th>库存</th>
            <th>库存总额(元)</th>
            <th>销售总额(元)</th>
            <th>管理</th>
          </thead>
          <tbody>
            <tr v-for="(item,key) in tableData" :key="key">
              <td>{{item.barCode}}</td>
              <td>{{item.name}}</td>
              <td>{{item.category}}</td>
              <td>{{item.salePrice}}</td>
              <td>{{item.barCode}}</td>
              <td>{{item.marketPrice}}</td>
              <td>{{item.stockCount}}</td>
              <td>{{item.salePrice*item.stockCount}}</td>
              <td>{{item.barCode}}</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <!-- 商品分页 -->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
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
    productApi(this.currentPage,this.pageNum).then(res => {
     
      this.tableData = res.data;
    });
    getTotalApi().then(res => {
     
      for (let i of res.data) {
        this.count=Number(Object.values(i));
      }
    });
  },
  computed: {},
  methods: {
    handleSizeChange(val) {
  
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage=val;
       productApi(this.currentPage,this.pageNum).then(res => {
     
      this.tableData = res.data;
    });
      console.log(`当前页: ${val}`);
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