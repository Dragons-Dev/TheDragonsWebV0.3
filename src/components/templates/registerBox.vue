<script setup lang="ts">

import {reactive} from "vue";

const data = reactive({
  mail: '',
  name: '',
  password1: '',
  password2: ''
})

const loggedIn = defineModel()

async function checkRegister() {
  const send = new FormData();
  send.append('mail', data.mail);
  send.append('name', data.name);
  send.append('password', data.password1);
  if (data.password1 == data.password2) {
    if (checkPassword()) {
      const res = (await fetch("https://127.0.0.1:8000/api/v1/authentication/register", {
        method: 'POST',
        body: send
      })).json().then((res) => {
        if (res.status === 200) {
          loggedIn.value = true
        }
        else {
          if (res.message == "username") {
            document.getElementById("errorMes").innerHTML = "Der Nutzername existiert bereits!"
          }
          else {
            document.getElementById("errorMes").innerHTML = "Die E-Mail ist bereits vergeben!"
          }
        }
      })
    } else {
      document.getElementById("errorMes").innerHTML = "Das Passwort muss Groß-und Kleinbuchstaben, eine Zahl enthalten und mindestens 8 Zeichen lang sein!"
    }
  } else {
    document.getElementById("errorMes").innerHTML = "Die Passwörter müssen übereinstimmen!"
    document.getElementById("errorMes").style.display = "block";
  }

}

function checkPassword() {
  return data.password1.length >= 8 && /[A-Z]/.test(data.password1) && /[\d]/.test(data.password1) && /[a-z]/.test(data.password1);
}

</script>

<template>
  <div class="registerBox">
    <form @submit.prevent="checkRegister()">
      <label>Deine E-Mail:<br>
      <input v-model="data.mail" type="email" placeholder="Deine E-Mail" size="40" required><br>
      </label><br>
      <label>Dein Nutzername: <br>
        <input v-model="data.name" type="text" placeholder="Dein Nutzername" size="40" required><br>
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
      <p id="errorMes" style="display: block; font-size: large; color: #ff0000; width: 20em; transition: 250ms"></p>
      <button type="submit">Konto erstellen</button>
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

  .registerBox > form > label > input {
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