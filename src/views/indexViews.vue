<script setup lang='ts'>
import request from '@/utils/request';

request({
  method: 'GET',
  url: '/m1/2403133-0-default/get/date',
}).then((res) => {
  console.log(res);

})
</script>
<template>
  <div>
    默认页面
  </div>
</template>


<style lang='scss' scoped></style>