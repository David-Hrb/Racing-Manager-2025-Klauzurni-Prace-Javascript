<template>
  <div class="menu-content">
    <div class="header">
      <h1>MOTORSPORT</h1>
      <h2>MANAGER</h2>
    </div>
    
    <div class="menu-options">
      <button @click="loaddata" class="menu-button primary">
        Načíst Hru
      </button>
      <button @click="newgame" class="menu-button primary">
        Nová hra
      </button>
      <button @click="toggle(); sound.play()" class="menu-button primary">
        Nastavení
      </button>
      <button @click="author" class="menu-button primary">
        Autorovi poznámky
      </button>
    </div>
    <div v-if="authorNotes" class="author-notes-modal">
      <div class="author-notes-content">
        <h2>Autorovi poznámky</h2>
        <p>
          Vítejte ve hře Motorsport Manager! Tato hra je výsledkem mé vášně pro motorsport a herní vývoj. 
          Cílem hry je stát se nejlepším manažerem závodního týmu, vést svůj tým k vítězstvím a spravovat všechny aspekty jeho fungování.
        </p>
        <p>
          Hra nabízí širokou škálu funkcí, včetně správy financí, vývoje vozů, najímání jezdců a taktiky závodů. 
          Každé rozhodnutí, které učiníte, ovlivní výkon vašeho týmu na trati.
        </p>
        <p>
          Doufám, že si hru užijete a že vám přinese hodiny zábavy a vzrušení ze světa motorsportu!
        </p>
        <button @click="authorNotes = false" class="close-button">Zavřít</button>
      </div>
    </div>
  </div>
</template>

<script setup>

const sound = useClickSound(); 
const switchLayout = inject('switchLayout')
const { settingsval, toggle } = useSettingsValue();
const authorNotes = ref(false);
onMounted(() => {
  switchLayout('default')
})

const newgame = () => {
  sound.play()
  
  navigateTo('charcreate')
}
// Otevře stránku s autorovými poznámkami
const author = () => {
  sound.play()
  authorNotes.value = true;
}

// Funkce pro načtení dat do databáze z vybraného souboru uživatele
async function loaddata() {
  sound.play()
  try {
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      
      const text = await file.text();
      const data = JSON.parse(text);
      
      await $fetch('/api/port/import', {
        method: 'POST',
        body: data
      });
      
      alert('Data úspěšně načtena');
      navigateTo('menu/menu');
    };
    
    input.click();
  } catch (error) {
    console.error('Chyba při načítání:', error);
    alert('Nepodařilo se načíst data');
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
