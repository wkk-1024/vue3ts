<script setup lang="ts" name="Child_Index">
import {defineExpose} from 'vue'
// 导入接口
import {type ChildIndexInter,type ChildIndexType} from '@/types'
import {type TableItems} from "@/types";

// const prop = defineProps({
//   tableList: Array
// })

// 只接受父组件的数据
// defineProps(['list'])

// 接收数据并限制类型
// const prop = defineProps<{ list: tableItem }>()

// 接收数据+限制类型 + 判空
// defineProps<{ list?:TableItem }>()

// 接收数据+限制类型 + 判空 + 添加默认值 只有当list undefiled时才会使用默认值
const x = withDefaults(defineProps<{ list?: TableItems }>(), {
  list:() => [{id:0,name:'王麻子',age: 10,email:'string',phone:'string'}]
})
// const emits = defineEmits(['my-event'])
// const handleClick = function () {
//   emits('my-event', tableList)
// }
const person: ChildIndexType = reactive([{
  name: '张三',
  age: 10,
  isYang: true,
}])
const b = 123
// 导出子组件方法
defineExpose({b})
</script>
<template>
  <div>
<!--    <el-button @click="prop" type="primary">子组件点击</el-button>-->
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column prop="id" label="id"/>
      <el-table-column prop="name" label="Name"/>
      <el-table-column prop="age" label="age"/>
      <el-table-column prop="email" label="email"/>
      <el-table-column prop="phone" label="phone"/>
    </el-table>
  </div>
  <router-link :to="{
    name:'case',
    query:{
      a:'123',
      b:123
    }
  }">234</router-link>
</template>

<style lang="scss" scoped></style>
