<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "./assets/base.css"
import {ref} from "vue"
import {
    createCookie,
    editCookie,
    deleteCookie,
    logCookie,
    getCookies,
    getCookie
} from "./scripts/Cookies.ts"
import loginBox from "./components/templates/loginBox.vue"
const boxLogin = ref(false)
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
      <ul class="login-buttons">
        <li v-if="loggedIn"><button @click="" >{{ username }}</button></li>
        <li v-else><button @click="boxLogin = !boxLogin">Anmelden</button></li>
        <li v-if="loggedIn"><button>Abmelden</button></li>
        <li v-else><button>Konto erstellen</button></li>
      </ul>

      <transition mode="out-in">
        <!--TODO animation wie bei W3Schools mit dem von Paul -->
        <loginBox id="login" v-if="boxLogin"></loginBox>
        <!--TODO einfügen von register und konto als vorschau -->
      </transition>
    </header>




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
