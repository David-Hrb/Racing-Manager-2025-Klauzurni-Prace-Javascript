<template>
  <div class="maincont">
    <div class="container-calendar">
      <h1 class="title">Kalendář Závodů</h1>
      
      <div class="table-wrapper">
        <table class="calendar-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Datum</th>
              <th>Okruh</th>
              <th>Národnost</th>
              <th>Město</th>
              <th>Délka</th>
              <th>Kola</th>
              <th>Zatáček</th>
              <th>DRS</th>
              <th>Jelo se?</th>
              <th>Pole Position</th>
              <th>🥇 Vítěz</th>
              <th>🥈 Druhý</th>
              <th>🥉 Třetí</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(calendar, index) in calendarreturn"
              :key="index"
              class="table-row"
            >
              <td class="race-number">{{ index + 1 }}</td>
              <td>{{ calendar.date }}</td>
              <td class="circuit-name">{{ getCircuit(calendar.track)?.name }}</td>
              <td><span class="fi" :class="`fi-${getCircuit(calendar.track)?.nationality.toLowerCase()}`" aria-hidden="true"></span> {{ getCircuit(calendar.track)?.nationality }}</td>
              <td>{{ getCircuit(calendar.track)?.town }}</td>
              <td class="text-right"> {{ getCircuit(calendar.track)?.length }} km</td>
              <td class="text-right">{{ getCircuit(calendar.track)?.lapslength }} </td>
              <td class="text-right">{{ getCircuit(calendar.track)?.numberofturns }}</td>
              <td class="text-right">{{ getCircuit(calendar.track)?.DRSzones }}</td>
              <td class="text-center">
                <span 
                  class="raced-badge"
                  :class="{ 'yes': calendar.raced === 0 }"
                >
                  {{ calendar.raced === 0 ? "NE" : "ANO" }}
                </span>
              </td>
              <td>
                <div v-if="calendar.poleposition !== 0" class="driver-info">
                  <div class="driver-name">{{ calendar.poleposition }}</div>
                  <div class="team-name">{{ calendar.polepositionteam }}</div>
                </div>
                <div v-else class="not-raced">Nejelo se</div>
              </td>
              <td>
                <div v-if="calendar.winner !== 0" class="driver-info">
                  <div class="driver-name winner">{{ calendar.winner }}</div>
                  <div class="team-name">{{ calendar.winnerteam }}</div>
                </div>
                <div v-else class="not-raced">Nejelo se</div>
              </td>
              <td>
                <div v-if="calendar.secondplace !== 0" class="driver-info">
                  <div class="driver-name second">{{ calendar.secondplace }}</div>
                  <div class="team-name">{{ calendar.secondteam }}</div>
                </div>
                <div v-else class="not-raced">Nejelo se</div>
              </td>
              <td>
                <div v-if="calendar.thirdplace !== 0" class="driver-info">
                  <div class="driver-name third">{{ calendar.thirdplace }}</div>
                  <div class="team-name">{{ calendar.thirdteam }}</div>
                </div>
                <div v-else class="not-raced">Nejelo se</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </div>
</template>

<script setup>
const circuits = ref([]);
circuits.value = await $fetch("/api/listCircuit");
const { calendarreturn } = await useCalendarRange()
console.log(circuits)

const getCircuit = (trackId) => {
  
  return circuits.value.find(circuit => circuit.ID === trackId)
}

const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})
</script>

