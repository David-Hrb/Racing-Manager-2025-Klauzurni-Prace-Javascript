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

/* 
Formula 1 = Velocity Series
Formula 2 = Circuit Pro Series
Formula 3 = Ignition Series
GT 1 = GT Masters
GT 2 = GT Elite
*/

</script>
