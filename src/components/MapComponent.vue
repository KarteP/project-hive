<template>
  <v-flex xs4>
    <v-card>
      <div id="content">
        <vue-google-heatmap :points="points"
                    :width="870"
                    :height="600"
                    :lat="59.4370"
                    :lon="-24.7536" />
      </div>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      //Heatmap data
      points: [
        {lat: 59.4339, lng:24.7664}, //Politseipark
        {lat: 59.4339, lng:24.7664},
        {lat: 59.4339, lng:24.7664},
        {lat: 59.4339, lng:24.7664},
        {lat: 59.4339, lng:24.7664},
        {lat: 59.4339, lng:24.7664},
        {lat: 59.4339, lng:24.7664},
        {lat: 59.4377, lng:24.7900}, //Kadrioru Park
        {lat: 59.4377, lng:24.7900},
        {lat: 59.4377, lng:24.7900},
        {lat: 59.4377, lng:24.7900},
        {lat: 59.4377, lng:24.7900},
        {lat: 59.4377, lng:24.7900},
        {lat: 59.4377, lng:24.7900},
        {lat: 59.4335, lng:24.7369}, //Deer's Park
        {lat: 59.4335, lng:24.7369},
        {lat: 59.4335, lng:24.7369},
        {lat: 59.4166, lng:24.6954}, //Löwenruh Park
        {lat: 59.4166, lng:24.6954},
        {lat: 59.4166, lng:24.6954},
        {lat: 59.4339, lng:24.6954},
        {lat: 59.4357, lng:24.7524}, //Politseipark
        {lat: 59.4357, lng:24.7524},
        {lat: 59.4330, lng:24.7334}, //Falgi Park
        {lat: 59.4330, lng:24.7334},
        {lat: 59.4386, lng:24.7378}, //Šnelli Park
        {lat: 59.4386, lng:24.7378},
        {lat: 59.4386, lng:24.7378}
     ]
    };
  }
};
</script>