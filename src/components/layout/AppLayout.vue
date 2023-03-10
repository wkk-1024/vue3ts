<script setup lang='ts'>

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