<template>
  <div>
    <div class="margin10">
      <p class="fontW">真实名字</p>
      <el-input placeholder="请输入内容" v-model="name" clearable class="width300"></el-input>
    </div>
    <div class="margin10">
      <p class="fontW">会员卡卡号</p>
      <el-input placeholder="请输入内容" v-model="vipNum" clearable class="width300 "></el-input>
    </div>
    <div>
      <span class="fontW">用户组</span>
      &emsp;
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="width300 margin10">
      <span class="fontW">身份证号</span>
      <el-input placeholder="请输入内容" v-model="IdNum" clearable></el-input>
    </div>
    <div>
      <span class="fontW">用户状态</span> &emsp;
      <el-radio v-model="radio" label="1">启用</el-radio>
      <el-radio v-model="radio" label="2">禁用</el-radio>
    </div>
    <div class="width300 margin10">
      <span class="fontW">手机号码</span>
      <el-input placeholder="请输入内容" v-model="phone" clearable></el-input>
    </div>
    <div class="width300">
      <span class="fontW">座机号码</span>
      <el-input placeholder="请输入内容" v-model="homePhone" clearable></el-input>
    </div>
    <div class="width300 margin10">
      <span class="fontW">邮箱地址</span>
      <el-input placeholder="请输入内容" v-model="email" clearable></el-input>
    </div>
    <div>
      <span class="fontW">地区选择</span>
      <div class="block">
        <el-cascader class="width300" :options="options2" :props="props" collapse-tags clearable></el-cascader>
      </div>
    </div>
    <div class="width300 margin10">
      <span class="fontW">详细地址</span>
      <el-input placeholder="请输入内容" v-model="email" clearable></el-input>
    </div>
    <div class="width300">
      <span class="fontW">邮政编码</span>
      <el-input placeholder="请输入内容" v-model="email" clearable></el-input>
    </div>
    <el-button type="success" style="width:100px;height:40px;padding:0px" class="btn">添加</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      homePhone: "",
      phone: "",
      radio: "2",
      value1: "",
      name: "",
      vipNum: "",
      IdNum: "",
      props: { multiple: false },
      options2: [
        {
          value: 1,
          label: "东南",
          children: [
            {
              value: 2,
              label: "上海",
              children: [
                { value: 3, label: "普陀" },
                { value: 4, label: "黄埔" },
                { value: 5, label: "徐汇" }
              ]
            },
            {
              value: 7,
              label: "江苏",
              children: [
                { value: 8, label: "南京" },
                { value: 9, label: "苏州" },
                { value: 10, label: "无锡" }
              ]
            },
            {
              value: 12,
              label: "浙江",
              children: [
                { value: 13, label: "杭州" },
                { value: 14, label: "宁波" },
                { value: 15, label: "嘉兴" }
              ]
            }
          ]
        },
        {
          value: 17,
          label: "西北",
          children: [
            {
              value: 18,
              label: "陕西",
              children: [
                { value: 19, label: "西安" },
                { value: 20, label: "延安" }
              ]
            },
            {
              value: 21,
              label: "新疆维吾尔族自治区",
              children: [
                { value: 22, label: "乌鲁木齐" },
                { value: 23, label: "克拉玛依" }
              ]
            }
          ]
        }
      ],
      options: [
        {
          value: "选项1",
          label: "普通会员-99%"
        },
        {
          value: "选项2",
          label: "黄金会员-30%"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.width300 {
  width: 300px;
}
.width200 {
  width: 250px;
}
.margin10 {
  margin: 20px 0;
}
.fontW {
  font-weight: bold;
}
.btn {
  margin: 20px 0 20px 100px;
}
</style>