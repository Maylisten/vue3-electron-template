<template>
  <div>Home</div>
</template>

<script setup lang="ts">
const sayHello = async () => {
  await window.api.test.saveWorld();
  console.log(await window.api.test.getWorld());
};
sayHello();
</script>

<style scoped lang="less"></style>
