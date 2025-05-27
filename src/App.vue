<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "./assets/base.css"
import { createCookie, editCookieValue, editCookieExpires, deleteCookie, logCookie } from "./scripts/Cookies.ts"
</script>

<template>
  <html>
    <header>
      <a href="/">
      <img src="./components/icons/DiscordServerEmoji-Rund.png" alt="DiscordIcon">
      <h1>DragonsWeb</h1>
      </a>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </header>
    <button @click="createCookie('session','gen',Date.now())">Test</button>
    <button @click="editCookieValue('session','gen',Date.now())">Test</button>
    <button @click="createCookie('session','gen',Date.now())">Test</button>
    <button @click="createCookie('session','gen',Date.now())">Test</button>
    <button @click="logCookie()">log cookie</button>
  <RouterView />
    <footer>
      <ul>
        <li>&copy;2025 thedragons.xyz</li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </footer>
  </html>

</template>

<style scoped>

</style>
