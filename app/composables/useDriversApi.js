export const useDriversApi = () => {
  // funkce úrp získání jednoho záznamu o jezdci podle id
  const getDriver = async (id) => {
    try {
      return await $fetch(`/api/driver/${id}`);
    } catch (error) {
      console.error('Chyba při načítání týmu:', error);
      throw error;
    }
  };
  // funkce pro aktualizaci záznamu o jezdci podle id
  const updateDriver = async (id, data) => {
    //console.log('Updating driver with id:', id, 'and data:', data);
    try {
      return await $fetch(`/api/driver/${id}`, {
        method: 'PATCH',
        body: data
      });
    } catch (error) {
      console.error('Chyba při aktualizaci týmu:', error);
      throw error;
    }
  };


  return {
    getDriver,
    updateDriver,        
  };
};