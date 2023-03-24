<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { LoginUser } from '@/api/user'
import { myToken } from '@/stores/mytoken'
import { useRouter, useRoute } from 'vue-router'

type UserFrom = {
  userName: string
  userPwd: string
}
const fromLogin = reactive<UserFrom>({
  userName: '',
  userPwd: ''
})

// 定义token 数据
const stores = myToken()
// 路由
const router = useRouter()
const route = useRoute()
// 登录请求
const submit = async () => {
  await fromRef.value?.validate().catch((err) => {
    ElMessage.error(err[Object.keys(err)[0]][0].message)
    throw err
  })

  const data = await LoginUser(fromLogin).then((res) => {
    if (!res.data.success) {
      ElMessage.error(res.data.msg)
      throw new Error('请求失败')
    }
    return res.data
  })
  stores.saveToken(`${data.data}`)

  ElMessage.success(data.msg)

  router.push((route.query.redirect as string) || '/')
}

// 表单校验规则
const rules = reactive<FormRules>({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
// 表单dom数据
const fromRef = ref<FormInstance>()
</script>
<template>
  <div class="content">
    <el-card class="box-card">
      <el-form
        :model="fromLogin"
        ref="fromRef"
        :rules="rules"
        label-width="80px"
        label-position="top"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            v-model="fromLogin.userName"
            clearable
            placeholder="请输入用户名"
            style="width: 200px"
          />
        </el-form-item>

        <el-form-item label="密码" prop="user_pwd">
          <el-input
            type="password"
            show-password
            placeholder="请输入密码"
            @keyup.enter="submit"
            v-model="fromLogin.userPwd"
            style="width: 200px"
          />
        </el-form-item>

        <el-form-item style="margin-bottom: 0">
          <el-button @click="submit" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .box-card {
    //width: 500px;
    padding: 30px;

    :deep(.el-card__body) {
      padding-bottom: 0 !important;
    }
  }
}
</style>
