<template >
  <div>
    <NuxtLayout :name="currentLayout">
      <NuxtPage />
    </NuxtLayout>

    <Transition name="fade" appear>
      <div v-if="loading" class="loading-overlay">
        <div class="loader"></div>
      </div>
    </Transition>


    <div v-if="money" class="loading-overlay endseason-overlay" >
      <div>Dostali jste se do záporu, bohužel vaše hra skončila.</div>
      <NuxtLink to="/" @click="switchToDefault" class="menu-button">Pokračovat na menu</NuxtLink>
    </div>
  </div>
</template>

<script setup>

const currentLayout = useState('currentLayout', () => 'default')

const switchLayout = (layoutName) => {
  //console.log('Switching to layout:', layoutName)
  currentLayout.value = layoutName
}

provide('switchLayout', switchLayout)
provide('currentLayout', currentLayout)

const nuxtApp = useNuxtApp()
const loading = ref(false)
nuxtApp.hook("page:start", () => { loading.value = true })
nuxtApp.hook("page:finish", () => { loading.value = false })

const { updateTeam } = useTeamsApi();

let teams = ref([]);
let manager = ref([]);

teams.value = await $fetch("/api/listTeam");
manager.value = await $fetch("/api/manager/listManager");
let currentTeamId = manager.value[0].team;
let managerMoney = useState('managerMoney', () => 0);
let money = useState('money', () => false);
// Sleduje změny v týmech a aktualizuje peníze manažera
watch(
  () => teams.value,
  (newValue, oldValue) => {
    const teamIdx = (manager.value[0]?.team ?? 1) - 1; 
    const teamMoney = newValue?.[teamIdx]?.money;

    if (teamMoney !== undefined) {
      const prev = oldValue?.[teamIdx]?.money;
      managerMoney.value = teamMoney;         
      money.value = teamMoney < 0;    
    }
  },
  { deep: true, immediate: true }
);

function switchToDefault() {
  currentLayout.value = 'default';
  money.value = false;
  updateCurrentTeam({ money: 1000000 });
}

const updateCurrentTeam = async (newData) => {
  try {
    await updateTeam(currentTeamId, newData);
  } catch (error) {
    console.error("Error updating team:", error);
  }
};
</script>

<style scoped>

.loader {
  width: 200px;
  aspect-ratio: 1;
  display:grid;
  -webkit-mask: conic-gradient(from 15deg,#0000,#000);
  animation: l26 1s infinite steps(12);
}
.loader,
.loader:before,
.loader:after{
  background:
    radial-gradient(closest-side at 50% 12.5%,
     #e65100 96%,#0000) 50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%,
     #e65100 96%,#0000) 0 50%/80% 20% repeat-x;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  transform: rotate(30deg);
}
.loader:after {
  transform: rotate(60deg);
}

@keyframes l26 {
  100% {transform:rotate(1turn)}
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  color: #e65100;
  font-size: 3rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>