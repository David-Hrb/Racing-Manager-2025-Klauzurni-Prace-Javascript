
<template>
  <Background />
  <div v-if="settingsval">
    <Settings />
  </div>
  <music />
  <main>
    <slot />
  </main>

</template>

<script setup>
import Background from '~/components/background.vue'
import music from '~/components/music.vue'
import Settings from '~/components/settings.vue'
const { settingsval, toggle } = useSettingsValue();
</script>
