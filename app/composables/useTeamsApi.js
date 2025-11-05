
// composables/useTeamsApi.js
export const useTeamsApi = () => {
  const getTeam = async (id) => {
    try {
      return await $fetch(`/api/teams/${id}`);
    } catch (error) {
      console.error('Chyba při načítání týmu:', error);
      throw error;
    }
  };

  // PATCH pro částečné updaty (doporučeno)
  const updateTeam = async (id, data) => {
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

  // PUT pro úplnou náhradu (musíš poslat všechna pole)
  const replaceTeam = async (id, data) => {
    try {
      return await $fetch(`/api/teams/${id}`, {
        method: 'PUT',
        body: data
      });
    } catch (error) {
      console.error('Chyba při náhradě týmu:', error);
      throw error;
    }
  };

  const deleteTeam = async (id) => {
    try {
      return await $fetch(`/api/teams/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Chyba při mazání týmu:', error);
      throw error;
    }
  };


  return {
    getTeam,
    updateTeam,      // používá PATCH
    replaceTeam,     // používá PUT
    deleteTeam,
  };
};