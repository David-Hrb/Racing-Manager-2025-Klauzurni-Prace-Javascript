<template>
  <div class="maincont">
    <div class="container-leaderboard">
      <h1 class="title">
        Driver Leaderboard
        <div class="toggle-buttons">
          <button 
            :class="{ active: driverstable }" 
            @click="toggleTables(true)">
            Jezdci
          </button>
          <button 
            :class="{ active: teamstable }" 
            @click="toggleTables(false)">
            Týmy
          </button>
        </div>
      </h1>
      
      <div class="table-wrapper">
        <table class="leaderboard-table" v-if="driverstable">
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Nationality</th>
              <th>Driver</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(entry, index) in sortedDriverLeaderboard" :key="entry.driverID">
              <td>{{ index + 1 }}</td>
              <td>
                <img :src="`/images/avatars/${giveavatar(entry.driver.avatar)}.svg`" class="kvalimg" alt="avatar" style="width: 50px; height: 50px;">
              </td>
              <td class="driver-nationality">
                <span 
                  class="fi" 
                  :class="`fi-${entry.driver.nationality}`" 
                  aria-hidden="true">
                </span>
                {{ entry.driver.nationality }}
              </td>
              <td>{{ entry.driver.name }}</td>
              <td>{{ teams.find(team => team.ID === entry.driver.currentteam)?.name }}</td>
              <td>{{ entry.points }} pts</td>
            </tr>
          </tbody>
        </table>

        <table class="leaderboard-table" v-if="teamstable">
          <thead>
            <tr>
              <th>#</th>
              <th>Logo</th>
              <th>Nationality</th>
              <th>Team</th>
              <th>Driver 1</th>
              <th>Driver 2</th>
              <th>Test Driver</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(entry, index) in sortedTeamLeaderboard.slice(0, 10)" :key="entry.ID">
              <td>{{ index + 1 }}</td>
              <td>
                <img :src="`/images/logo/teams/${String(entry.logo).padStart(2, '0')}.svg`" class="kvalimg" alt="logo" style="width: 50px; height: auto; border: none; border-radius: 0%; background: none;">
              </td>
              <td class="driver-nationality">
                <span 
                  class="fi" 
                  :class="`fi-${entry.nationality}`" 
                  aria-hidden="true">
                </span>
                {{ entry.nationality }}
              </td>
              <td>{{ entry.name }}</td>
              <td>{{ drivers.find(driver => driver.ID === entry.driver1)?.name }}</td>
              <td>{{ drivers.find(driver => driver.ID === entry.driver2)?.name }}</td>
              <td>{{ drivers.find(driver => driver.ID === entry.testdriver)?.name }}</td>
              <td>{{ entry.points }} pts</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
  import avatars from '~/assets/json/avatars.json'

  const leadboard = ref([])
  const drivers = ref([])
  const teams = ref([])

  leadboard.value = await $fetch('/api/leadboard/listLeadboard')
  drivers.value = await $fetch('/api/listDriver')
  teams.value = await $fetch('/api/listTeam')

  const driverstable = ref(true);
  const teamstable = ref(false);
  const sound = useClickSound();

  const toggleTables = (isDriverTable) => {
    if (isDriverTable) {
      sound.play()
      driverstable.value = true;
      teamstable.value = false;
    } else {
      sound.play()
      driverstable.value = false;
      teamstable.value = true;
    }
  };

  // Vytvoř množinu ID jezdců, kteří jsou v týmech (top 10 týmů)
  const teamDriverIds = computed(() => {
    const ids = new Set();
    teams.value.slice(0, 10).forEach(team => { 
      if (team.driver1) ids.add(Number(team.driver1));
      if (team.driver2) ids.add(Number(team.driver2));
      // Testovací jezdec pouze pokud má body
      const testDriverPoints = leadboard.value.find(
        entry => Number(entry.driverID) === Number(team.testdriver)
      )?.points || 0;
      if (testDriverPoints > 0 && team.testdriver) {
        ids.add(Number(team.testdriver));
      }
    });
    return ids;
  });

  // Spoj leadboard s daty jezdců - POUZE jezdci, kteří jsou v týmech
  const sortedDriverLeaderboard = computed(() => {
    return leadboard.value
      .filter(entry => teamDriverIds.value.has(Number(entry.driverID))) // Filtruj jen jezdce v týmech
      .map(entry => {
        const driver = drivers.value.find(d => Number(d.ID) === Number(entry.driverID));
        return driver ? { ...entry, driver } : null;
      })
      .filter(entry => entry !== null)
      .sort((a, b) => b.points - a.points);
  });

  // Vytvoř leadboard týmů se součtem bodů jejich jezdců
  const sortedTeamLeaderboard = computed(() => {
    return teams.value.slice(0, 10).map(team => {
      const getPoints = (driverId) => 
        leadboard.value.find(entry => Number(entry.driverID) === Number(driverId))?.points || 0;
      
      return {
        ...team,
        points: getPoints(team.driver1) + getPoints(team.driver2) + getPoints(team.testdriver)
      };
    }).sort((a, b) => b.points - a.points);
  });

  function giveavatar(num) {
    return avatars[num.toString()] 
  }

  const switchLayout = inject('switchLayout')

  onMounted(() => {
    switchLayout('menu') 
  })
</script>