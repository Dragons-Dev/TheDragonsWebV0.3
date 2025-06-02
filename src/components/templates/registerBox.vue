<script setup lang="ts">

</script>

<template>
  <div class="registerBox">
    <form action="">
      <label for="mail">Deine E-Mail:</label><br>
      <input id="mail" type="email" placeholder="Deine E-Mail" size="40" required><br>
      <hr>
      <label for="passw1">Dein Passwort:</label><br>
      <input id="passw1" type="password" placeholder="Password" size="40" required><br><br>
      <label for="passw2">Wiederhole dein Passwort:</label><br>
      <input id="passw2" type="password" placeholder="Password" size="40" required><br>
      <hr>
      <input id="AGB" type="checkbox" required/>
      <label for="AGB">AGB zustimmen</label>
      <a href="" target="_blank">"(zu den AGB's)"</a><br>
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