<script setup lang='ts'>
import { isCollapse } from './isCollapse'
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
        <el-avatar :size="50"
          src="https://p3-passport.byteimg.com/img/user-avatar/ec1d0d4df4a714ccb859b85542d73571~180x180.awebp" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
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

    ::v-deep :focus {
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