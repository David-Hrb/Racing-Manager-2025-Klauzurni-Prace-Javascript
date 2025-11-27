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
            <span class="value">{{ currentCircuitInfo.length }} m</span>
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

   <div v-if="endOfSeason" class="endseason-overlay">
    <div class="endseason-content">
      <div class="endseason-calendar">
        <h2>Výsledky velkých cen</h2>
        <div class="circuit-navigation">
          <button 
            @click="previousCalendarEntry" 
            :disabled="isFirstCalendarEntry"
            class="nav-button"
          >
            ← Předchozí
          </button>
          <span class="current-circuit">
            {{ currentCalendarCircuitName }}
          </span>
          <button 
            @click="nextCalendarEntry" 
            :disabled="isLastCalendarEntry"
            class="nav-button"
          >
            Další →
          </button>
        </div>

        <div class="calendar-entries">
          <div 
            v-if="currentCalendarEntry"
            class="calendar-entry"
          >
            <div class="event-info">
              <div class="event-track">
                {{ circuits.find(circuit => circuit.ID === currentCalendarEntry.track)?.name || 'Unknown Track' }}
              </div>
              <div class="event-date">{{ currentCalendarEntry.date }}</div>
              <div class="podium">
                <div class="secondplace">
                  <span class="position-label">2.</span>
                  <span class="driver-name" v-if="currentCalendarEntry.secondplace !== 0">
                    {{ drivers.find(driver => driver.ID === currentCalendarEntry.secondplace)?.name || 'Unknown' }} 
                    ({{ teams.find(team => team.ID === currentCalendarEntry.secondteam)?.name || 'Unknown Team' }})
                  </span>
                  <span class="driver-name" v-else>-</span>
                </div>
                <div class="winner">
                  <span class="position-label">1.</span>
                  <span class="driver-name" v-if="currentCalendarEntry.winner !== 0">
                    {{ drivers.find(driver => driver.ID === currentCalendarEntry.winner)?.name || 'Unknown' }} 
                    ({{ teams.find(team => team.ID === currentCalendarEntry.winnerteam)?.name || 'Unknown Team' }})
                  </span>
                  <span class="driver-name" v-else>-</span>
                </div>
                <div class="thirdplace">
                  <span class="position-label">3.</span>
                  <span class="driver-name" v-if="currentCalendarEntry.thirdplace !== 0">
                    {{ drivers.find(driver => driver.ID === currentCalendarEntry.thirdplace)?.name || 'Unknown' }} 
                    ({{ teams.find(team => team.ID === currentCalendarEntry.thirdteam)?.name || 'Unknown Team' }})
                  </span>
                  <span class="driver-name" v-else>-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>
</template>

<script setup>
import avatars from '~/assets/json/avatars.json'
// Načítání dat z databáze
let drivers = ref([]);
let teams = ref([]);
const circuits = ref([]);
const manager = ref([]);
const allCalendar = ref([]);
 

drivers.value = await $fetch("/api/listDriver");
teams.value = await $fetch("/api/listTeam");
circuits.value = await $fetch("/api/listCircuit");
manager.value = await $fetch("/api/manager/listManager");
allCalendar.value = await $fetch("/api/calendar/listCalendar");
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

console.log(allCalendar.value)
let endOfSeason = ref(allCalendar.value.find(item => item.raced === 1));
console.log(endOfSeason.value);


// Zíksání sponzorů
const { sponsorsname: sponsor1, sponsormoney: sponsormoney1, sponsornationality: sponsornationality1 } = getSponsor(currentTeamInfo.sponzor1);
const { sponsorsname: sponsor2, sponsormoney: sponsormoney2, sponsornationality: sponsornationality2 } = getSponsor(currentTeamInfo.sponzor2);
const { sponsorsname: sponsor3, sponsormoney: sponsormoney3, sponsornationality: sponsornationality3 } = getSponsor(currentTeamInfo.sponzor3);


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

const currentCalendarIndex = ref(0);

// NOVÉ: Computed property pro aktuální záznam z kalendáře
const currentCalendarEntry = computed(() => {
  if (!allCalendar.value?.length) return null;
  return allCalendar.value[currentCalendarIndex.value];
});

// NOVÉ: Název okruhu pro aktuální záznam kalendáře
const currentCalendarCircuitName = computed(() => {
  if (!currentCalendarEntry.value || !circuits.value?.length) {
    return 'Žádné závody';
  }
  return circuits.value.find(
    circuit => circuit.ID === currentCalendarEntry.value.track
  )?.name || 'Unknown Track';
});

// NOVÉ: Kontrola prvního/posledního záznamu v kalendáři
const isFirstCalendarEntry = computed(() => currentCalendarIndex.value === 0);
const isLastCalendarEntry = computed(() => {
  if (! allCalendar.value?.length) return true;
  return currentCalendarIndex.value === allCalendar.value.length - 1;
});

// NOVÉ: Metody pro navigaci v kalendáři
const nextCalendarEntry = () => {
  if (allCalendar.value && currentCalendarIndex.value < allCalendar.value.length - 1) {
    currentCalendarIndex.value++;
  }
};

const previousCalendarEntry = () => {
  if (currentCalendarIndex.value > 0) {
    currentCalendarIndex.value--;
  }
};

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