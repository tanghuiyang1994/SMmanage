<template>
    <div>
        <span>订单号：</span>
         <el-input v-model="input" placeholder="请输入内容" clearable style='width:300px; margin:0 10px;'></el-input>
          <el-button type="success">查询</el-button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                input:'',
            }
        }
    }
</script>

<style lang="less" scoped>

</style>