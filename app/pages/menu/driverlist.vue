<template>
  <div class="parent">
    DRIVER LIST
  </div>
</template>

<script setup>
definePageMeta({ layout: 'menu' }) 

const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})
</script>

<style>

</style>