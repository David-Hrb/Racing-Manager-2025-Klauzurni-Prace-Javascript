<template>
  <div class="maincont">
    <div class="upgrade-header">
      <h2>Vylepšete svoje auto</h2>
      <div class="upgrade-subtitle">
        <p>Vaše peníze: {{ (String(team.money).split(/(?=(?:\d{3})+(?!\d))/)).join(' ')}} €</p>
      </div>
      <div class="upgrade-info">
        <h3>Aktuální úroveň vylepšení:</h3>
        <div class="upgrade-levels">
          <p>Aerodynamika: {{ team.aerodynamics }}</p>
          <p>Převodovka: {{ team.gearbox }}</p>
          <p>Brzdy: {{ team.brakes }}</p>
          <p>Přední křídlo: {{ team.frontwing }}</p>
          <p>Zadní křídlo: {{ team.rearwing }}</p>
          <p>Spolehlivost: {{ team.reliability }}</p>
        </div>
      </div>
    </div>
    <div v-if="upgradeChooser" class="upgrade-choose">
      <div class="upgrade-choose-cont">
        <button class="settings-btn settings-close-btn" @click="closeUpgrade()"><svg width="2rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve"><path fill="currentcolor" d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/></svg></button>
        <div class="upgrade-limit">
          <h3>Vylepšení Vylepšení pro {{ 
          upgradenum === 0 ? "Aerodynamiku" : 
          upgradenum === 1 ? "Převodovku" : 
          upgradenum === 2 ? "Brzdy" : 
          upgradenum === 3 ? "Přední křídlo" : 
          upgradenum === 4 ? "Zadní křídlo" : 
          upgradenum === 5 ? "Spolehlivost" :
          "vylepšení"
        }} </h3>
          <h4>Počet povolených vylepšení do dalšího závodu: {{ limit }}</h4>
          <h3 style="text-align: center;">vyber si vylepšení</h3>
          <div class="upgrade-choose-buttons" >
            <div class="choose-button">
              <span>Malý risk (20% neúspěch)</span> 
              <span>Cena </span>

            </div>
            <button @click="upgradeCentral(upgradenum, 0)">Malý risk</button>
            <button @click="upgradeCentral(upgradenum, 1)">Střední risk</button>
            <button @click="upgradeCentral(upgradenum, 2)">Vysoký risk</button>
          </div>
        </div>
      </div> 
    </div>
    <div v-if="limit > 0" class="upgrade-buttons">
      <button @click="openUpgrade(0)" class="aerodynamics">Aerodynamika</button>
      <button @click="openUpgrade(1)" class="gearbox">Převodovka</button>
      <button @click="openUpgrade(2)" class="brakes">Brzdy</button>
      <button @click="openUpgrade(3)" class="frontwing">Přední křídlo</button>
      <button @click="openUpgrade(4)" class="rearwing">Zadní křídlo</button>
      <button @click="openUpgrade(5)" class="reliability">Spolehlivost</button>
    </div>
    <div v-else class="no-upgrades">
      <h3>Nemáte povoleny žádné upgrady do dalšího závodu.</h3>
    </div>
  </div>

</template>

<script setup>
const manager = ref([]);
const teams = ref([]);

manager.value = await $fetch("/api/manager/listManager");
teams.value = await $fetch("/api/listTeam");

const { getRandomInteger } = UseInteger();
const { getTeam } = useTeamsApi();
const { limit }= useUpgradeSettings ();
let teamValue = await getTeam(manager.value[0].team);
let team = ref(teamValue.rows[0]);
const { updateTeam } = useTeamsApi();
const currentTeamId = manager.value[0].team;
let upgradeChooser = ref(false);
let upgradenum = ref(0);

function openUpgrade(num) {
  upgradeChooser.value = true;
  upgradenum.value = num; 
}

function closeUpgrade() {
  upgradeChooser.value = false;
}

function upgradeCentral(num, pick) {
  let passValue = getRandomInteger(0, 100);
  switch (pick) {
    case 0:
      if (passValue >= 80) {
        return console.log("Neúspěšné vylepšení");
      }
      break;
    case 1:
      if (passValue >= 50) {
        return console.log("Neúspěšné vylepšení");
      }
      break;
    case 2:
      if (passValue >= 20) {
        return console.log("Neúspěšné vylepšení");
      }
      break;
    default:
      console.log("Neplatné číslo výběru");
  }
  switch (num) {
    case 0:
      aerodynamics();
      break;
    case 1:
      gearbox();
      break;
    case 2:
      brakes();
      break;
    case 3:
      frontwing();
      break;
    case 4:
      rearwing();
      break;
    case 5:
      reliability();
      break;
    default:
      console.log("Neplatné číslo vylepšení");
  }
}
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