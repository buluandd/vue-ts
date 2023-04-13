<template>
  <h1> 测试 vueUse 的鼠标坐标 </h1>
  <h3>Mouse</h3>
</template>
  
<script lang="ts">
  import request from '@/utils/axios';
  const requestRes = async () => {
    let result = await request({
      url: '/api/xxx',
      method: 'get'
    });
  }
</script>