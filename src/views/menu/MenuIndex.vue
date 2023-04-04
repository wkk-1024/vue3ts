<script setup lang="ts">
import type { menuItem } from '@/api/menu'
import { getMenuAll } from '@/api/menu'

// 获取列表
const menusItem = ref<menuItem[]>()

const getAll = async () => {
  const { data } = await getMenuAll()
  menusItem.value = [...data.data]
}

getAll()

// 提取一级菜单
const oneMenu = computed(() =>{
  return menusItem.value?.filter((e)=>e.level === 0)
})

</script>
<template>
  <h2>菜单管理</h2>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-button>Operation button</el-button>
      </div>
    </template>
    <el-table :data="menusItem" border style="width: 100%">
      <el-table-column prop="id" label="id" align="center" />
      <el-table-column prop="name" label="Name" align="center" />
      <el-table-column prop="permission" label="权限" align="center" />
      <el-table-column prop="created_at" label="权限" align="center" />
      <el-table-column prop="updated_at" label="创建人" align="center" />
      <el-table-column prop="updated_by" label="更新人" align="center" />
      <el-table-column fixed="right" label="操作" align="center">
        <template #default>
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="scss" scoped></style>
