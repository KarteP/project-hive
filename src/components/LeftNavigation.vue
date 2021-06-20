<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" v-bind:width="350" permanent>
    <!-- User data -->
    <v-list-item three-line>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content class="left-nav-header">
        <v-list-item-title>John Leider</v-list-item-title>
        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        <v-list-item-subtitle>john.leider@gmail.com</v-list-item-subtitle>
      </v-list-item-content>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>chevron_left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <!-- Menu content -->
    <v-list dense>
      <v-list-item v-for="item in leftNavItems" :key="item.title" link>
        <!-- Left nav menu content -->
        <v-list-item-content>
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
            <template v-slot:activator="{ on }">
              <v-btn class="menu-btn" color="#166239" dark v-on="on">
                <v-icon>{{ item.icon }}</v-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-btn>
            </template>
            <!-- Extra menu content -->
            <div v-if="item.title === 'Satellite Data'">
              <SatelliteDataCard></SatelliteDataCard>
            </div>
            <div v-if="item.title === 'My Profile'">
              <MyProfileCard></MyProfileCard>
            </div>
            <div v-if="item.title === 'About us'">
              <AboutUsCard></AboutUsCard>
            </div>
          </v-menu>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import leftNavContent from "@/json/leftNavContent.json";
import SatelliteDataCard from "@/components/leftnav/SatelliteDataCard.vue";
import MyProfileCard from "@/components/leftnav/MyProfileCard.vue";
import AboutUsCard from "@/components/leftnav/AboutUsCard.vue";

export default {
  components: {
    SatelliteDataCard,
    MyProfileCard,
    AboutUsCard
  },
  data() {
    return {
      mini: false,
      drawer: true,
      leftNavItems: leftNavContent
    };
  }
};
</script>

<style>
.hint-box {
  padding: 10px;
}
.menu-btn {
  text-align: left;
}
</style>
