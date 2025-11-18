<template>
  <div class="drivercont">
    <div class="driverDiv currentDriver">
      <h2>Aktuální jezdec</h2>
    </div>
    <div class="driverDiv ListOfDrivers">
      <h2>Všichni jezdci</h2>
      <div class="allDriversList">
            <div 
              v-for="(driver, index) in drivers"
              :key="index"
            >
              <img :src="`/images/avatars/${giveavatar(driver.avatar)}.svg`" class="avatar" alt="avatar" style="width: 40px;">
              {{ index + 1 }}        
              <span class="fi" :class="`fi-${driver.nationality}`" aria-hidden="true"></span> {{ driver.nationality }}
              {{ driver.name }}
              {{ driver.bornyear }}         
              {{ isNaN(driver.currentteam) ? "bez týmu" : driver.currentteam }}   
              {{ driver.popularity }} 
              {{ driver.ego }} 
              {{ driver.contractexp }}
              {{ driver.payeddriver === false ? "NE" : "ANO" }}
              {{ driver.concentration }} 
              {{ driver.overtaking }}
              {{ driver.experience }} 
              {{ driver.quickness }} 
              {{ driver.stamina }} 
          </div>
      </div>
    </div>
   </div>
</template>

<script setup>
import avatars from '~/assets/json/avatars.json'
const drivers = ref([]);
drivers.value = await $fetch("/api/listDriver");
function giveavatar(num) {
  return avatars[num.toString()] 
}


definePageMeta({ layout: 'menu' }) 

const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})
</script>

<style>

</style>