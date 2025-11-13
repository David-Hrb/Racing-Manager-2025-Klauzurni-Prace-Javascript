const STORAGE_KEY = 'upgrade-limit';

const limit = ref(1);
let initialized = false;

export function useSettings() {
  if (process.client && !initialized) {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        limit.value = data.limit;
      }
    } catch (error) {
      console.error('Chyba při načítání nastavení:', error);
    }
    
    watch(limit, (newVolume) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ limit: newVolume }));
      } catch (error) {
        console.error('Chyba při ukládání nastavení:', error);
      }
    });
    
    initialized = true;
  }

  return {
    limit
  };
}