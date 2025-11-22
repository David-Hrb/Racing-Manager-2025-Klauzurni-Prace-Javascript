<template>
  <div class="maincont">
    <div class="career">
      <div class="career-drivers">
        <h2 class="title">Best Drivers</h2>
        <div class="table-wrapper">
          <table class="drivers-table">
            <thead>
              <tr>
                <th>Pořadí</th>
                <th>Avatar</th>
                <th>Jméno</th>
                <th>Národnost</th>
                <th>Datum Narození</th>
                <th>Aktuální tým</th>
                <th>Championáty</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(driver, index) in championDrivers" :key="driver.id">
                <td class="driver-rank">{{ index + 1 }}</td>
                <td>
                  <img 
                    :src="`/images/avatars/${giveavatar(driver.avatar)}.svg`" 
                    class="avatar" 
                    alt="avatar"
                  >
                </td>
                <td class="drivername">{{ driver.name }}</td>
                <td class="driverflag">
                  <span class="fi" :class="`fi-${driver.nationality}`" aria-hidden="true"></span> 
                  {{ driver.nationality }}
                </td>
                <td class="bornyear">{{ driver.bornyear }}</td>
                <td class="currentteam">
                  {{ driver.currentteam == null ? "bez týmu" : teams.find(team => team.ID === driver.currentteam)?.name }}
                </td>
                <td class="driver-championship">{{ driver.championship }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="career-drivers">
        <h2 class="title">Career Statistics
          <div class="toggle-buttons">
            <button 
              :class="{ active: showWins }" 
              @click="toggleTables(true)">
              vítězství
            </button>
            <button 
              :class="{ active: !showWins }" 
              @click="toggleTables(false)">
              pódia
            </button>
          </div>
        </h2>
        
        <div class="table-wrapper">
          <table v-if="showWins" class="drivers-table">
            <thead>
              <tr>
                <th>Pořadí</th>
                <th>Avatar</th>
                <th>Jméno</th>
                <th>Národnost</th>
                <th>Datum Narození</th>
                <th>Aktuální tým</th>
                <th>Vítězství</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(driver, index) in winDrivers" :key="driver.id">
                <td class="driver-rank">{{ index + 1 }}</td>
                <td>
                  <img 
                    :src="`/images/avatars/${giveavatar(driver.avatar)}.svg`" 
                    class="avatar" 
                    alt="avatar"
                  >
                </td>
                <td class="drivername">{{ driver.name }}</td>
                <td class="driverflag">
                  <span class="fi" :class="`fi-${driver.nationality}`" aria-hidden="true"></span> 
                  {{ driver.nationality }}
                </td>
                <td class="bornyear">{{ driver.bornyear }}</td>
                <td class="currentteam">
                  {{ driver.currentteam == null ? "bez týmu" : teams.find(team => team.ID === driver.currentteam)?.name }}
                </td>
                <td class="career-points">{{ driver.wins }}</td>
              </tr>
            </tbody>
          </table>

          <table v-else class="drivers-table">
            <thead>
              <tr>
                <th>Pořadí</th>
                <th>Avatar</th>
                <th>Jméno</th>
                <th>Národnost</th>
                <th>Datum Narození</th>
                <th>Aktuální tým</th>
                <th>Pódia</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(driver, index) in podiumDrivers" :key="driver.id">
                <td class="driver-rank">{{ index + 1 }}</td>
                <td>
                  <img 
                    :src="`/images/avatars/${giveavatar(driver.avatar)}.svg`" 
                    class="avatar" 
                    alt="avatar"
                  >
                </td>
                <td class="drivername">{{ driver.name }}</td>
                <td class="driverflag">
                  <span class="fi" :class="`fi-${driver.nationality}`" aria-hidden="true"></span> 
                  {{ driver.nationality }}
                </td>
                <td class="bornyear">{{ driver.bornyear }}</td>
                <td class="currentteam">
                  {{ driver.currentteam == null ? "bez týmu" : teams.find(team => team.ID === driver.currentteam)?.name }}
                </td>
                <td class="career-points">{{ driver.podiums }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import avatars from '~/assets/json/avatars.json'
const sound = useClickSound(); 
const sound2 = useClickSoundNext();
const { getRandomInteger } = UseInteger();
const { setupRace } = useRaceSetup();
const { updateLeadboard  } = useLeadBoardsApi();
const drivers = ref([]);
const teams = ref([]);
const manager = ref([]);
const leadboard = ref([]);
drivers.value = await $fetch("/api/listDriver");
teams.value = await $fetch("/api/listTeam");
manager.value = await $fetch("/api/manager/listManager");
leadboard.value = await $fetch('/api/leadboard/listLeadboard');

function giveavatar(num) {
  return avatars[num.toString()] 
}

const championDrivers = computed(() => 
  drivers.value.filter(driver => driver.championship > 0).sort((a, b) => b.championship - a.championship)
);

const showWins = ref(true);

const winDrivers = computed(() => 
  drivers.value.filter(driver => driver.wins > 0).sort((a, b) => b.wins - a.wins)
);

const podiumDrivers = computed(() => 
  drivers.value.filter(driver => driver.podiums > 0).sort((a, b) => b.podiums - a.podiums)
);

const toggleTables = (isWins) => {
  showWins.value = isWins;
};

const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})
</script>

<style>

</style>