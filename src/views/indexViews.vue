<script setup lang="ts">
class App extends Error {
  code: number = 0
}
class Bpp extends Error {
  set: number = 0
}

function isApp(error: Error) {
  if (typeof (error as App).code === 'number') {
    console.log(error)
  }
}
</script>
<template>
  <div>默认页面</div>
</template>

<style lang="scss" scoped></style>
