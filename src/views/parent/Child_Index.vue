<script setup lang="ts" name="Child_Index">
import {defineExpose} from 'vue'

const prop = defineProps({
  tableList: Array
})

let {tableList} = toRefs(prop)
const emits = defineEmits(['my-event'])
const handleClick = function () {
  emits('my-event', tableList)
}
const a = () => {
  console.log('123');
}
const b = 123
// 导出子组件方法
defineExpose({a, b})
</script>
<template>
  <div>
    <el-button @click="handleClick" type="primary">子组件点击</el-button>
    <el-table :data="tableList" stripe style="width: 100%">
      <el-table-column prop="id" label="id"/>
      <el-table-column prop="name" label="Name"/>
      <el-table-column prop="age" label="age"/>
      <el-table-column prop="email" label="email"/>
      <el-table-column prop="phone" label="phone"/>
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>
