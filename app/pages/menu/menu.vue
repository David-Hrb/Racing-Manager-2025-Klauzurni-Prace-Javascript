<template>
  <div class="parent">
    <div class="drivers">
      <h2 class="section-title">Vaši hlavní jezdci</h2>
      <div 
      v-for="(driver, index) in teamDrivers" 
      :key="index" 
      :class="`driver-item driver-${driver.name.replace(/\s+/g, '-').toLowerCase()}`"
      >
        <div class="driver-maininfo">
          <img :src="`/images/avatars/${giveavatar(driver.avatar)}.svg`" class="avatar" alt="avatar">
          <div class="person">
              <span class="fi" :class="`fi-${driver.nationality}`" aria-hidden="true"></span>
              <div class="name">{{ driver.name }}</div>
          </div>
        </div>   
        <div class="driver-content">  
          <div class="driver-stats">
            <div class="stat-row">
              <span class="label">Narozen:</span>
              <span class="value">{{ driver.bornyear }}</span>
            </div>
            <div class="stat-row">
              <span class="label">Pořadí:</span>
              <span class="value">{{ driver.championshipplace }}</span>
            </div>
            <div class="stat-row">
              <span class="label">Popularity:</span>
              <span class="value">{{ driver.popularity }}</span>
            </div>
            <div class="stat-row">
              <span class="label">Ego:</span>
              <span class="value">{{ driver.ego }}</span>
            </div>
            <div class="stat-row">
              <span class="label">Kontrakt do:</span>
              <span class="value">{{ driver.contractexp }}</span>
            </div>
            <div class="stat-row">
              <span class="label">Pr Management:</span>
              <span class="value">{{ driver.prmanagement }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="div2">
      <h2 class="section-title">Váš tým</h2>  
        <div 
        v-if="currentTeamInfo"
        :class="`team-content team-${currentTeamInfo.name.replace(/\s+/g, '-').toLowerCase()}`"
        >
          <div class="team-header">
            <img class="logo" :src="logoroad" alt="Team Logo">
            <div class="team-identity">
              <div class="person">
                <span class="fi" :class="`fi-${currentTeamInfo.nationality}`" aria-hidden="true"></span>
                <div class="name">{{ currentTeamInfo.name }}</div>
              </div>
              <div class="team-meta">
                <span>Založeno: {{ currentTeamInfo.creationyear }}</span>
                <span>Pořadí: {{ currentTeamInfo.championshipplace }}</span>
              </div>
            </div>
          </div>

          <div class="team-details">
            <div class="colors-section">
              <span class="label">Barvy týmu:</span>
              <div class="colors">
                <div class="circlecolor" :style="`background-color:${currentTeamInfo.color1}`"></div>
                <div class="circlecolor" :style="`background-color:${currentTeamInfo.color2}`"></div>
                <div class="circlecolor" :style="`background-color:${currentTeamInfo.color3}`"></div>
              </div>
            </div>

            <div class="sponsors-section">
              <span class="label">Sponzoři:</span>
              <div class="sponzors">
                <div class="sponzor">
                  <span class="fi" :class="`fi-${sponsornationality1}`" aria-hidden="true"></span> 
                  <span class="sponsor-name">{{ sponsor1 }}</span>
                  <span class="sponsor-money">{{ (String(sponsormoney1).split(/(?=(?:\d{3})+(?!\d))/)).join(' ') }} €</span>
                </div>
                <div class="sponzor">
                  <span class="fi" :class="`fi-${sponsornationality2}`" aria-hidden="true"></span> 
                  <span class="sponsor-name">{{ sponsor2 }}</span>
                  <span class="sponsor-money">{{ (String(sponsormoney2).split(/(?=(?:\d{3})+(?!\d))/)).join(' ') }} €</span>
                </div>
                <div class="sponzor">
                  <span class="fi" :class="`fi-${sponsornationality3}`" aria-hidden="true"></span> 
                  <span class="sponsor-name">{{ sponsor3 }}</span>
                  <span class="sponsor-money">{{ (String(sponsormoney3).split(/(?=(?:\d{3})+(?!\d))/)).join(' ') }} €</span>
                </div>      
              </div>
            </div>

            <div class="fans-section">
              <span class="label">Počet fanoušků:</span>
              <span class="fans-value">{{ currentTeamInfo.fanspopularity }}</span>
            </div>
          </div>
        </div>
    </div>

    <div class="div3">
      <h2 class="section-title">Další trať</h2> 
      <div v-if="currentCircuitInfo" class="circuitinfo">
        <div class="circuit-header">
          <span class="fi fi-large" :class="`fi-${currentCircuitInfo.nationality.toLowerCase()}`" aria-hidden="true"></span>
          <div class="circuit-names">
            <h3>{{ currentCircuitInfo.name }}</h3>
            <span class="town">{{ currentCircuitInfo.town }}</span>
          </div>
        </div>
        <div class="circuit-specs">
          <div class="spec-item">
            <span class="label">Typ:</span>
            <span class="value">{{ cirtype(currentCircuitInfo.type) }}</span>
          </div>
          <div class="spec-item">
            <span class="label">Délka:</span>
            <span class="value">{{ currentCircuitInfo.length }} km</span>
          </div>
          <div class="spec-item">
            <span class="label">Kola:</span>
            <span class="value">{{ currentCircuitInfo.lapslength }}</span>
          </div>
          <div class="spec-item">
            <span class="label">Zatáčky:</span>
            <span class="value">{{ currentCircuitInfo.numberofturns }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="div4">
      <div class="manager-wrapper" v-for="(manager) in manager" :key="manager.name">
        <h2 class="section-title">Manažer</h2>
        <div class="managerinfo">
          <img :src="`/images/icons/${manager.SelectedGender}/${String(manager.selectedAvatar).padStart(2, 0)}.svg`" class="manager-avatar" alt="Manager">
          <div class="manager-details">
            <div class="manager-name">{{ manager.name }} {{ manager.surname }}</div>
            <div class="manager-char">Váš charakter</div>
            <div class="manager-stats">
              <div class="stat-row">
                <span class="label">Národnost:</span>
                <span>
                  <span class="fi" :class="`fi-${manager.nationality.toLowerCase()}`" aria-hidden="true"></span>
                  {{ ManagerNationality }}
                </span>
              </div>
              <div class="stat-row">
                <span class="label">Narození:</span>
                <span>{{ manager.date }}</span>
              </div>
              <div class="stat-row">
                <span class="label">Pohlaví:</span>
                <span>{{ manager.SelectedGender }}</span>
              </div>
              <div class="stat-row">
                <span class="label">Poslední práce:</span>
                <span>{{ manager.lastwork }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--
    <button @click="switchToDefaut" class="menu-button next">
      Spustit aplikaci
    </button>
    -->
<script setup>
import avatars from '~/assets/json/avatars.json'
// Načítání dat z databáze
let drivers = ref([]);
let teams = ref([]);
const circuits = ref([]);
const manager = ref([]);
 

drivers.value = await $fetch("/api/listDriver");
teams.value = await $fetch("/api/listTeam");
circuits.value = await $fetch("/api/listCircuit");
manager.value = await $fetch("/api/manager/listManager");
const gender = ref(manager.value[0].SelectedGender);
const { currentcircuit } = await useGetNextRace()
console.log(currentcircuit)
let currentteam = manager.value[0].team;

const { setupRace } = useRaceSetup();
const { teamDrivers, currentTeamInfo, currentCircuitInfo, isValid } = setupRace({
  drivers: drivers.value,
  teams: teams.value,
  circuits: circuits.value,
  teamId: currentteam,
  circuitId: currentcircuit
});

// COMPOSABLES
const { calendar } = useCreateCalendar();
const { getSponsor } = useSponsors();
const { manteam } = await useManager();
const { logoroad } = await useLogos(manteam - 1);
const ManagerNationality = useNationality(manager.value[0].nationality);
console.log(ManagerNationality)





// Zíksání sponzorů
const { sponsorsname: sponsor1, sponsormoney: sponsormoney1, sponsornationality: sponsornationality1 } = getSponsor(currentTeamInfo.sponzor1);
const { sponsorsname: sponsor2, sponsormoney: sponsormoney2, sponsornationality: sponsornationality2 } = getSponsor(currentTeamInfo.sponzor2);
const { sponsorsname: sponsor3, sponsormoney: sponsormoney3, sponsornationality: sponsornationality3 } = getSponsor(currentTeamInfo.sponzor3);

// API
const { updateTeam  } = useTeamsApi();


const updateCurrentTeam = async (newData) => {
  try {
    await updateTeam(currentteam, newData);
    teams.value = await $fetch("/api/listTeam");
  } catch (error) {
    console.error("Error updating team:", error);
  }
};

const editTeam = async () => {
  /*
  const newData = {
    ...currentTeamInfo.value,
    name: "Another Distance", 
  };
  */
  await updateCurrentTeam(newData);
};


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

function submit() {
  console.log("database");
  for(let i = 0; i < calendar.value.length; i++) { 
    $fetch("/api/calendar/createCalendar", {
      method: "POST",
      body: {
        track: calendar.value[i].i,
        date: calendar.value[i].date,
        raced: 0,
        poleposition: 0,
        polepositionteam: 0,
        winner: 0,
        winnerteam: 0,
        secondplace: 0,
        secondteam: 0,
        thirdplace:0,
        thirdteam : 0
      }
    });
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