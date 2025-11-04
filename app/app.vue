<template >

  <NuxtLayout :name="currentLayout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

const isLoading = ref(true)
const currentLayout = useState('currentLayout', () => 'default')

const switchLayout = (layoutName) => {
  console.log('Switching to layout:', layoutName)
  currentLayout.value = layoutName
}

provide('switchLayout', switchLayout)
provide('currentLayout', currentLayout)

const nuxtApp = useNuxtApp()
const loading = ref(false)
nuxtApp.hook("page:start", () => { loading.value = true })
nuxtApp.hook("page:finish", () => { loading.value = false })


</script>

