<template>
  <div class="parent">
   <img :src="logoroad">
  </div>
</template>

<script setup>
const { manteam } = await useManager()
const { logoroad } = await useLogos(manteam - 1)
let managerhappines = ref(100);

const managerfire = computed(() => {
  let danger = Math.floor(managerhappines.value / 10)
  switch(danger) {
    case 0: return "Furious";
    case 1: case 2: case 3: return "Not Happy";
    case 4: case 5: case 6: return "Neutral";
    case 7: case 8: case 9: return "Happy";
    case 10: return "Delighted";
  }
});

const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})
</script>

<style>

</style>