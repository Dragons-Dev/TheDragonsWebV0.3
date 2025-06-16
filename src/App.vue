<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "./assets/base.css"
import {ref} from "vue"
import loginBox from "./components/templates/loginBox.vue"
import registerBox from './components/templates/registerBox.vue'

</script>

<script lang="ts">
const username = ref("Platzhalter")
import { userData } from "@/scripts/Cookies.ts";
const loggedIn = ref(false)
const user = await userData()
if (user.status == 200) {
  loggedIn.value = true;
  username.value = user.data.name;
}

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
function logout() {
  loggedIn.value = false
  boxLogin.value = false
  boxRegister.value = false
  fetch("https://127.0.0.1:8000/api/v1/authentication/logout", {
    method: "POST",
    body: "Log Out",
  })
  document.location = "/"
}

</script>

<template>
  <html>
    <header>
      <a href="/">
      <img src="./components/icons/DiscordServerEmoji-Rund.png" alt="DiscordIcon">
      <h1>DragonsWeb</h1>
      </a>
      <ul class="login-buttons">
        <li v-if="loggedIn"><button id="user-button"><a :href="`/${ username }`">{{ username }}</a></button></li>
        <li v-else><button @click="loginRegister('login')" id="login-button">Anmelden</button>
          <transition><loginBox v-model="loggedIn" id="login" v-if="boxLogin"></loginBox></transition>
          <transition><registerBox v-model="loggedIn" id="register" v-if="boxRegister"></registerBox></transition>
        </li>
        <li v-if="loggedIn"><button @click="logout()">Abmelden</button></li>
        <li v-else><button @click="loginRegister('register')" id="register-button">Konto erstellen</button></li>
      </ul>
      <!--TODO maybe beim hovern Konto als vorschau einfügen -->

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
