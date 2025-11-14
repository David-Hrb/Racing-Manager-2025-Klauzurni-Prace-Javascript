
<template>
  <Background />
  <music />
  <main>
    <slot />
  </main>

</template>

<script setup>
import Background from '~/components/background.vue'
import music from '~/components/music.vue'

</script>
