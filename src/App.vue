<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "./assets/base.css"
import {ref} from "vue"
import loginBox from "./components/templates/loginBox.vue"
import registerBox from './components/templates/registerBox.vue'

import { checkCookie} from "@/scripts/Cookies.ts";
const loggedIn = ref(false)
loggedIn.value = checkCookie("session")


const boxLogin = ref(false)
const boxRegister = ref(false)

function loginRegister(box: string) {
  if(box == "login") {
    if(boxRegister.value == true) {
      boxRegister.value = false
      document.getElementById("register-button").style.background = "#23374b"
    }
    boxLogin.value = !boxLogin.value
    if(boxLogin.value == false) {
      document.getElementById("login-button").style.background = "#23374b"
    }else {
      document.getElementById("login-button").style.background = "#295e85"
    }
  }else if(box == "register") {
    if(boxLogin.value == true) {
      boxLogin.value = false
      document.getElementById("login-button").style.background = "#23374b"
    }
    boxRegister.value = !boxRegister.value
    if(boxRegister.value == false) {
      document.getElementById("register-button").style.background = "#23374b"
    }else {
      document.getElementById("register-button").style.background = "#295e85"
    }
  }else {
    console.log("BoxError")
  }
}
</script>

<script lang="ts">
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
        <li v-if="loggedIn"><button @click="" id="user-button">{{ username }}</button></li>
        <li v-else><button @click="loginRegister('login')" id="login-button">Anmelden</button></li>
        <li v-if="loggedIn"><button>Abmelden</button></li>
        <li v-else><button @click="loginRegister('register')" id="register-button">Konto erstellen</button></li>
      </ul>

      <!--TODO animation wie bei W3Schools mit dem von Paul -->
      <transition><loginBox id="login" v-if="boxLogin"></loginBox></transition>
      <transition><registerBox id="register" v-if="boxRegister"></registerBox></transition>
      <!--TODO einfügen von register und konto als vorschau -->

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
  .v-enter-from {
    opacity: 0;
    translate: 0 -0.5em;
  }
  .v-enter-to {
    opacity: 1;
    translate: 0 0;
  }

  .v-leave-from {
    opacity: 1;
    translate: 0 0;
  }
  .v-leave-to {
    opacity: 0;
    translate: 0 1em;
  }
</style>
