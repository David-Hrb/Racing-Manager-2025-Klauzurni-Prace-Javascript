<template>
  <div class="menu-content">
    <div class="header">
      <h1>MOTORSPORT</h1>
      <h2>MANAGER</h2>
    </div>
    
    <div class="menu-options">
      <button @click="loadgame" class="menu-button primary">
        Load Game
      </button>
      <button @click="newgame" class="menu-button primary">
        New Game
      </button>
      <button @click="setting" class="menu-button primary">
        Settings
      </button>
      <button @click="author" class="menu-button primary">
        Author Notes
      </button>
      <!--
      <button @click="submit sound.play()" class="menu-button primary">
        Submit (del)
      </button>
      -->
    </div>
  </div>
</template>

<script setup>

const sound = useClickSound(); 
const switchLayout = inject('switchLayout')

onMounted(() => {
  switchLayout('default')
})

const newgame = () => {
  sound.play()
  navigateTo('charcreate')
}

let circuits = ref([
  {
    "name": "Aurora Speed Complex",
    "nationality": "GB",
    "town": "Liverpool",
    "type": 1,
    "length": 5234,
    "normallaptime": 92,
    "lapslength": 54,
    "numberofturns": 17,
    "sectors": 3,
    "minisectors1": 8,
    "minisectors2": 6,
    "minisectors3": 7,
    "pitstoptime": 23,
    "pitstopspeed": 76,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 7
  },
  {
    "name": "Horizont Racing Park",
    "nationality": "DE",
    "town": "Stuttgart",
    "type": 1,
    "length": 4678,
    "normallaptime": 85,
    "lapslength": 58,
    "numberofturns": 15,
    "sectors": 3,
    "minisectors1": 7,
    "minisectors2": 6,
    "minisectors3": 8,
    "pitstoptime": 21,
    "pitstopspeed": 82,
    "DRSzones": 3,
    "overtaking": 2,
    "besttime": 0,
    "polepositionvalue": 8
  },
  {
    "name": "Crystal Bay Circuit",
    "nationality": "CZ",
    "town": "Karlovy Vary",
    "type": 0,
    "length": 3890,
    "normallaptime": 72,
    "lapslength": 69,
    "numberofturns": 21,
    "sectors": 3,
    "minisectors1": 9,
    "minisectors2": 8,
    "minisectors3": 10,
    "pitstoptime": 17,
    "pitstopspeed": 93,
    "DRSzones": 2,
    "overtaking": 4,
    "besttime": 0,
    "polepositionvalue": 6
  },
  {
    "name": "Thunder Valley Raceway",
    "nationality": "FR",
    "town": "Lyon",
    "type": 1,
    "length": 5567,
    "normallaptime": 98,
    "lapslength": 51,
    "numberofturns": 19,
    "sectors": 3,
    "minisectors1": 8,
    "minisectors2": 7,
    "minisectors3": 9,
    "pitstoptime": 24,
    "pitstopspeed": 72,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 7
  },
  {
    "name": "Phoenix Street Track",
    "nationality": "IT",
    "town": "Bologna",
    "type": 0,
    "length": 4123,
    "normallaptime": 78,
    "lapslength": 64,
    "numberofturns": 23,
    "sectors": 3,
    "minisectors1": 10,
    "minisectors2": 9,
    "minisectors3": 8,
    "pitstoptime": 18,
    "pitstopspeed": 89,
    "DRSzones": 1,
    "overtaking": 5,
    "besttime": 0,
    "polepositionvalue": 8
  },
  {
    "name": "Neptune Grand Prix Arena",
    "nationality": "ES",
    "town": "Valencia",
    "type": 1,
    "length": 4890,
    "normallaptime": 88,
    "lapslength": 56,
    "numberofturns": 14,
    "sectors": 3,
    "minisectors1": 6,
    "minisectors2": 7,
    "minisectors3": 7,
    "pitstoptime": 22,
    "pitstopspeed": 78,
    "DRSzones": 3,
    "overtaking": 2,
    "besttime": 0,
    "polepositionvalue": 9
  },
  {
    "name": "Silver Dragon Circuit",
    "nationality": "NL",
    "town": "Rotterdam",
    "type": 0,
    "length": 3654,
    "normallaptime": 68,
    "lapslength": 73,
    "numberofturns": 18,
    "sectors": 3,
    "minisectors1": 8,
    "minisectors2": 7,
    "minisectors3": 8,
    "pitstoptime": 16,
    "pitstopspeed": 95,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 5
  },
  {
    "name": "Velocity Point Speedway",
    "nationality": "BE",
    "town": "Antwerp",
    "type": 1,
    "length": 5145,
    "normallaptime": 91,
    "lapslength": 54,
    "numberofturns": 16,
    "sectors": 3,
    "minisectors1": 7,
    "minisectors2": 6,
    "minisectors3": 8,
    "pitstoptime": 23,
    "pitstopspeed": 75,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 6
  },
  {
    "name": "Titanium Racing Complex",
    "nationality": "AT",
    "town": "Graz",
    "type": 1,
    "length": 4456,
    "normallaptime": 82,
    "lapslength": 60,
    "numberofturns": 13,
    "sectors": 3,
    "minisectors1": 6,
    "minisectors2": 6,
    "minisectors3": 7,
    "pitstoptime": 20,
    "pitstopspeed": 84,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 7
  },
  {
    "name": "Cobalt Harbor Circuit",
    "nationality": "PL",
    "town": "Gdansk",
    "type": 0,
    "length": 4234,
    "normallaptime": 80,
    "lapslength": 62,
    "numberofturns": 20,
    "sectors": 3,
    "minisectors1": 9,
    "minisectors2": 8,
    "minisectors3": 7,
    "pitstoptime": 19,
    "pitstopspeed": 86,
    "DRSzones": 2,
    "overtaking": 4,
    "besttime": 0,
    "polepositionvalue": 5
  },
  {
    "name": "Midnight Star Raceway",
    "nationality": "SE",
    "town": "Gothenburg",
    "type": 1,
    "length": 5789,
    "normallaptime": 102,
    "lapslength": 49,
    "numberofturns": 18,
    "sectors": 3,
    "minisectors1": 8,
    "minisectors2": 7,
    "minisectors3": 9,
    "pitstoptime": 25,
    "pitstopspeed": 68,
    "DRSzones": 1,
    "overtaking": 4,
    "besttime": 0,
    "polepositionvalue": 6
  },
  {
    "name": "Crimson Peak Circuit",
    "nationality": "CH",
    "town": "Zurich",
    "type": 1,
    "length": 3987,
    "normallaptime": 75,
    "lapslength": 66,
    "numberofturns": 12,
    "sectors": 3,
    "minisectors1": 6,
    "minisectors2": 5,
    "minisectors3": 7,
    "pitstoptime": 18,
    "pitstopspeed": 90,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 8
  },
  {
    "name": "Eclipse Grand Prix Track",
    "nationality": "DK",
    "town": "Aarhus",
    "type": 1,
    "length": 4567,
    "normallaptime": 84,
    "lapslength": 59,
    "numberofturns": 15,
    "sectors": 3,
    "minisectors1": 7,
    "minisectors2": 6,
    "minisectors3": 8,
    "pitstoptime": 21,
    "pitstopspeed": 81,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 6
  },
  {
    "name": "Vortex City Circuit",
    "nationality": "NO",
    "town": "Bergen",
    "type": 0,
    "length": 3712,
    "normallaptime": 70,
    "lapslength": 71,
    "numberofturns": 19,
    "sectors": 3,
    "minisectors1": 8,
    "minisectors2": 9,
    "minisectors3": 7,
    "pitstoptime": 17,
    "pitstopspeed": 94,
    "DRSzones": 1,
    "overtaking": 4,
    "besttime": 0,
    "polepositionvalue": 5
  },
  {
    "name": "Thunder Ridge Motorsport Park",
    "nationality": "FI",
    "town": "Tampere",
    "type": 1,
    "length": 5234,
    "normallaptime": 93,
    "lapslength": 53,
    "numberofturns": 17,
    "sectors": 3,
    "minisectors1": 7,
    "minisectors2": 7,
    "minisectors3": 8,
    "pitstoptime": 23,
    "pitstopspeed": 74,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 7
  },
  {
    "name": "Sapphire Coast Circuit",
    "nationality": "PT",
    "town": "Porto",
    "type": 1,
    "length": 4823,
    "normallaptime": 87,
    "lapslength": 57,
    "numberofturns": 16,
    "sectors": 3,
    "minisectors1": 7,
    "minisectors2": 6,
    "minisectors3": 8,
    "pitstoptime": 22,
    "pitstopspeed": 79,
    "DRSzones": 3,
    "overtaking": 2,
    "besttime": 0,
    "polepositionvalue": 7
  },
  {
    "name": "Quantum Speed Arena",
    "nationality": "HU",
    "town": "Debrecen",
    "type": 1,
    "length": 3456,
    "normallaptime": 67,
    "lapslength": 74,
    "numberofturns": 11,
    "sectors": 3,
    "minisectors1": 5,
    "minisectors2": 5,
    "minisectors3": 6,
    "pitstoptime": 16,
    "pitstopspeed": 97,
    "DRSzones": 2,
    "overtaking": 2,
    "besttime": 0,
    "polepositionvalue": 6
  },
  {
    "name": "Blaze Mountain Circuit",
    "nationality": "SK",
    "town": "Košice",
    "type": 1,
    "length": 4912,
    "normallaptime": 89,
    "lapslength": 56,
    "numberofturns": 14,
    "sectors": 3,
    "minisectors1": 6,
    "minisectors2": 7,
    "minisectors3": 7,
    "pitstoptime": 22,
    "pitstopspeed": 77,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 5
  },
  {
    "name": "Iron Gate Street Track",
    "nationality": "RO",
    "town": "Cluj-Napoca",
    "type": 0,
    "length": 4045,
    "normallaptime": 76,
    "lapslength": 65,
    "numberofturns": 22,
    "sectors": 3,
    "minisectors1": 10,
    "minisectors2": 8,
    "minisectors3": 9,
    "pitstoptime": 18,
    "pitstopspeed": 88,
    "DRSzones": 2,
    "overtaking": 4,
    "besttime": 0,
    "polepositionvalue": 6
  },
  {
    "name": "Storm Crest Raceway",
    "nationality": "GR",
    "town": "Thessaloniki",
    "type": 1,
    "length": 5678,
    "normallaptime": 100,
    "lapslength": 50,
    "numberofturns": 19,
    "sectors": 3,
    "minisectors1": 8,
    "minisectors2": 7,
    "minisectors3": 9,
    "pitstoptime": 25,
    "pitstopspeed": 70,
    "DRSzones": 1,
    "overtaking": 4,
    "besttime": 0,
    "polepositionvalue": 7
  },
  {
    "name": "Nova Lightning Circuit",
    "nationality": "IE",
    "town": "Cork",
    "type": 1,
    "length": 4334,
    "normallaptime": 81,
    "lapslength": 61,
    "numberofturns": 13,
    "sectors": 3,
    "minisectors1": 6,
    "minisectors2": 6,
    "minisectors3": 7,
    "pitstoptime": 20,
    "pitstopspeed": 83,
    "DRSzones": 2,
    "overtaking": 3,
    "besttime": 0,
    "polepositionvalue": 6
  },
  {
    "name": "Turbo Valley Oval",
    "nationality": "US",
    "town": "Indianapolis",
    "type": 2,
    "length": 4123,
    "normallaptime": 74,
    "lapslength": 67,
    "numberofturns": 4,
    "sectors": 3,
    "minisectors1": 6,
    "minisectors2": 5,
    "minisectors3": 6,
    "pitstoptime": 27,
    "pitstopspeed": 55,
    "DRSzones": 2,
    "overtaking": 1,
    "besttime": 0,
    "polepositionvalue": 3
  },
  {
    "name": "Apex Super Speedway",
    "nationality": "JP",
    "town": "Osaka",
    "type": 2,
    "length": 3789,
    "normallaptime": 69,
    "lapslength": 72,
    "numberofturns": 4,
    "sectors": 3,
    "minisectors1": 5,
    "minisectors2": 6,
    "minisectors3": 5,
    "pitstoptime": 29,
    "pitstopspeed": 48,
    "DRSzones": 1,
    "overtaking": 1,
    "besttime": 0,
    "polepositionvalue": 2
  }
])


