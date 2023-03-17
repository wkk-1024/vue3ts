<script setup lang='ts'>
import { getUserInfo } from '@/api/user/userInfo';
import { myToken } from '@/stores/mytoken';

const stores = myToken()
console.log(stores.token.token);

getUserInfo({token:stores.token.token}).then(res => {
  console.log(res);
  
})

</script>

<template>
  <div class="common-layout">
    <el-container>
      <AppAside />
      <el-container class="header-and-main">
        <AppHeader />
        <el-main>
          <el-scrollbar>
            <RouterView />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang='scss' scoped>
.common-layout {
  .header-and-main {
    flex-direction: column;
    height: 100vh;
  }

  .el-main {
    background-color: #f0f9eb;
  }
}
</style>