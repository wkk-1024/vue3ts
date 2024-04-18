<script setup lang="ts">
import ChildIndex from '@/views/parent/ChildIndex.vue'
import LifeCycle from '@/views/case/LifeCycle.vue'
import useChildTable from "@/hooks/useChildTable";
import {useCounterStore} from "@/stores/counter";
import emitter from "@/utils/mitter";

import useGetData from "@/hooks/useGetData";
import ModEvent from "@/views/case/ModEvent.vue";

const handleEvent = function (message: string) {
}

//解构useChildTable
const {tableList, delTableItem} = useChildTable()
const {count} = toRefs(useCounterStore())

// getTable()
const ceDo = () => {

}

const c1 = ref()
//使用ref修改子组件的数据
const changeCat = (value) => {
  value.c1.map(item=>{
    item.cat = '小米'
  })
  // console.log(value.c1[0].cat)
}
const a = reactive([{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'd'}])

const {getDataEmit} = useGetData()

// 操作子组件的方法
const getId = (id, value) => {
  console.log('@@@@',a)

  setTimeout(()=>{
    //根据id修改name的值
    // const item = a.find(item=>item.id===d)
    // if (item) {
    //   item.name = value
    // }
    console.log(a)
  },5000)
}

const getSon = () => {
  console.log(123)
}
</script>
<template>
  <div>
    <button @click="delTableItem(1)">删除</button>
    <h1>父组件</h1>
    <p>传值</p>
    <h1>{{ count }}</h1>
    <!--    <ChildIndex ref="abc" :list="tableList" @my-event="handleEvent"></ChildIndex>-->
    <!--    <el-button type="primary" @click="getSon">获取子组件的方法</el-button>-->
    <!--    <LifeCycle :a="a" :b="b" :c="c" :d="d" @ce-do="ceDo"/>-->
    <button @click="getDataEmit('get-data','哈哈哈哈')">使用mitt传递数据</button>
    <button @click="changeCat($refs)"> 修数据</button>
    <div v-for="item in a" :key="item.id">
      <ModEvent ref="c1" :item="item" @update:get-id="getId(item.id,$event)"/>
    </div>

  </div>
</template>

<style lang="scss" scoped></style>
