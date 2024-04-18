<template>
  <input type="text" :value="modelValue" @input="emit('update:model-value',$event.target.value)" />
</template>

<script type="text" lang="ts" setup name="TsInput">

// 拿到数据
defineProps(['modelValue'])

//事件
const emit = defineEmits(['update:model-value']);
</script>

<style scoped scss>
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
}
input[type="text"]:focus {
  border-color: #0077cc;
  outline: none;
}

</style>
