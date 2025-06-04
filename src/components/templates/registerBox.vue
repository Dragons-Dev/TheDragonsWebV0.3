<script setup lang="ts">

import {reactive} from "vue";

const data = reactive({
  name: '',
  password1: '',
  password2: '',
  stay_logged_in: ''
})
async function checkLogin(): Promise<void> {
  const send = new FormData()
  send.append("name", data.name)
  send.append("password", data.password1)
  const res = await fetch("https://127.0.0.1:8000/api/v1/authentication/register", {
    method: "POST",
    body: send,
  });
  await res.json().then((res) => {
    console.log(res)
    if (res.status === 200) {
      window.location.href = "/";
    } else {
      alert("Login fehlgeschlagen: " + res.message); //TODO besseres Error Handling -> Nutzer fehler geben
    }
  }).catch((err) => {
    console.error("Fehler beim Verarbeiten der Antwort:", err);
  });
}

</script>

<template>
  <div class="registerBox">
    <form @submit.prevent="checkLogin()">
      <label>Deine E-Mail:<br>
      <input v-model="data.name" placeholder="Deine E-Mail" size="40" required><br>
      </label>
      <hr>
      <label>Dein Passwort:<br>
      <input v-model="data.password1" type="password" placeholder="Password" size="40" required><br><br>
      </label>
      <label>Wiederhole dein Passwort:<br>
      <input v-model="data.password2" type="password" placeholder="Password" size="40" required><br>
      </label>
      <hr>
      <label>
      <input id="AGB" type="checkbox" required/>
      AGB zustimmen</label>
      <a href="" target="_blank">(zu den AGB's)</a><br>
      <hr>
      <button>Konto erstellen</button>
    </form>
  </div>
</template>

<style scoped>
  .registerBox {
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

  .registerBox > form > label {
    font-size: 1em;
    font-weight: bold;
    color: white;
  }

  .registerBox > form > input {
    border-radius: 0.5em;
    border: 3px solid #10283a;
    padding: 0.25em;
  }

  .registerBox > form > hr {
    border: 2px solid #10283a;
  }

  .registerBox > form > a {
    padding-left: 60px;
  }

  .registerBox > form > button {
    position: relative;
    left: 32%;
    color: white;
    font-size: 1em;
    background-color: #23374b;
    padding: 0.25em;
    border: 2px solid black;
    border-radius: 5px;
    transition: 500ms;
  }

  .registerBox > form > button:hover {
    background-color: #295e85;
    border-radius: 3px;
    border-color: #10283a;
  }
</style>