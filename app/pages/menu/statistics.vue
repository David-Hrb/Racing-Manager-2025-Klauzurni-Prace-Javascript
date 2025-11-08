<template>
  <div class="parent">
    
  </div>
</template>

<script setup>
const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})
</script>

<style>

</style>