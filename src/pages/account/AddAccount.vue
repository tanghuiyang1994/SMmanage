<template>
  <el-tabs type="border-card">
    
    <el-tab-pane label="添加账号">
      <p class="title">用户名:</p>
      <el-input placeholder="请输入用户名" v-model="user" clearable></el-input>
      <p class="title">密码:</p>
      <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
      <p class="title">确认密码:</p>
      <el-input placeholder="请输入密码" v-model="pwd2" show-password></el-input>
      <p class="title">选择用户组:</p>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div class="msg">
        <span v-show="show">用户名或密码不正确,请重新输入</span>
      </div>
      <p class="add">
        <el-button type="primary" @click="addacc">添加</el-button>
      </p>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import {addAccApi} from '../../apis/api'
export default {
  data() {
    return {
      user: "",
      pwd: "",
      pwd2: "",
      value:1,
      show:false,
      options:[
        {
          value:0,
          label:'超级管理员',
        },
        {
          value:1,
          label:'管理员',
        },
        {
          value:2,
          label:'店员',
        },
      ]
    };
  },
  methods:{
    addacc(){
     if(this.pwd===this.pwd2&&this.user){
        addAccApi(this.user,this.pwd,this.value)
        .then(res=>{
          if(res.data=='ok'){
             this.$message({
          message: '账号添加成功!!',
          type: 'success'
        });
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
.title {
  padding: 10px 0;
  font-weight: bold;
}
.add {
  padding: 10px 0;
}
.msg {
  color: red;
  width: 300px;
  height: 20px;
  text-align: center;
  margin-top: 20px;
}
</style>