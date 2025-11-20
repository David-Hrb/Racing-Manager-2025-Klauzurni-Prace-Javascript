<template>
  <div class="drivercont">
    <div class="driverDiv currentDriver">
      <h2>Aktuální jezdec</h2>
      <div class="driver-fullinfo" v-if="currentdriver !== null">
        <img 
          :src="`/images/avatars/${giveavatar(drivers[currentdriver].avatar)}.svg`" 
          class="avatar" 
          alt="avatar" 
          style="width: 100px;"
        >
        <div class="drivername">Jméno: {{ drivers[currentdriver].name }}</div>
        <div class="driverflag">Národnost: <span class="fi" :class="`fi-${drivers[currentdriver].nationality}`" aria-hidden="true"></span> {{ drivers[currentdriver].nationality }}</div>
        <div class="bornyear">Datum Narození: {{ drivers[currentdriver].bornyear }} </div>
        <div class="currentyear">Aktuální tým: {{ drivers[currentdriver].currentteam == null ? "bez týmu" : teams.find(team => team.ID === drivers[currentdriver].currentteam)?.name }} </div>
        <div class="popularity">Popularita: {{ drivers[currentdriver].popularity }} </div>
        <div class="ego">Ego: {{ drivers[currentdriver].ego }} </div>
        <div class="contractexp">Kontrakt do: {{ drivers[currentdriver].contractexp == null ? "nemá" : drivers[currentdriver].contractexp }}</div>
        <div class="payedDriver">platící: {{ drivers[currentdriver].payeddriver === "false" ? "NE" : "ANO" }}</div>
        <div class="driverrating">
          <div 
            v-for="(star, index) in stars(drivers[currentdriver].concentration + drivers[currentdriver].overtaking + drivers[currentdriver].experience + drivers[currentdriver].quickness + drivers[currentdriver].stamina)"
            :key="index"
            class="css-star"
            :class="{
              'half-star': star === 'half',
              'empty': star === 'empty'
            }"
          ></div>
        </div>
        <div class="driverfullrating">
          <span>Koncentrace: {{drivers[currentdriver].concentration}} </span>
          <span>Předjíždění: {{ drivers[currentdriver].overtaking }}</span>
          <span>Zkušenosti: {{ drivers[currentdriver].experience }}</span>
          <span>Rychlost: {{ drivers[currentdriver].quickness }}</span>
          <span>Výdrž: {{ drivers[currentdriver].stamina }}</span>               
        </div>
        <button @click="openNegonation()">
          Jednat s jezdcem
        </button>
      </div>
      <div v-else>
        Klikněte na jezdce v seznamu vedle pro zobrazení detailů.
      </div>
    </div>
    <div class="driverDiv ListOfDrivers">
      <div class="header">
        <h2>Vyber si Jezdce</h2>
        <div class="filters-sort-container">
          <select v-model="sortBy" @change="sortDrivers" class="sort-select">
            <option value="">Řadit podle...</option>
            <option value="name">Jméno</option>
            <option value="bornyear">Věk</option>
            <option value="popularity">Popularita</option>
            <option value="ego">Ego</option>
            <option value="rating">Hodnocení</option>
            <option value="currentteam">Tým</option>
          </select>
          <button @click="toggleSortOrder" class="sort-order-btn" v-if="sortBy">
            {{ sortOrder === 'asc' ? '↑' : '↓' }}
          </button>
          
          <input 
            v-model="searchFilter" 
            type="text" 
            placeholder="Hledat jezdce..." 
            class="search-input"
          >
          
          <select v-model="teamFilter" class="filter-select">
            <option value="">Všechny týmy</option>
            <option value="null">Bez týmu</option>
            <option v-for="team in teams" :key="team.ID" :value="team.ID">
              {{ team.name }}
            </option>
          </select>
          
          <select v-model="payedFilter" class="filter-select">
            <option value="">Všichni jezdci</option>
            <option value="true">Platící</option>
            <option value="false">Neplatící</option>
          </select>
          
          <button @click="clearFilters" class="clear-filters-btn" v-if="hasActiveFilters">
            Vymazat filtry
          </button>
        </div>
      </div>
      <div class="ListOfDriversCont">
      
        <div class="info">
          <div class="header-avatar">Avatar</div>
          <div class="header-flag">Země</div>
          <div class="header-name">Jméno</div>  
          <div class="header-bornyear">Narozen</div>
          <div class="header-currentteam">Tým</div>
          <div class="header-popularity">Popularita</div>
          <div class="header-ego">Ego</div>
          <div class="header-contractexp">Konec smlouvy</div>
          <div class="header-payedDriver">platící</div>
          <div class="header-driverrating">Hodnocení</div>
        </div>
        <div class="allDriversList">
          <div 
            v-for="(driver, index) in filteredAndSortedDrivers"
            :key="index"
            class="driverInfo-cont"
            @click="currentdriver = driver.ID - 1"
          >  
            <img :src="`/images/avatars/${giveavatar(driver.avatar)}.svg`" class="avatar" alt="avatar" style="width: 40px;">
            <div class="driverflag">
              <span class="fi" :class="`fi-${driver.nationality}`" aria-hidden="true"></span> 
              {{ driver.nationality }}             
            </div>
            <div class="drivername">{{ driver.name }}</div>
            <div class="bornyear">{{ driver.bornyear }}  </div>
            <div class="currentyear">{{ driver.currentteam == null ? "bez týmu" : teams.find(team => team.ID === driver.currentteam)?.name }} </div>
            <div class="popularity">{{ driver.popularity }} </div>
            <div class="ego">{{ driver.ego }} </div>
            <div class="contractexp">{{ driver.contractexp == null ? "nemá" : driver.contractexp }}</div>
            <div class="payedDriver">{{ driver.payeddriver === "false" ? "NE" : "ANO" }}</div>
            <div class="driverrating">
              <div 
                v-for="(star, index) in stars(driver.concentration + driver.overtaking + driver.experience + driver.quickness + driver.stamina)"
                :key="index"
                class="css-star"
                :class="{
                  'half-star': star === 'half',
                  'empty': star === 'empty'
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="driver-negonation" v-if="negonation">
      <div class="driver-negonation-cont">
        <button class="settings-btn settings-close-btn" @click="closeNegonation()">
          <svg width="2rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve">
            <path fill="currentcolor" d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
          </svg>
        </button>
        <h2>Nabídněte podmínky smlouvy</h2>
        <h3>Jezdec podmínky nemusí přijmout</h3>
        <div class="negonation-inputs">
          <div class="negonation-input">
            <span>vyberte délku smlouvy:</span>
            <select name="years" id="years">
              <option value="1">1 rok</option>
              <option value="2">2 roky</option>
              <option value="3">3 roky</option>
              <option value="4">4 roky</option>
              <option value="5">5 roků</option>
            </select>
          </div>
          <div class="negonation-input">
            <span>nabídněte plat:</span>
            <input type="number" min="10000" max="10000000" step="1000" value="500000"> Kč za sezónu
          </div>
          <div class="negonation-input">
            <span>bonus za výkup</span>

          </div>
        </div>
      </div>
    </div>
   </div>
