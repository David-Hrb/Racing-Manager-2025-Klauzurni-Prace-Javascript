export const useCreateCalendar = () => {
    let calendar = ref([]);
    //calendar.value = $fetch("/api/manager/listCalendar");
    const { getRandomInteger } = UseInteger();
    let randomlength = getRandomInteger(16, 18);
    let usedtrack = [];
    let randomtrack = getRandomInteger(0, 19);
    usedtrack.push(randomtrack);
    for(let i = 0; i < randomlength; i++) {       
        while(usedtrack.includes(randomtrack)) {
            randomtrack = getRandomInteger(0, 19);
        }
        usedtrack.push(randomtrack);
        calendar.value.push({
            i: randomtrack
        })
    }
}