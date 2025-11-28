const leadboard = await $fetch('/api/leadboard/listLeadboard');
const manager = ref([]);
manager.value = await $fetch("/api/manager/listManager");
export const useEndOfSeason = async () => {
    const { updateLeadboard  } = useLeadBoardsApi();
    const updateCurrentLeadboard = async (id, newData) => {
        try {
            await updateLeadboard(id, newData);
            leadboard.value = await $fetch("/api/leadboard/listLeadboard");
        
        } catch (error) {
            console.error("Error updating team:", error);
        }
    };      

    async function triggerEndOfSeason() {

        await $fetch(`/api/manager/manDay`, {
            method: 'PATCH',
            body: {
                season: manager.value[0].season + 1
            }
        });

        for(let i = 0; i < leadboard.length; i++) {
            const newData = {
                points: 0 
            };
            await updateCurrentLeadboard(i, newData);
        }
                
     
        
        const { calendar } = useCreateCalendar();
        console.log(calendar.value);

        await $fetch("/api/calendar/deleteCalendar");
        let i = 1;
        for (const item of calendar.value) {
            console.log(item);
            
            console.log(item.i, item.date);
            await $fetch('/api/calendar/insertCalendar', {
                method: 'POST',
                body: {
                    track: item.i,
                    date: item.date,
                    raced: 0,
                    winner: 0,
                    winnerteam: 0,
                    secondplace: 0,
                    secondteam: 0,
                    thirdplace: 0,
                    thirdteam: 0
                }
            });
            i++;
        }
    }
    

    return { triggerEndOfSeason };
};