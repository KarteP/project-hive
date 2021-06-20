<template>
  <div class="land-map">
    <v-container fluid>
      <v-layout wrap>
        <v-flex d-flex xs12 sm7>
          <v-layout wrap>
            <v-flex d-flex>
              <v-card dark tile flat>
                <left-navigation></left-navigation>
              </v-card>
              <v-card dark tile flat>
                <MapSearchComponent></MapSearchComponent>
                <MapComponent></MapComponent>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import LeftNavigation from "@/components/LeftNavigation";
import MapComponent from "@/components/MapComponent.vue";
import MapSearchComponent from "@/components/MapSearchComponent.vue";

export default {
  name: "MapView",
  components: {
    LeftNavigation,
    MapComponent,
    MapSearchComponent
  }
};
</script>

<style>
.land-map {
  /* Photo by Creative Vix from Pexels */
  background: url("../assets/background.jpg");
}
</style>
