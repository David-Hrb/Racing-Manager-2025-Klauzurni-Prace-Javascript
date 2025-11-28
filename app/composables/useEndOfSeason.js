export const useEndOfSeason = () => {
    const { updateLeadboard } = useLeadBoardsApi();
    const { updateTeam } = useTeamsApi();
    const { getRandomInteger } = UseInteger();
    const { getSponsor } = useSponsors();
    
    const changeRules = ["aerodynamics", "gearbox", "brakes", "frontwing", "rearwing", "reliability"];
    const changes = ref([]);

    async function triggerEndOfSeason() {
        const [leadboard, manager, teams] = await Promise.all([
            $fetch('/api/leadboard/listLeadboard'),
            $fetch('/api/manager/listManager'),
            $fetch('/api/listTeam')
        ]);

        const playerTeam = teams.find(team => team.ID === manager[0].team);
        const sponsorMoney = ['sponzor1', 'sponzor2', 'sponzor3']
            .map(key => getSponsor(playerTeam?.[key])?.sponsormoney || 0)
            .reduce((sum, money) => sum + money, 0);

        const randomChange = changeRules[getRandomInteger(0, changeRules.length - 1)];
        changes.value.push(randomChange);

        const { calendar } = useCreateCalendar();
        
        const calendarItems = calendar.value.map(item => ({
            track: item.i,
            date: item.date,
            raced: 0,
            winner: 0,
            winnerteam: 0,
            secondplace: 0,
            secondteam: 0,
            thirdplace: 0,
            thirdteam: 0
        }));

        const leadboardUpdates = leadboard.map((_, index) => ({
            id: index,
            data: { points: 0 }
        }));

        const teamUpdates = teams.map(team => {
            const isPlayerTeam = team.ID === manager[0].team;
            
            const data = isPlayerTeam 
                ? {
                    [randomChange]: team[randomChange] + getRandomInteger(-5, 5),
                    money: team.money + sponsorMoney
                }
                : {
                    aerodynamics: team.aerodynamics + getRandomInteger(0, 3),
                    gearbox: team.gearbox + getRandomInteger(0, 3),
                    brakes: team.brakes + getRandomInteger(0, 3),
                    frontwing: team.frontwing + getRandomInteger(0, 3),
                    rearwing: team.rearwing + getRandomInteger(0, 3),
                    reliability: team.reliability + getRandomInteger(0, 3),
                    [randomChange]: team[randomChange] + getRandomInteger(-5, 5)
                };

            return { id: team.ID, data };
        });
        
        await $fetch('/api/endOfSeason/process', {
            method: 'POST',
            body: {
                newSeason: manager[0].season + 1,
                calendarItems,
                leadboardUpdates,
                teamUpdates
            }
        });
    }

    return { triggerEndOfSeason, changes };
};