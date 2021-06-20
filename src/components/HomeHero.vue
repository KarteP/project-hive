<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-center align-center column pa-5>
      <div class="display-1 font-weight-bold black--text text-xs-center">Project Hive</div>
      <div class="display-1 font-weight-bold black--text text-xs-center">Welcome!</div>
      &nbsp;
      <v-btn class="mt5" color="#166239" to="/map">
        <v-icon color="white">LOG IN</v-icon>
      </v-btn>
      &nbsp;
      <v-btn class="mt5 darken-4" color="#166239" to="/registration">
        <v-icon color="white">REGISTER</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero"
}
</script>


<style scoped>
.home-hero {
  /* Photo by Creative Vix from Pexels */
  background: url("../assets/background.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
.v-btn {
  display: inline-block;
}
</style>
