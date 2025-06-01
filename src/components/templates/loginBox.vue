<script setup lang="ts">

</script>

<template>
  <div id="" class="loginBox">
    <label for="mail">Deine E-Mail:</label><br>
    <input id="mail" type="email" placeholder="Deine E-Mail" size="40" required><br>
    <hr>
    <label for="passw">Dein Passwort:</label><br>
    <input id="passw" type="password" placeholder="Password" size="40" required><br>
    <hr>
    <input id="stayLog" type="checkbox"/>
    <label for="stayLog">Angemeldet bleiben</label><br>
    <hr>
    <button>Anmelden</button>
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
}

.loginBox > label {
  font-size: 1em;
  font-weight: bold;
  color: white;
}

.loginBox > input {
  border-radius: 0.5em;
  border: 3px solid #10283a;
  padding: 0.25em;
}

.loginBox > hr {
  border: 2px solid #10283a;
}

.loginBox > button {
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

.loginBox > button:hover {
  background-color: #295e85;
  border-radius: 3px;
  border-color: #10283a;
}
</style>