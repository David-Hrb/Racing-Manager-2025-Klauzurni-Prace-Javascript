export const useTeamsApi = () => {
  // funkce pro získání informací o týmu podle jeho ID
  const getTeam = async (id) => {
    try {
      return await $fetch(`/api/teams/${id}`);
    } catch (error) {
      console.error('Chyba při načítání týmu:', error);
      throw error;
    }
  };
  // funkce pro aktualizaci informací o týmu podle jeho ID
  const updateTeam = async (id, data) => {
    //console.log('Updating team with id:', id, 'and data:', data);
    try {
      return await $fetch(`/api/teams/${id}`, {
        method: 'PATCH',
        body: data
      });
    } catch (error) {
      console.error('Chyba při aktualizaci týmu:', error);
      throw error;
    }
  };


  return {
    getTeam,
    updateTeam,        
  };
};