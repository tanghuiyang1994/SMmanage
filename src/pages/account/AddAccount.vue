<template>
  <div>
    <p class="title">用户名:</p>
    <el-input placeholder="请输入用户名" v-model="user" clearable></el-input>
    <p class="title">密码:</p>
    <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
    <p class="title">确认密码:</p>
    <el-input placeholder="请输入密码" v-model="pwd2" show-password></el-input>
    <p class="title">选择用户组:</p>
    <select name="">
        <option value="">选择用户组</option>
        <option value="">选择vip组</option>
    </select>
    <p class="add"> <el-button type="primary">添加</el-button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pwd: "",
      pwd2: ""
    };
  }
};
</script>

<style lang="less" scoped>
  .title{
      padding: 10px 0;
      font-weight: bold;
  }
  .add{
      padding: 10px 0;
  }
</style>