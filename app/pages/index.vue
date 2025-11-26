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
    const data = await $fetch('/api/port/export.get');
    const blob = new Blob([JSON.stringify(data, null, 2)], { 
      type: 'application/json' 
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mydata-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    console.log('Data byla úspěšně stažena');
  } catch (error) {
    console.error('Chyba při stahování:', error);
    alert('Nepodařilo se stáhnout data');
  }
}

// Nahrání dat z JSON souboru
async function uploadData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  
  // Kontrola typu souboru
  if (!file.name.endsWith('.json')) {
    alert('Prosím nahrajte JSON soubor');
    return;
  }
  
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    
    // Validace struktury dat
    const requiredTables = ['drivers', 'calendar', 'circuits', 'manager', 'teams', 'leaderboard'];
    const hasAllTables = requiredTables.every(table => data[table]);
    
    if (!hasAllTables) {
      alert('Soubor neobsahuje všechny potřebné tabulky');
      return;
    }
    
    // Odeslání dat na server
    await $fetch('/api/import-data', {
      method: 'POST',
      body: data
    });
    
    alert('Data byla úspěšně nahrána!');
    location.reload(); // Refresh aplikace pro načtení nových dat
  } catch (error) {
    console.error('Chyba při nahrávání:', error);
    alert('Nepodařilo se nahrát data. Zkontrolujte, že soubor je platný JSON.');
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
