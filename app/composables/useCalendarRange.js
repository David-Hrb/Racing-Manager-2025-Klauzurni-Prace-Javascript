export const useCalendarRange = async () => {
    const calendar = ref([])
    calendar.value = await $fetch("/api/calendar/listCalendar");
    
    const game = useGameStore();
    const calendarrangefirst = game.calendarrangefirst
    const calendarrangesecond = game.calendarrangesecond
    
    console.log(calendarrangefirst, calendarrangesecond)
    
    let calendarreturn = []
    for (let i = calendarrangefirst; i <= calendarrangesecond; i++) {
        calendarreturn.push(calendar.value[i - 1])
    }
    
    return { calendarreturn }
}