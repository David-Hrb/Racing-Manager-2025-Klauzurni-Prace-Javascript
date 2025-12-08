import nationality from '~/assets/json/nationality.json'
// Composable pro získání názvu národnosti podle kódu
export const useNationality = (nationalityCode) => {
    const upperCode = nationalityCode ? nationalityCode.toUpperCase() : '';
    return nationality[upperCode] || "Neznámá národnost";
}
