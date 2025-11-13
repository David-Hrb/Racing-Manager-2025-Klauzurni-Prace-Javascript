<template>
  <div class="maincont">
    <div class="upgrade-header">
      <h2>Vylepšete svoje auto</h2>
      <div class="upgrade-subtitle">
        <p>Vaše peníze: {{ (String(team.money).split(/(?=(?:\d{3})+(?!\d))/)).join(' ')}} €</p>
      </div>
    </div>
    <div v-if="limit > 0" class="upgrade-buttons">
      <button @click="aerodynamics" class="aerodynamics">aerodynamics</button>
      <button @click="gearbox" class="gearbox">gearbox</button>
      <button @click="brakes" class="brakes">brakes</button>
      <button @click="frontwing" class="frontwing">frontwing</button>
      <button @click="rearwing" class="rearwing">rearwing</button>
      <button @click="reliability" class="reliability">reliability</button>
    </div>
    <div v-else class="no-upgrades">
      <h3>Nemáte povoleny žádné updaty. Zvýšte svůj limit v nastavení.</h3>
    </div>
  </div>
</template>

<script setup>
const manager = ref([]);
const teams = ref([]);

manager.value = await $fetch("/api/manager/listManager");
teams.value = await $fetch("/api/listTeam");


const { getTeam } = useTeamsApi();
const { limit }= useSettings();
let teamValue = await getTeam(manager.value[0].team);
let team = ref(teamValue.rows[0]);
const { updateTeam } = useTeamsApi();
const currentTeamId = manager.value[0].team;

const updateCurrentTeam = async (newData) => {
  try {
    await updateTeam(currentTeamId, newData);

    teamValue = await getTeam(manager.value[0].team);
    team.value = teamValue.rows[0];
  } catch (error) {
    console.error("Error updating team:", error);
  }
};

const aerodynamics = async () => {
  team.value.aerodynamics = team.value.aerodynamics + 1;
  console.log(team.value);
  await updateCurrentTeam(team.value);
};

const gearbox = async () => {
  const newData = {
    ...team.value,
    gearbox: team.value.gearbox + 1, 
  };
  await updateCurrentTeam(newData);
};

const brakes = async () => {
  const newData = {
    ...team.value,
    brakes: team.value.brakes + 1, 
  };
  await updateCurrentTeam(newData);
};

const frontwing = async () => {
  const newData = {
    ...team.value,
    frontwing: team.value.frontwing + 1, 
  };
  await updateCurrentTeam(newData);
};

const rearwing = async () => {
  const newData = {
    ...team.value,
    rearwing: team.value.rearwing + 1, 
  };
  await updateCurrentTeam(newData);
};

const reliability = async () => {
  const newData = {
    ...team.value,
    reliability: team.value.reliability + 1, 
  };
  await updateCurrentTeam(newData);
};

//layout
definePageMeta({ layout: 'menu' }) 
const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})
</script>

<style>

</style>