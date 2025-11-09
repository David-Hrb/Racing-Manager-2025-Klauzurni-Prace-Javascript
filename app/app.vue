<template >

  <NuxtLayout :name="currentLayout">
    <NuxtPage />
  </NuxtLayout>
   <Transition name="fade">
      <div v-if="loading" class="loading-overlay">
        <div class="loader"></div>
      </div>
    </Transition>
</template>

<script setup>

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

<style scoped>
.loader {
  width: 45px;
  aspect-ratio: 1;
  --c: conic-gradient(from -90deg,#e65100 90deg,#ffc107 0);
  background: var(--c), var(--c);
  background-size: 40% 40%;
  animation: l19 1s infinite alternate;
}
@keyframes l19 {
 0%,
 10%  {background-position: 0 0,0            calc(100%/3)}
 50%  {background-position: 0 0,calc(100%/3) calc(100%/3)}
 90%,
 100% {background-position: 0 0,calc(100%/3) 0}
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  color: #e65100;
  font-size: 3rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>