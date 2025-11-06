export const useGameStore = defineStore('game', () => {
  const currentDay = ref(1)
  const season = ref(1)
  const managerhappines = ref(100)
  
  function nextDay() {
    currentDay.value++

  }
  
  function nextSeason() {
    season.value++
    currentDay.value = 1
  }
  
  return { currentDay, season, managerhappines, nextDay, nextSeason }
})