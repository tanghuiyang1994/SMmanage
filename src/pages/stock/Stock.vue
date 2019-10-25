<template>
  <div>
    <el-tabs type="border-card">
      <!-- 库存情况 -->
      <el-tab-pane label="库存情况">
        &nbsp;
        <span>分类:</span>&nbsp;
        <el-select v-model="value" placeholder="---选择分类---">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>&nbsp;
        <span>关键字:</span>&nbsp;
        <el-input placeholder="请输入内容" v-model="input" clearable class="textInp"></el-input>&nbsp;
        <span>(商品名称,条形码)</span>&nbsp;
        <el-button type="primary">查询</el-button>
        <!-- 商品列表 -->
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="code" label="商品条形码" width="150"></el-table-column>
          <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
          <el-table-column prop="price" label="进价(元)" class="colorRed"></el-table-column>
          <el-table-column prop="inRepertory" label="入库"></el-table-column>
          <el-table-column prop="repertory" label="库存" class="colorRed"></el-table-column>
          <el-table-column prop="sold" label="已售"></el-table-column>
          <el-table-column label="管理">
            <div class="productBtnBox">
              <el-button type="danger" class="delBtn productBtn">删除</el-button>
              <el-button type="success" class="lookBtn productBtn">查看</el-button>
            </div>
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
      <!-- 添加库存 -->
      <el-tab-pane label="添加库存">
      
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
          code: "13123123123",
          name: "优乐美",
          price: "2.00",
          inRepertory: "10",
          repertory: "5",
          sold: "6"
        },
        {
          code: "13123123123",
          name: "优乐美",
          price: "2.00",
          inRepertory: "10",
          repertory: "5",
          sold: "6"
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
      input: ""
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
  width: 300px;
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
.block{
    margin: 30px;
}
</style>