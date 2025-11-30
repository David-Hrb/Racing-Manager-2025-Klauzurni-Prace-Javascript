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
    <button class="next endseason-button" @click="nextSeason">
      Pokračovat
    </button>
    <div class="endseason-content">
      <div class="endseason-calendar">
        <h2>Výsledky velkých cen</h2>
        <div class="circuit-navigation">
          <button 
            @click="previousCalendarEntry" 
            :disabled="isFirstCalendarEntry"
            class="endseason-button"
          >
            ← Předchozí
          </button>
          <span class="current-circuit">
            {{ currentCalendarCircuitName }}
          </span>
          <button 
            @click="nextCalendarEntry" 
            :disabled="isLastCalendarEntry"
            class="endseason-button"
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
              <div class="event-date">{{ daycount(currentCalendarEntry.date) }}</div>
              <div class="podium">
                <div class="secondplace">
                  <span class="position-label">2.</span>
                  <img 
                    :src="`/images/avatars/${giveavatar(drivers.find(driver => driver.ID === currentCalendarEntry.secondplace)?.avatar)}.svg`" 
                    class="kvalimg" 
                    alt="avatar" 
                    style="width: 3rem; height: 3rem;"
                  >
                  <span class="driver-name" v-if="currentCalendarEntry.secondplace !== 0">
                    {{ drivers.find(driver => driver.ID === currentCalendarEntry.secondplace)?.name || 'Unknown' }} 
                    ({{ teams.find(team => team.ID === currentCalendarEntry.secondteam)?.name || 'Unknown Team' }})
                  </span>
                  <span class="driver-name" v-else>-</span>
                </div>
                <div class="winner">
                  <span class="position-label">1.</span>
                  <img 
                    :src="`/images/avatars/${giveavatar(drivers.find(driver => driver.ID === currentCalendarEntry.winner)?.avatar)}.svg`" 
                    class="kvalimg" 
                    alt="avatar" 
                    style="width: 4rem; height: 4rem;"
                  >
                  <span class="driver-name" v-if="currentCalendarEntry.winner !== 0">
                    {{ drivers.find(driver => driver.ID === currentCalendarEntry.winner)?.name || 'Unknown' }} 
                    ({{ teams.find(team => team.ID === currentCalendarEntry.winnerteam)?.name || 'Unknown Team' }})
                  </span>
                  <span class="driver-name" v-else>-</span>
                </div>
                <div class="thirdplace">
                  <span class="position-label">3.</span>
                  <img 
                    :src="`/images/avatars/${giveavatar(drivers.find(driver => driver.ID === currentCalendarEntry.thirdplace)?.avatar)}.svg`" 
                    class="kvalimg" 
                    alt="avatar" 
                    style="width: 2rem; height: 2rem;"
                  >
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
      <div class="endseason-statistics">
        <h2>Historické a sezónní statistiky</h2>
        <div class="statistics-content">
          <!-- Hlavní přepínač: Jezdci / Týmy -->
          <div class="main-toggle">
            <button 
              class="endseason-button"
              :class="{ active: viewType === 'drivers' }" 
              @click="viewType = 'drivers'; sound.play()">
              Jezdci
            </button>
            <button 
              class="endseason-button"
              :class="{ active: viewType === 'teams' }" 
              @click="viewType = 'teams'; sound.play()">
              Týmy
            </button>
          </div>

          <!-- Sekundární přepínač: Body / Vítězství / Pódia -->
          <div class="stat-toggle">
            <button 
              class="endseason-button smaller-button"
              :class="{ active: statType === 'points' }" 
              @click="statType = 'points'; sound2.play()">
              Body
            </button>
            <button 
              class="endseason-button smaller-button"
              :class="{ active: statType === 'wins' }" 
              @click="statType = 'wins'; sound2.play()">
              Vítězství
            </button>
            <button 
              class="endseason-button smaller-button"
              :class="{ active: statType === 'podiums' }" 
              @click="statType = 'podiums'; sound2.play()">
              Pódia
            </button>
          </div>

          <!-- Tabulka jezdců -->
          <div class="table-wrapper" v-if="viewType === 'drivers'">
            <table class="leaderboard-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Avatar</th>
                  <th>Národnost</th>
                  <th>Jezdec</th>
                  <th>Tým</th>
                  <th>{{ statLabel }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(entry, index) in currentDriverList" :key="entry.driverID || entry.ID">
                  <td class="driver-rank">{{ index + 1 }}</td>
                  <td>
                    <img 
                      :src="`/images/avatars/${giveavatar(entry.driver?.avatar || entry.avatar)}.svg`" 
                      class="kvalimg" 
                      alt="avatar" 
                      style="width: 50px; height: 50px;"
                    >
                  </td>
                  <td class="driver-nationality">
                    <span 
                      class="fi" 
                      :class="`fi-${entry.driver?.nationality || entry.nationality}`" 
                      aria-hidden="true">
                    </span>
                    {{ entry.driver?.nationality || entry.nationality }}
                  </td>
                  <td class="drivername">{{ entry.driver?.name || entry.name }}</td>
                  <td class="currentteam">
                    {{ getTeamName(entry.driver?.currentteam || entry.currentteam) }}
                  </td>
                  <td class="career-points">
                    {{ getDriverStatValue(entry) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Tabulka týmů -->
          <div class="table-wrapper" v-if="viewType === 'teams'">
            <table class="leaderboard-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Logo</th>
                  <th>Národnost</th>
                  <th>Tým</th>
                  <th>Jezdec 1</th>
                  <th>Jezdec 2</th>
                  <th>{{ statLabel }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(team, index) in currentTeamList" :key="team.ID">
                  <td class="driver-rank">{{ index + 1 }}</td>
                  <td>
                    <img 
                      :src="`/images/logo/teams/${String(team.logo).padStart(2, '0')}.svg`"
                      class="kvalimg" 
                      alt="team logo"
                      style="width: 50px; height: auto; border: none; border-radius: 0%; background: none;"
                    >
                  </td>
                  <td class="driver-nationality">
                    <span class="fi" :class="`fi-${team.nationality}`" aria-hidden="true"></span>
                    {{ team.nationality }}
                  </td>
                  <td class="drivername">{{ team.name }}</td>
                  <td>{{ getDriverName(team.driver1) }}</td>
                  <td>{{ getDriverName(team.driver2) }}</td>
                  <td class="career-points">
                    {{ getTeamStatValue(team) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="startOfNewSeason" class="endseason-overlay">
    <div class="endseason-content">
      <h1>Začátek nové sezóny</h1>
      <h2>Došlo ke změnám pravidel: {{ changes.join(" ") }}</h2>
      <h2>jezdci kterým vám končí smlouva {{ manTeamExp }}</h2>
      <button @click="startOfNewSeason = false">Pokračujte na novou sezónu</button>
    </div>
  </div>
</template>

<script setup>
import avatars from '~/assets/json/avatars.json'
const { daycount } = useDayCount()
const sound = useClickSound();
const sound2 = useClickSound();
let drivers = ref([]);
let teams = ref([]);
const circuits = ref([]);
const manager = ref([]);
const allCalendar = ref([]);
const leadboard = ref([]);

drivers.value = await $fetch("/api/listDriver");
teams.value = await $fetch("/api/listTeam");
circuits.value = await $fetch("/api/listCircuit");
manager.value = await $fetch("/api/manager/listManager");
allCalendar.value = await $fetch("/api/calendar/listCalendar");
leadboard.value = await $fetch("/api/leadboard/listLeadboard") || [];
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

const { calendar } = useCreateCalendar();
const { triggerEndOfSeason, changes, manTeamExp } = await useEndOfSeason();
const { getSponsor } = useSponsors();
const { manteam } = await useManager();
const { logoroad } = await useLogos(manteam - 1);
const ManagerNationality = useNationality(manager.value[0].nationality);
console.log(ManagerNationality)

console.log(allCalendar.value)
let endOfSeason = ref(true);//ref(allCalendar.value.find(item => item.raced === 1));
let startOfNewSeason = ref(false);
console.log(endOfSeason.value);


const { sponsorsname: sponsor1, sponsormoney: sponsormoney1, sponsornationality: sponsornationality1 } = getSponsor(currentTeamInfo.sponzor1);
const { sponsorsname: sponsor2, sponsormoney: sponsormoney2, sponsornationality: sponsornationality2 } = getSponsor(currentTeamInfo.sponzor2);
const { sponsorsname: sponsor3, sponsormoney: sponsormoney3, sponsornationality: sponsornationality3 } = getSponsor(currentTeamInfo.sponzor3);


function giveavatar(num) {
  if (num === undefined || num === null) {
    return 'default' 
  }
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

const currentCalendarEntry = computed(() => {
  if (!allCalendar.value || !allCalendar.value.length) return null;
  return allCalendar.value[currentCalendarIndex.value] || null;
});

const currentCalendarCircuitName = computed(() => {
  if (!currentCalendarEntry.value || !circuits.value?.length) {
    return 'Žádné závody';
  }
  return circuits.value.find(
    circuit => circuit.ID === currentCalendarEntry.value.track
  )?.name || 'Unknown Track';
});

const isFirstCalendarEntry = computed(() => currentCalendarIndex.value === 0);
const isLastCalendarEntry = computed(() => {
  if (! allCalendar.value?.length) return true;
  return currentCalendarIndex.value === allCalendar.value.length - 1;
});


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

const viewType = ref('drivers'); 
const statType = ref('points'); 

const statLabel = computed(() => {
  switch (statType.value) {
    case 'points': return 'Body';
    case 'wins': return 'Vítězství';
    case 'podiums': return 'Pódia';
    default: return 'Body';
  }
});

function getTeamName(teamId) {
  if (teamId == null) return 'bez týmu';
  return teams.value.find(team => team.ID === teamId)?.name || 'bez týmu';
}

function getDriverName(driverId) {
  if (driverId == null) return '-';
  return drivers.value.find(driver => driver.ID === driverId)?.name || '-';
}

const teamDriverIds = computed(() => {
  const ids = new Set();
  teams.value.slice(0, 10).forEach(team => { 
    if (team.driver1) ids.add(Number(team.driver1));
    if (team.driver2) ids.add(Number(team.driver2));
    if (leadboard.value.find(entry => Number(entry.driverID) === Number(team.testdriver))?.points > 0) {
      ids.add(Number(team.testdriver));
    }
  });
  return ids;
});

const fullLeaderboard = computed(() => {
  return drivers.value.filter(driver => teamDriverIds.value.has(Number(driver.ID)));
});

const driverLeaderboard = computed(() => {
  return leadboard.value
    .map(entry => {
      const driver = fullLeaderboard.value.find(d => Number(d.ID) === Number(entry.driverID));
      return driver ?  { ...entry, driver } : null;
    })
    .filter(entry => entry !== null);
});

const teamLeaderboard = computed(() => {
  return teams.value.slice(0, 10).map(team => {
    const driver1Entry = driverLeaderboard.value.find(
      entry => Number(entry.driverID) === Number(team.driver1)
    );
    const driver2Entry = driverLeaderboard.value.find(
      entry => Number(entry.driverID) === Number(team.driver2)
    );
    const driver3Entry = driverLeaderboard.value.find(
      entry => Number(entry.driverID) === Number(team.testdriver)
    );

    return {
      ...team,
      points: (driver1Entry?.points || 0) + (driver2Entry?.points || 0) + (driver3Entry?.points || 0),
      wins: (driver1Entry?.wins || 0) + (driver2Entry?.wins || 0) + (driver3Entry?.wins || 0),
      podiums: (driver1Entry?.podiums || 0) + (driver2Entry?.podiums || 0) + (driver3Entry?.podiums || 0)
    };
  });
});

function getDriverStatValue(entry) {
  switch (statType.value) {
    case 'points': return `${entry.points || 0} pts`;
    case 'wins': return entry.wins || entry.driver?.wins || 0;
    case 'podiums': return entry.podiums || entry.driver?.podiums || 0;
    default: return entry.points || 0;
  }
}

function getTeamStatValue(team) {
  switch (statType.value) {
    case 'points': return `${team.points || 0} pts`;
    case 'wins': return team.historywins || 0;
    case 'podiums': return team.historypodiums || 0;
    default: return team.points || 0;
  }
}

const currentDriverList = computed(() => {
  const list = [...driverLeaderboard.value];
  switch (statType.value) {
    case 'points':
      return list.sort((a, b) => (b.points || 0) - (a.points || 0));
    case 'wins':
      return list.sort((a, b) => (b.wins || b.driver?.wins || 0) - (a.wins || a.driver?.wins || 0));
    case 'podiums':
      return list.sort((a, b) => (b.podiums || b.driver?.podiums || 0) - (a.podiums || a.driver?.podiums || 0));
    default:
      return list;
  }
});

const currentTeamList = computed(() => {
  const list = [...teamLeaderboard.value];
  switch (statType.value) {
    case 'points':
      return list.sort((a, b) => (b.points || 0) - (a.points || 0));
    case 'wins':
      return list.sort((a, b) => (b.wins || 0) - (a.wins || 0));
    case 'podiums':
      return list.sort((a, b) => (b.podiums || 0) - (a.podiums || 0));
    default:
      return list;
  }
});

async function nextSeason() {
  sound.play()
  endOfSeason.value = false;
  startOfNewSeason.value = true;
  await triggerEndOfSeason();
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