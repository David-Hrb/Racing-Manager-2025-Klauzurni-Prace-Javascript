<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/header.vue'
import AppFooter from '~/components/footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
