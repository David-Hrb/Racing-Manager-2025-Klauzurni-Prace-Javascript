<template>
  <div class="parent">
    <div class="drivers">
       <div 
        v-for="(driver, index) in teamDrivers" 
        :key="index" 
        :class="`drivers-${driver.name.replace(/\s+/g, '-').toLowerCase()}`"
        class="drivers"
        >
        <img :src="`/images/avatars/${giveavatar(driver.avatar)}.svg`" class="avatar" alt="avatar">
        <div class="person">
          <span class="fi" :class="`fi-${driver.nationality}`" aria-hidden="true"></span>
          <div class="name">{{ driver.name }}</div>
        </div>
        <div class="bornyear drivertext">narozen: {{ driver.bornyear }}</div>
        <div class="championshipplace drivertext">pořadí: {{ driver.championshipplace }}</div>
      </div>
    </div>

    <div class="div2"></div>

    <div class="div3">
      <h2>Trať:</h2> 
      <div v-if="currentCircuitInfo" class="circuitinfo">
        <span class="fi" :class="`fi-${currentCircuitInfo.nationality.toLowerCase()}`" aria-hidden="true"></span>
        <h3>{{ currentCircuitInfo.name }}</h3>
        <h3>{{ currentCircuitInfo.town }}</h3>
        <h3>{{ cirtype(currentCircuitInfo.type) }}</h3>
        <h3>{{ currentCircuitInfo.length }} km</h3>
        <h3>{{ currentCircuitInfo.lapslength }} kol</h3>
        <h3>{{ currentCircuitInfo.numberofturns }} zatáček</h3>
      </div>
    </div>

    <div class="div4">
      <div 
        v-if="currentTeamInfo"
        :class="`teams-${currentTeamInfo.name.replace(/\s+/g, '-').toLowerCase()}`"
        class="teams"
        >
        <div class="person">
          <span class="fi" :class="`fi-${currentTeamInfo.nationality}`" aria-hidden="true"></span>
          <div class="name">{{ currentTeamInfo.name }}</div>
        </div>
        <div class="bornyear drivertext">Vytvoření týmu: {{ currentTeamInfo.creationyear }}</div>
        <div class="championshipplace drivertext">pořadí: {{ currentTeamInfo.championshipplace }}</div>
      </div>
    </div>

    <button @click="switchToDefaut" class="menu-button next">
      Spustit aplikaci
    </button>
  </div>
</template>

<script setup>
import avatars from '~/assets/json/avatars.json'
const { setupRace } = useRaceSetup();

// Načítání dat z databáze
let drivers = ref([]);
let teams = ref([]);
const circuits = ref([]);

drivers.value = await $fetch("/api/listDriver");
teams.value = await $fetch("/api/listTeam");
circuits.value = await $fetch("/api/listCircuit");




let currentteam = 1;
let currentcircuit = 1;

const { teamDrivers, currentTeamInfo, currentCircuitInfo, isValid } = setupRace({
  drivers: drivers.value,
  teams: teams.value,
  circuits: circuits.value,
  teamId: currentteam,
  circuitId: currentcircuit
});

function giveavatar(num) {
  return avatars[num.toString()] 
}

function cirtype(num) {
  switch(num) {
    case 0:
      return "závodní okruh" 
    case 1:
      return "městský okruh"
    case 2:
      return "ovál"
    default:
      return "error"
  }
}

const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})

const switchToDefaut = () => {
  navigateTo('../kvalification')
} 

definePageMeta({
  layout: 'menu'
})
</script>