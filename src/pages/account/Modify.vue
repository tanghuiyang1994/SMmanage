<template>
  <el-tabs type="border-card">
    <el-tab-pane label="密码修改">
      <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="原密码">
          <el-input placeholder="请输入密码" v-model="oldpwd" show-password></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input placeholder="请输入密码" v-model="newpwd1" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input placeholder="请输入密码" v-model="newpwd2" show-password></el-input>
          <div style="color:red;width:200px;height:20px;">
            <span v-show="show">两次密码不一致</span>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="changepwd">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { changepwd } from "@/apis/api";
export default {
  data() {
    return {
      oldpwd: "",
      newpwd1: "",
      newpwd2: "",
      show: false
    };
  },
  created() {
    this.oldpwd = localStorage.password;
  },
  methods: {
    changepwd() {
      if (this.newpwd1 === this.newpwd2) {
        this.show = false;
        changepwd(localStorage.id, this.newpwd1).then(res => {
          localStorage.password=this.newpwd1;
          this.$message({
            message: "密码修改成功!!!",
            type: "success"
          });
        });
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>