<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "./assets/base.css"
</script>

<template>
  <html>
    <header>
      <a href="/">
      <img src="./components/icons/DiscordServerEmoji-Rund.png" alt="DiscordIcon">
      <h1>DragonsWeb</h1>
      </a>
    </header>
  <RouterView />
    <footer>
      <ul>
        <li>Copyright</li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </footer>
  </html>

</template>

<style scoped>

</style>
