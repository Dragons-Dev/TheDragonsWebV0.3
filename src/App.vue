<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "./assets/base.css"
import {
  createCookie,
  editCookieValue,
  editCookieExpires,
  deleteCookie,
  logCookie,
  checkCookie
} from "./scripts/Cookies.ts"
</script>

<template>
  <html>
    <header>
      <a href="/">
      <img src="./components/icons/DiscordServerEmoji-Rund.png" alt="DiscordIcon">
      <h1>DragonsWeb</h1>
      </a>
      <ul>
        <li v-if="checkCookie('session')">Abmelden</li>
        <li v-if="checkCookie('session')">username</li>
        <li v-else>Anmelden</li>
        <li v-else>Konto erstellen</li>
      </ul>
    </header>
    <button @click="createCookie('session','gen',Date.now())">gen</button>
    <button @click="createCookie('test','genere',Date.now())">gen</button>
    <button @click="editCookieValue('session','gen_2')">edit</button>
    <button @click="checkCookie('session')">check</button>
    <button @click="deleteCookie('session','gen',Date.now())">delete gen</button>
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
