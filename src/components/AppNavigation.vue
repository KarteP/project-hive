<template>
  <span>
    <v-toolbar color="black darken-4" dark height="80px">
      <v-btn :ripple="false" color="black darken-4" to="/" id="no-background-hover">
        <img src="@/assets/logo.png" height="70px" width="70px" />
      </v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/">LOG OUT</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Project Hive",
      drawer: false,
      items: [{ title: "About" }, { title: "Log out" }]
    };
  }
};
</script>

<style scoped>
#no-background-hover::before {
   background-color: transparent !important;
}
</style>
