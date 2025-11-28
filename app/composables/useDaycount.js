export const useDayCount = () => {
    function Daytodatum(denVRoce, year = new Date().getFullYear()) {
        const yearStart = new Date(year, 2, 1);
        const vyslednyDatum = new Date(yearStart);
        vyslednyDatum.setDate(vyslednyDatum.getDate() + denVRoce - 1);
        return vyslednyDatum.toLocaleDateString('cs-CZ', { 
            day: 'numeric', 
            month: 'short'
        });
        if (date == null) return '-';
    }
    
    return { daycount: Daytodatum }
}