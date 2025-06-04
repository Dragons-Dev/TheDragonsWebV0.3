<script setup lang="ts">
import "@/assets/base.css"
</script>

<template>
  <main>
    <div class="imp">
      <h1>
        Impressum
      </h1>
      <br>
      <table>
        <thead>
        <tr>
          <th id="name">
            Name
          </th>
          <th id="dcont">
            E-Mail Kontakt
          </th>
          <th id="econt">
            Discord Kontakt
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td headers="name">
            DTheIcyDragon
          </td>
          <td headers="dcont">
            dtheicydragon (at) thedragons (dot) xyz
          </td>
          <td headers="econt">
            <a href="https://discord.thedragons.xyz">https://discord.thedragons.xyz</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="imp">
      <h1>
        Open-Source
      </h1>
      <br>
      <table>
        <tbody>
        <tr>
          <th>
          </th>
        </tr>
        <tr>
          <td>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="imp">
      <h1>
        Catchphrase....
      </h1>
    </div>
  </main>
</template>

<style>
.imp > h1 {
  text-align: center;
  margin-top: 0.5em;
}
main {
  display: flex;
  flex-flow: row;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
.imp {
  height: 100vh;
  width: 30%;
  margin: auto;
}
table {
  display: grid;
  grid-template-columns: auto auto;
  width: 83%;
  margin-left: auto;
}

thead, tbody {
  display: contents;
}
th, td {
  display: block;
  padding: 0.33em;
}
th {
  text-align: right;
}
td {
  text-align: left;
}
td>a{
  color: inherit;
}
td>a:visited{
  color: inherit;
}
</style>
