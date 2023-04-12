<script setup lang="ts">
const state = ref({
  count: 4
})

const doubleCount = computed({
  get: () => state.value.count * 2,
  set: (val) => state.value.count = val / 2
})

state.value.count = 5
console.log(doubleCount);

</script>
<template>
  <div>默认页面</div>
</template>

<style lang="scss" scoped></style>
