<template>
  <div class="h-screen w-screen flex flex-col">
    <div class="h-[50px] w-full bg-pink-300 draggable">
      <Header/>
    </div>
    <div class="w-full flex-1 relative bg-yellow-50">
      <div class="absolute h-full w-full overflow-hidden">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Header from "@/components/Header.vue";
</script>

<style scoped>

</style>
