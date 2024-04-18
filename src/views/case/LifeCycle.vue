<template>
  <div>生命周期</div>
  <h1>{{ count }}</h1>
  <h2>{{ doubleCount }}</h2>
  <button @click="increment">加一</button>
  <h3>拿到期待组件的数据:{{ text }}</h3>

  <!--  祖宗组件给子孙传值-->
  <h4>{{ $attrs }}</h4>
  <h4>{{ $attrs.a }}</h4>

  <TsInput v-bind="$attrs" />
</template>

<script lang="ts" setup name="LifeCycle">

import {useRoute} from "vue-router";
import useLifecycle from "@/hooks/useLiftCycleStore";
import useGetData from "@/hooks/useGetData";
import {ref} from "vue";
// 解析路由参数
let query = useRoute().query
const c = defineProps(['a'])
console.log(c)
const text = ref('123')
// 获取pinia
const {count, doubleCount, increment, counterStore} = useLifecycle()
// 订阅
counterStore.$subscribe((args, state) => {
  window.localStorage.setItem('counter', JSON.stringify(state.count))
})

const emit = defineEmits(['ce-do'])
// const text = useGetData
const {getDataOn, getDataEmit, getDataOnClear} = useGetData()
// 订阅
getDataOn('get-data', (data) => {
  x(data)
})

const x = (data) => {
  text.value = data
}

// 挂载前
onBeforeMount(() => {
})

//挂载后
onMounted(() => {
  emit('ce-do')
})

//更新前
onBeforeUpdate(() => {
})

//更新后
onUpdated(() => {
})

//卸载前
onBeforeUnmount(() => {
  //销毁mitt
  // emitter.all.clear()
  //销毁mitt
  // emitter.off('get-data')
  getDataOnClear()

})

//卸载后
onMounted(() => {

})
</script>

<style scoped></style>
