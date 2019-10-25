<template>
  <div>
    <p>查看和管理所有已有的商品</p>
    <el-tabs type="border-card">
      <el-tab-pane label="商品管理">
        <el-select v-model="value" placeholder="选择分类">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>&emsp;
        <span>关键字:</span>
        &emsp;
        <el-input placeholder="请输入内容" v-model="input" clearable class="textInp"></el-input>&emsp;
        <span>(商品名称,条形码)</span>
        &emsp;
        <el-button type="primary">查询</el-button>
        <!-- 商品内容 -->
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="code" label="商品条形码" width="150"></el-table-column>
          <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
          <el-table-column prop="select" label="所属分类"></el-table-column>
          <el-table-column prop="price" label="售价(元)" class="colorRed"></el-table-column>
          <el-table-column prop="salesPrice" label="促销价(元)"></el-table-column>
          <el-table-column prop="marketPrice" label="市场价(元)"></el-table-column>
          <el-table-column prop="repertory" label="库存"></el-table-column>
          <el-table-column prop="repertoryPrice" label="库存总额(元)" class="colorRed"></el-table-column>
          <el-table-column prop="allMoney" label="销售总额(元)" class="colorRed"></el-table-column>
          <el-table-column label="管理">
            <div class="productBtnBox">
              <el-button type="danger" class="delBtn productBtn">删除</el-button>
              <el-button type="success" class="lookBtn productBtn">查看</el-button>
            </div>
          </el-table-column>
        </el-table>
        <!-- 商品分页 -->
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

      <!-- 添加商品 -->
      <el-tab-pane label="添加商品">
      
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentPage: 1,
      tableData: [
        {
          code: "13123123123",
          name: "优乐美",
          select: "你的优乐美",
          price: "2.00",
          salesPrice: "未促销",
          marketPrice: "2.40",
          repertory: "5",
          repertoryPrice: "200.00",
          allMoney: "40.00"
        },
        {
          code: "13123123123",
          name: "优乐美",
          select: "你的优乐美",
          price: "2.00",
          salesPrice: "未促销",
          marketPrice: "2.40",
          repertory: "5",
          repertoryPrice: "200.00",
          allMoney: "40.00"
        },
        {
          code: "13123123123",
          name: "优乐美",
          select: "你的优乐美",
          price: "2.00",
          salesPrice: "未促销",
          marketPrice: "2.40",
          repertory: "5",
          repertoryPrice: "200.00",
          allMoney: "40.00"
        }
      ],
      input: "",
      options: [
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
      value: ""
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