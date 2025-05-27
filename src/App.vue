<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "./assets/base.css"
import {ref} from "vue"
import {
  createCookie,
  editCookieValue,
  editCookieExpires,
  deleteCookie,
  logCookie,
  checkCookie
} from "./scripts/Cookies.ts"
</script>

<script lang="ts">
  import {ref} from "vue";
  import {checkCookie} from "./scripts/Cookies.ts";

  const loggedIn = ref(false)
  loggedIn.value = await checkCookie("session")
  const username = ref("Platzhalter")
</script>

<template>
  <html>
    <header>
      <a href="/">
      <img src="./components/icons/DiscordServerEmoji-Rund.png" alt="DiscordIcon">
      <h1>DragonsWeb</h1>
      </a>
      <ul>
        <li v-if="loggedIn"><button>{{ username }}</button></li>
        <li v-else><button>Anmelden</button></li>
        <li v-if="loggedIn"><button>Abmelden</button></li>
        <li v-else><button>Konto erstellen</button></li>
      </ul>
    </header>


  <RouterView />
    <footer>
      <ul>
        <li>&copy;2025 thedragons.xyz</li>
        <li><button @click="createCookie('session','gen',Date.now())">gen</button>
    <button @click="createCookie('test','genere',Date.now())">test</button>
    <button @click="editCookieValue('session','gen_2')">edit</button>
    <button @click="checkCookie('session')">check</button>
    <button @click="deleteCookie('session','gen',Date.now())">delete gen</button>
    <button @click="logCookie()">log cookie</button></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </footer>
  </html>

</template>

<style scoped>

</style>
