<script setup lang="ts">
  import {reactive} from "vue";

  const data = reactive({
    name: '',
    password: '',
    stay_logged_in: ''
  })

  const loggedIn = defineModel()

  async function checkLogin(): Promise<void> {
    const send = new FormData()
    send.append("name", data.name)
    send.append("password", data.password)
    send.append("stay_logged_in", data.stay_logged_in)
    const res = await fetch("https://127.0.0.1:8000/api/v1/authentication/login", {
      method: "POST",
      body: send,
    });
    await res.json().then((res) => {
      console.log(res)
      if (res.status === 200) {
        loggedIn.value = true
      } else {
        document.getElementById("errorMes").style.display = "block"; //TODO besseres Error Handling -> Nutzer fehler geben
      }
    }).catch((err) => {
      console.error("Fehler beim Verarbeiten der Antwort:", err);
    });
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
        <input v-model="data.stay_logged_in" id="stayLog" type="checkbox"/>
        <label for="stayLog">Angemeldet bleiben</label><br>
        <hr>
        <p id="errorMes" style="display: none; color: red; transition: 250ms">Passwort oder Nutzername Falsch!</p>
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
    transition: 500ms;
  }

  .loginBox > form > button:hover {
    background-color: #295e85;
    border-radius: 3px;
    border-color: #10283a;
  }

</style>