//DATABASE
function submit() {
  console.log("database");
  for(let i = 0; i < circuits.value.length; i++) { 
    $fetch("/api/addCircuit", {
      method: "POST",
      body: {
        name: circuits.value[i].name,
        nationality: circuits.value[i].nationality,
        town: circuits.value[i].town,
        type: circuits.value[i].type,
        length: circuits.value[i].length,
        normallaptime: circuits.value[i].normallaptime,
        lapslength: circuits.value[i].lapslength,
        numberofturns: circuits.value[i].numberofturns,
        sectors: circuits.value[i].sectors,
        minisectors1: circuits.value[i].minisectors1,
        minisectors2: circuits.value[i].minisectors2,
        minisectors3: circuits.value[i].minisectors3,
        pitstoptime: circuits.value[i].pitstoptime,
        pitstopspeed: circuits.value[i].pitstopspeed,
        DRSzones: circuits.value[i].DRSzones,
        overtaking: circuits.value[i].overtaking,
        besttime: circuits.value[i].besttime,
        polepositionvalue: circuits.value[i].polepositionvalue
      }
    });
  }
}


/* 
Formula 1 = Velocity Series
Formula 2 = Circuit Pro Series
Formula 3 = Ignition Series
GT 1 = GT Masters
GT 2 = GT Elite
*/

</script>
