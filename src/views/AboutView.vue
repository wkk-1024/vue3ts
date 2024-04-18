<script setup lang="ts" name="AboutView">

/***
 * 用途：watch 主要用于观察和响应数据的变化并执行相应的操作，而 computed 主要用于根据已有的数据进行计算并返回一个新的值。
 * 触发时机：watch 是在数据变化时触发回调函数，而 computed 是在访问其值时进行计算（如果依赖的数据发生变化）。
 * 缓存：computed 具有缓存机制，只有当依赖的数据发生变化时才会重新计算，而 watch 没有缓存机制。
 * 性能：对于需要频繁访问的计算属性，computed 通常比 watch 更高效，因为它可以避免不必要的重复计算。
 */

//计算属性computed
const count = ref(1)

const obj = reactive({
  age:18,
  name:'哈哈',
  arr:['1','2','3']
})

const doubleCount = computed(()=>{
  return count.value * 2
})

//监听方法 watch
watch(()=>obj.age,(newValue,oldValue)=>{
},{deep:true})

//watchEffect 函数中的响应式数据变化了就回触发函数
watchEffect(()=>{
})
const clickHandler = () => {
  // count.value++
  obj.age++
}

let arr = reactive({name:'站三',age:18})

const changeArr = () => {
  Object.assign(arr,{name:'站四',age:19})
}

//toRefs toRef 把响应式对象转换为普通对象，并且把每个属性都转换为ref
let {name,age} = toRefs(arr)

//关闭监听方法 watch
const stopWatch = watch(count,(newValue,oldValue)=>{
  if (newValue>5){
    stopWatch()
  }
})

//监听reactive 默认开启deep
watch(obj,(newValue,oldValue)=>{
})

//toRaw 把响应式对象转换为普通对象
const obj1 = toRaw(obj)

</script>

<template>
  <div class="about">
    <h1>{{ doubleCount }}</h1>
    <h1>{{arr}}</h1>
  </div>
  <button @click="clickHandler">点击</button>
  <button @click="changeArr">替换</button>
</template>

<style>
@media (min-width: 1024px) {
  /*.about {*/
  /*  min-height: 100vh;*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*}*/
}
</style>
