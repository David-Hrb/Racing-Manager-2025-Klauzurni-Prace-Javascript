<template>
  <div class="parent">
   Manager Happines {{ game.managerhappines }}
   Fire change {{ managerfire }}
   <img :src="logoroad">
  </div>
</template>

<script setup>
const game = useGameStore();
const { manteam } = await useManager()
const { logoroad } = await useLogos(manteam - 1)

console.log(manteam, logoroad)
const managerfire = computed(() => {
  let danger = Math.floor(game.managerhappines / 10)
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