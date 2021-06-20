<template>
  <v-card>
    <v-container>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Satellite Data</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list class="service-form">
        <p align="justify">Heatmap with good places for beekeeping. Red - best area for beehives. Green - not so good.</p>
      </v-list>
    </v-container>
  </v-card>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      mini: false,
      drawer: true,
    };
  }
};
</script>

<style>
.hint-box {
  padding: 10px;
}
.v-container {
  margin: 50px;
}
</style>
