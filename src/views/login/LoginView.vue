<script setup lang='ts'>
import type { FormInstance, FormRules } from 'element-plus';
import { LoginUser } from '@/api/user'
type UserFrom = {
  user_name: string,
  user_pwd: string
}
const fromLogin = reactive<UserFrom>({
  user_name: '',
  user_pwd: '',
})

// 登录请求
const submit = async () => {
  await fromRef.value?.validate().catch(err => {
    ElMessage.error('校验失败')
    throw err
  })

  LoginUser(fromLogin).then(res => {
    console.log(res);
    

  })


}

// 表单校验规则
const rules = reactive<FormRules>({
  user_name: [
    { required: true, message: '请输入用户名', trigger: "blur" }
  ],
  user_pwd: [
    { required: true, message: '请输入密码', trigger: "blur" }
  ]
})
// 表单dom数据
const fromRef = ref<FormInstance>()
</script>
<template>
  <div class="content">
    <el-card class="box-card">
      <el-form :model="fromLogin" ref="fromRef" :rules="rules" label-width="80px" label-position="top">
        <el-form-item label="用户名" prop="user_name">
          <el-input v-model="fromLogin.user_name" style="width: 200px;" />
        </el-form-item>

        <el-form-item label="密码" prop="user_pwd">
          <el-input v-model="fromLogin.user_pwd" style="width: 200px;" />
        </el-form-item>

        <el-form-item style="margin-bottom: 0;">
          <el-button @click="submit" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>


<style lang='scss' scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .box-card {
    //width: 500px;
    padding: 30px;

    ::v-deep .el-card__body {
      padding-bottom: 0 !important;
    }
  }
}
</style>