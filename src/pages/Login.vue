<template>
  <div
    class="login"
    style="backgroundImage:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571926479407&di=d34036b848880a6abf0ec40bb1c394e6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fbbs4%2Fattachment%2F20081%2F6%2F1199625490253.jpg')"
  >
    <div class="loginbox">
      <h2>阳阳超市管理系统</h2>
      <div>
        <p>
          用户名:
          <el-input placeholder="请输入内容" v-model="user" clearable></el-input>
        </p>

        <p>
          密码:
          <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
        </p>
        <div class="msg" >
          <span v-show="show">用户名和密码不正确,请重新输入</span>
        </div>
        <div class="loginbtn">
          <el-button type="primary" style="width:200px;" @click="goToIndex">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {loginApi} from '../apis/api'
export default {
  data() {
    return {
      user: "",
      pwd: "",
      show:false,
      flag:true,
    };
  },
  methods: {
   
    
    goToIndex() {
      if(this.flag){//定义标杆,设置防抖节流
         loginApi(this.user,this.pwd)
      .then(res=>{

        if(res.data.msg=='ok'){
          this.show=false,
          localStorage.token=res.data.token;
          localStorage.user=this.user;
          localStorage.userGroup=res.data.userGroup;
          localStorage.id=res.data.id;
          localStorage.password=res.data.pwd;
           this.$router.history.push("/index");
        }else{
          this.show=true;
        }
        this.flag=false;
        setTimeout(()=>{///设置定时器避免用户多次点击导致服务器性能浪费
          this.flag=true;
        },3000)
      })
      }
     
     
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;

  display: flex;
  .loginbox {
    width: 600px;
    height: 500px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: #fff;
      text-align: center;
      font-size: 40px;
      margin-bottom: 50px;
      margin-top: 50px;
    }

    p {
      color: #fff;
      margin-top: 30px;
      font-size: 20px;
      width: 500px;
      display: flex;
      justify-content: space-between;
    }
    .msg{
      width: 100%;
      height: 30px;
      color: red;
      text-align: center;
      margin-top: 20px;
    }
    .el-input {
      width: 400px;
    }
    .loginbtn{
     width: 100%;
     display: flex;
     justify-content: center;
     margin-top: 50px;
    }
  }
}
</style>