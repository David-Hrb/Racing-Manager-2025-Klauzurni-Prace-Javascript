export const useGameStore = defineStore('game', () => {
  const currentDay = ref(1)
  const season = ref(1)
  const managerhappines = ref(100)
  const calendarrangefirst = ref(1)      
  const calendarrangesecond = ref(18)    
  
  function nextDay() {
    currentDay.value++
  }
  
  function nextSeason() {
    season.value++
    currentDay.value = 1
  }

  function calendar(calendarrangefirst, calendarrangesecond) {
    calendarrangefirst.value = calendarrangefirst
    calendarrangesecond.value = calendarrangesecond
  }
  
  return { 
    currentDay, 
    season, 
    managerhappines, 
    nextDay, 
    nextSeason, 
    calendar,
    calendarrangefirst,   
    calendarrangesecond 
  }
})