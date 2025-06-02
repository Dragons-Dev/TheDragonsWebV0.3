<script setup lang="ts">
  import {reactive} from "vue";

  const data = reactive({
    name: '',
    password: '',
    stayLog: ''
  })
  export async function checkLogin(): Promise<void> {
    const send = new FormData()
    send.append("name", data.name)
    send.append("password", data.password)
    send.append("stayLog", data.stayLog)

    const res = await fetch("https://127.0.0.1:8000/api/v1/authentication/login", {
      method: "POST",
      body: send
    })
  }

</script>

<template>
    <div class="loginBox">
      <form @submit.prevent="checkLogin()">
        <label>Deine E-Mail oder Nutzername: <br>
        <input v-model="data.name" type="text" placeholder="Deine E-Mail/Nutzername" size="40" required>
        </label><br>
        <hr>
        <label>Dein Passwort:<br>
        <input v-model="data.password" type="password" placeholder="Password" size="40" required>
        </label><br>
        <hr>
        <input v-model="data.stayLog" id="stayLog" type="checkbox"/>
        <label for="stayLog">Angemeldet bleiben</label><br>
        <hr>
        <button type="submit">Anmelden</button>
      </form>
    </div>
</template>

<style scoped>
  .loginBox {
    background-color: #295e85;
    border: 5px solid #10283a;
    border-radius: 10px;
    padding: 0.5em;
    position: absolute;
    right: 0.5em;
    top: 5em;
    z-index: 1;
    transition: all 0.75s;
  }

  .loginBox > form > label {
    font-size: 1em;
    font-weight: bold;
    color: white;
  }

  .loginBox > form > label > input {
    border-radius: 0.5em;
    border: 3px solid #10283a;
    padding: 0.25em;
  }

  .loginBox > form > hr {
    border: 2px solid #10283a;
  }

  .loginBox > form > button {
    position: relative;
    left: 37%;
    color: white;
    font-size: 1em;
    background-color: #23374b;
    padding: 0.25em;
    border: 2px solid black;
    border-radius: 5px;

  }

  .loginBox > form > button:hover {
    background-color: #295e85;
    border-radius: 3px;
    border-color: #10283a;
  }

</style>