</template>

<script setup>
import avatars from '~/assets/json/avatars.json'
const drivers = ref([]);
const teams = ref([]);
drivers.value = await $fetch("/api/listDriver");
teams.value = await $fetch("/api/listTeam");
let currentdriver = ref(null);
let negonation = ref(false);


const sortBy = ref('');
const sortOrder = ref('asc');
const searchFilter = ref('');
const teamFilter = ref('');
const payedFilter = ref('');

console.log(drivers);

function giveavatar(num) {
  return avatars[num.toString()] 
}

function stars(rating) {
  rating = Math.floor(rating / 50) * 0.5;
  
  const stars = [];
  let remainingRating = rating;
  
  for (let i = 0; i < 5; i++) {
    if (remainingRating >= 1) {
      stars.push('full');
      remainingRating -= 1;
    } else if (remainingRating >= 0.5) {
      stars.push('half');
      remainingRating -= 0.5;
    } else {
      stars.push('empty');
    }
  }
  
  return stars;
}

function calculateRating(driver) {
  return driver.concentration + driver.overtaking + driver.experience + driver.quickness + driver.stamina;
}

function toggleSortOrder() {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
}

function clearFilters() {
  searchFilter.value = '';
  teamFilter.value = '';
  payedFilter.value = '';
  sortBy.value = '';
}

const hasActiveFilters = computed(() => {
  return searchFilter.value || teamFilter.value || payedFilter.value || sortBy.value;
});

const closeNegonation = () => {
  negonation.value = false;
}

const openNegonation = () => {
  negonation.value = true;
}

const filteredAndSortedDrivers = computed(() => {
  let result = [...drivers.value];
  
  if (searchFilter.value) {
    const search = searchFilter.value.toLowerCase();
    result = result.filter(driver => 
      driver.name.toLowerCase().includes(search) ||
      driver.nationality.toLowerCase().includes(search)
    );
  }
  
  if (teamFilter.value) {
    if (teamFilter.value === 'null') {
      result = result.filter(driver => driver.currentteam == null);
    } else {
      result = result.filter(driver => driver.currentteam === parseInt(teamFilter.value));
    }
  }
  
  if (payedFilter.value) {
    result = result.filter(driver => driver.payeddriver === payedFilter.value);
  }
  
  if (sortBy.value) {
    result.sort((a, b) => {
      let aVal, bVal;
      
      switch(sortBy.value) {
        case 'name':
          aVal = a.name.toLowerCase();
          bVal = b.name.toLowerCase();
          break;
        case 'bornyear':
          aVal = a.bornyear;
          bVal = b.bornyear;
          break;
        case 'popularity':
          aVal = a.popularity;
          bVal = b.popularity;
          break;
        case 'ego':
          aVal = a.ego;
          bVal = b.ego;
          break;
        case 'rating':
          aVal = calculateRating(a);
          bVal = calculateRating(b);
          break;
        case 'currentteam':
          aVal = a.currentteam == null ? '' : teams.value.find(team => team.ID === a.currentteam)?.name || '';
          bVal = b.currentteam == null ? '' : teams.value.find(team => team.ID === b.currentteam)?.name || '';
          break;
        default:
          return 0;
      }
      
      if (aVal < bVal) return sortOrder.value === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder.value === 'asc' ? 1 : -1;
      return 0;
    });
  }
  
  return result;
});

definePageMeta({ layout: 'menu' }) 

const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})
</script>

<style scoped>
</style>