<template>
  <!-- v-model的双向绑定-->
  <!--  <input type="text" v-model="text" />-->
  <!--  <input type="text" :value="text" @input="text=$event.target.value">-->

  <!--  给组件绑定model-->
<!--  <TsInput v-model="item"/>-->
  <!--  本质是下方代码-->
    <TsInput :modelValue="item.name" @update:model-value="item.name = $event"/>

  <h4>{{cat}}</h4>
</template>

<script lang="ts" setup name="ModEvent">

import TsInput from "@/components/UI/Ts-input.vue";

const cat = ref("特斯拉");

//暴露属性
defineExpose({cat})
//数据
const props = defineProps(['item'])
// defineProps(['item'])

const emit = defineEmits(['update:get-id']);

watch(() => props.item.name, (newValue) => {
  // emit('update:get-id', (props.item.name.id,newValue))
})
</script>

<style scoped scss>

</style>
