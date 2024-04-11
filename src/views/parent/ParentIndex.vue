<script setup lang="ts">
import { getTableList } from '@/api/childList'
import ChildIndex from '@/views/parent/Child_Index.vue'

const handleEvent = function (message: string) {
  console.log('收到子组件传值', message)
}
const tableList = ref([])
const getTable = async () => {
  const { data } = await getTableList()
  tableList.value = data.data
}
getTable()
const abc = ref()
//console.log(abc);
const getSon = () =>{
  abc.value.a()
}
</script>
<template>
  <div>
    <h1>父组件</h1>
    <p>传值</p>
    <ChildIndex ref="abc" :tableList = tableList @my-event="handleEvent"></ChildIndex>
    <el-button type="primary" @click="getSon">获取子组件的方法</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
