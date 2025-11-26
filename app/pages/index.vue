<template>
  <div class="menu-content">
    <div class="header">
      <h1>MOTORSPORT</h1>
      <h2>MANAGER</h2>
    </div>
    
    <div class="menu-options">
      <button @click="downloadData" class="menu-button primary">
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

const loadgame = () => {
  sound.play()
  
  
}

async function downloadData() {
  try {
    const name = prompt('Zadej název souboru:', 'moje-data');
    if (!name) return;
    
    const data = await $fetch(`/api/port/export?name=${encodeURIComponent(name)}`);
    const blob = new Blob([JSON.stringify(data, null, 2)], { 
      type: 'application/json' 
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}.json`;
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Chyba při stahování:', error);
    alert('Nepodařilo se stáhnout data');
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
