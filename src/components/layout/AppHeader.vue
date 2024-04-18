<script setup lang='ts'>
import { isCollapse } from './isCollapse'
import { getUserInfo, exitUser } from '@/api/user';
import { useRouter } from 'vue-router';
import { myToken } from '@/stores/mytoken';

const router = useRouter()
type UserInfo = {
  img_url: string
  qq: string
  user_name: string
}
const userInfo: UserInfo = reactive({
  img_url: '',
  qq: '',
  user_name: ''
})

// 获取用户信息
getUserInfo().then(res => {
  res.data.success = true
  if (!res.data.success) {
    ElMessage.error('获取用户信息错误')
    throw new Error('错误')
  }
  Object.assign(userInfo, res.data.data)
})

// 退出登录
const exitLogin = async () => {

  await ElMessageBox.confirm('确认退出？', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  }).catch(() => {
    ElMessage.info('取消操作')
    return new Promise(() => { })
  })
  //清除缓存
  exitUser().then(res => {
    if (!res.data.success) {
      ElMessage.error('操作失败')
      throw new Error("操作失败");
    }
    myToken().saveToken('')
    ElMessage.success('成功退出')
    router.push('login')
  })

}
</script>

<template>
  <el-header>
    <el-icon @click="isCollapse = !isCollapse">
      <IEpExpand v-show="isCollapse" />
      <IEpFold v-show="!isCollapse" />
    </el-icon>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 头像下拉框 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="50" :src="userInfo.img_url" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{ userInfo.user_name }}</el-dropdown-item>
          <el-dropdown-item @click="exitLogin">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<style lang='scss' scoped>
.el-header {
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: #b3e19d;

  .el-dropdown {
    margin-left: auto;

    :deep(:focus) {
      outline: 0;
    }
  }

  .el-icon {
    margin-right: 17px;
  }

  .example-showcase {
    .el-dropdown-link {
      cursor: pointer;
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
    }

  }
}
</style>
