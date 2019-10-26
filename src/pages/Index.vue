<template>
  <el-container>
    <!-- 头部 -->
    <el-header style="display:flex;">
      <div class="manageTitle">阳阳超市管理系统</div>
      <div style="display:flex;">
        <div class="userMsg">您好,admin</div>
        <div class="exit">管理首页 | 退出系统</div>
      </div>
    </el-header>
    <!-- 内容 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="400px">
        <el-menu
          default-active="/index/account"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          unique-opened
          router
         
        >
          <el-submenu :index='item.index'  v-for="(item,key) in datalist" :key="key">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group v-for="(obj,index) in item.children" :key="index" >
              <el-menu-item :index="obj.path">{{obj.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右边主页面 -->
      <el-main class="rightContent">
        <div class="rightMain">
          <router-view></router-view>
        </div>
        <div class="copy">&copy; Conpyright 2018 阳阳超市管理系统</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import tree from '../json/tree.json'
export default {
  data(){
    return{
     datalist:[],
    }
  },
  created(){
    this.datalist=tree
    
  },
  methods: {}
};
</script>

<style lang="less" >
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #25313f;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
  .manageTitle {
    font-size: 26px;
    font-weight: bold;
    margin-left: 80px;
  }
  .userMsg {
    margin: 0 20px;
  }
}
.el-aside .el-menu-vertical-demo {
  border-right: none;
  width: 400px;
  height: 100%;
  .el-submenu__title {
    font-size: 20px;
  }
}

/* 右边大盒子样式 */
.rightContent {
  flex: 1;
  padding: 20px 20px;
  min-height: 400px;
  background-color: #f1f1f1;
}
.rightMain {
  padding: 30px 0;
}
.copy {
  width: 100%;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  font-size: 12px;
  color: #656b6f;
}
</style>