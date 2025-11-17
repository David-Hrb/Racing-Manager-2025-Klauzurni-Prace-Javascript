<template>
  <div class="maincont">
    <div class="container-calendar">
      <h1 class="title">Všichni jezdci</h1>
      
      <div class="table-wrapper">
        <table class="calendar-table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Číslo</th>
              <th>Národnost</th>
              <th>Jméno</th>
              <th>Narození</th>
              <th>Tým</th>
              <th>Popularita</th>
              <th>Ego</th>
              <th>Kontrakt</th>
              <th>Placený</th>
              <th>Koncentrace</th>
              <th>Předjíždění</th>
              <th>Zkušenosti</th>
              <th>Rychlost</th>
              <th>Výdrž</th>
              <th>Jednej</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(driver, index) in drivers"
              :key="index"
              class="table-row"
            >
              <td><img :src="`/images/avatars/${giveavatar(driver.avatar)}.svg`" class="avatar" alt="avatar" style="width: 40px;"></td>
              <td class="race-number">{{ index + 1 }}</td>            
              <td><span class="fi" :class="`fi-${driver.nationality}`" aria-hidden="true"></span> {{ driver.nationality }}</td>
              <td class="circuit-name">{{ driver.name }}</td>
              <td>{{ driver.bornyear }}</td>          
              <td>{{ isNaN(driver.currentteam) ? "bez týmu" : driver.currentteam }}</td>     
              <td> {{ driver.popularity }} </td>
              <td> {{ driver.ego }} </td>
              <td> {{ driver.contractexp }}</td>
              <td> {{ driver.payeddriver === false ? "NE" : "ANO" }}</td>
              <td> {{ driver.concentration }} </td>
              <td> {{ driver.overtaking }} </td>
              <td> {{ driver.experience }} </td>
              <td> {{ driver.quickness }} </td>
              <td> {{ driver.stamina }} </td>
              <td> 
                <button>Podepiš</button>
              </td>
            </tr>
          </tbody>
           <thead>
            <tr>
              <th>Avatar</th>
              <th>Číslo</th>
              <th>Národnost</th>
              <th>Jméno</th>
              <th>Narození</th>
              <th>Tým</th>
              <th>Popularita</th>
              <th>Ego</th>
              <th>Kontrakt</th>
              <th>Placený</th>
              <th>Koncentrace</th>
              <th>Předjíždění</th>
              <th>Zkušenosti</th>
              <th>Rychlost</th>
              <th>Výdrž</th>
              <th>Jednej</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
   </div>
</template>

<script setup>
import avatars from '~/assets/json/avatars.json'
const drivers = ref([]);
drivers.value = await $fetch("/api/listDriver");
function giveavatar(num) {
  return avatars[num.toString()] 
}
definePageMeta({ layout: 'menu' }) 

const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('menu') 
})
</script>

<style>

</style>