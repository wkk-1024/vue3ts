<script setup lang="ts">
import { isCollapse } from './isCollapse'
</script>

<template>
  <el-aside>
    <el-scrollbar>
      <el-menu router unique-opened :collapse="isCollapse">
        <a href="/" class="logon-top">
          <img src="@/assets/logo.svg" alt="" />
          <h1>苹果</h1>
        </a>
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <IEpKnifeFork />
            </el-icon>
            <span>权限管理</span>
          </template>
          <el-menu-item index="/menu">
            <el-icon>
              <IEpKnifeFork />
            </el-icon>
            <span>菜单管理</span>
          </el-menu-item>
          <el-menu-item index="/login">
            <el-icon>
              <IEpKnifeFork />
            </el-icon>
            <span>蛇皮2</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <el-icon>
              <IEpKnifeFork />
            </el-icon>
            <span>蛇皮3</span>
          </el-menu-item>
          <el-menu-item index="/parent/child">
            <el-icon>
              <IEpKnifeFork />
            </el-icon>
            <span>子组件</span>
          </el-menu-item>
          <el-menu-item index="/parent">
            <el-icon>
              <IEpKnifeFork />
            </el-icon>
            <span>父组件</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="">
          <template #title>
            <el-menu-item index="">
              <el-icon>
                <IEpKnifeFork />
              </el-icon>
              <span>采购部</span>
            </el-menu-item>
          </template>
          <el-menu-item index="/case">
            <el-icon>
              <IEpKnifeFork />
            </el-icon>
            <span>皮卡丘1</span>
          </el-menu-item>
          <el-menu-item index="">
            <el-icon>
              <IEpKnifeFork />
            </el-icon>
            <span>皮卡丘2</span>
          </el-menu-item>
          <el-menu-item index="">
            <el-icon>
              <IEpKnifeFork />
            </el-icon>
            <span>皮卡丘3</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>

  </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
  background-color: #d1edc4;
  height: 100vh;
  width: auto;

  .el-menu {
    background-color: #d1edc4;
    width: 200px;
    border-right: none;

    &.el-menu--collapse {
      width: 60px;

      & h1 {
        display: none;
      }
    }
  }

  .logon-top {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 60px;

    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
