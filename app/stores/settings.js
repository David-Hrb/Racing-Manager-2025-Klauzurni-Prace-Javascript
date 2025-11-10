export const useSettings = defineStore('audio', {
    state: () => ({
        volume: 100
    }),
    persist: true // pokud používáte pinia-plugin-persistedstate
});