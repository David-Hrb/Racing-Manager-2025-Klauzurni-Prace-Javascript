<template>
  <header class="main-header">
    <div class="left">
      <div class="logo-section">
        <div class="logo-text">
          <span class="main-title">RACING</span>
          <span class="sub-title">MANAGER</span>
        </div>
      </div>
      
      <div class="divider-vertical"></div>
      
      <NuxtLink to="/menu/menu" class="header-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="60%" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/>
        </svg>
        <span>YOUR TEAM</span>
      </NuxtLink>
    </div>
    
    <div class="right">
      <div class="stats-section">
        <div class="stat-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4z"/>
          </svg>
          <span>15,000</span>
        </div>
        
        <div class="divider-vertical"></div>
        
        <div class="stat-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1Z"/>
          </svg>
          <span>Level 12</span>
        </div>
      </div>
      
      <div class="divider-vertical"></div>
      
      <div class="user-info">
        <div class="user-details">
          <span class="username">Mistr Volantu</span>
          <span class="user-subtitle">Pro závodník</span>
        </div>
        
      </div>
      
      <div class="divider-vertical"></div>
      
      <button class="settings-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>

definePageMeta({
  layout: 'menu',
})

</script>

