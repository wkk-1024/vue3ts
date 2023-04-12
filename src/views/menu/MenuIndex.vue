<script setup lang="ts">
import type { menuItem } from '@/api/menu'
import { getMenuAll } from '@/api/menu'

// 获取列表
const menusItem = ref<menuItem[]>()

const getAll = async () => {
  const { data } = await getMenuAll()
  menusItem.value = [...data.data]
}

const dialogVisible = ref(false)
getAll()

// 提取一级菜单
const oneMenu = computed(() => {
  return menusItem.value?.filter((e) => e.level === 0)
})
</script>
<template>
  <h2>菜单管理</h2>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-button @click="dialogVisible = true">新增菜单</el-button>
        <el-dialog
          v-model="dialogVisible"
          title="新增菜单"
          width="70%"
          :draggable="true"
          :lock-scroll="true"
        >
          <el-scrollbar style="height: 100%">
            <div class="scroll-content" style="max-height: 60vh; margin-right: 10px">
              <el-form label-width="120px">
                <el-form-item label="Activity name">
                  <el-input />
                </el-form-item>
                <el-form-item label="Activity zone">
                  <el-select placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
                <el-form-item label="Activity time">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="Pick a date" style="width: 100%" />
                  </el-col>
                  <el-col :span="2" class="text-center">
                    <span class="text-gray-500">-</span>
                  </el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="Pick a time" style="width: 100%" />
                  </el-col>
                </el-form-item>
                <el-form-item label="Instant delivery">
                  <el-switch />
                </el-form-item>
                <el-form-item label="Activity type">
                  <el-checkbox-group>
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Resources">
                  <el-radio-group>
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form">
                  <el-input type="textarea" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">Create</el-button>
                  <el-button>Cancel</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-scrollbar>
          <template #footer>
            <span class="dialog-footer">
              <el-button>Cancel</el-button>
              <el-button type="primary"> Confirm </el-button>
            </span>
          </template>
        </el-dialog>
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

<style lang="scss" scoped>
.card-header {
  :deep(.el-dialog__body) {
    padding: 0 10px;
  }
}
</style>
