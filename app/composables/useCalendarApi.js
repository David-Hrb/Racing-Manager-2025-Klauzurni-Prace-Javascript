export const useCalendarApi = () => {
  //získání jednoho záznamu z kalendáře podle id
  const getCalendar = async (id) => {
    try {
      return await $fetch(`/api/calendar/${id}`);
    } catch (error) {
      console.error('Chyba při načítání záznamu:', error);
      throw error;
    }
  };
  // aktualizace záznamu v kalendáři podle id
  const updateCalendar = async (id, data) => {
    console.log('Updating calendar with id:', id, 'and data:', data);
    try {
      return await $fetch(`/api/calendar/${id}`, {
        method: 'PATCH',
        body: data
      });
    } catch (error) {
      console.error('Chyba při aktualizaci záznamu:', error);
      throw error;
    }
  };


  return {
    getCalendar,
    updateCalendar,        
  };
};