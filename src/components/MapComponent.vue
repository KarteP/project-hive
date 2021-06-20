<template>
  <v-flex xs4>
    <v-card>
      <div id="content">
        <vue-google-heatmap :points="points"
                    :width="870"
                    :height="600" />
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
        {lat: 37.7989, lng:-122.4662}, //Presidio of San Francisco
        {lat: 37.7989, lng:-122.4662},
        {lat: 37.7989, lng:-122.4662},
        {lat: 37.7989, lng:-122.4662},
        {lat: 37.7989, lng:-122.4662},
        {lat: 37.7989, lng:-122.4662},
        {lat: 37.7989, lng:-122.4662},
        {lat: 37.7911, lng:-122.4377}, //Alta Plaza Park
        {lat: 37.7911, lng:-122.4377},
        {lat: 37.7916, lng:-122.4276}, //Lafayette Park
        {lat: 37.7916, lng:-122.4276},
        {lat: 37.7694, lng:-122.4862}, //Golden Gate Park
        {lat: 37.7694, lng:-122.4862},
        {lat: 37.7694, lng:-122.4862},
        {lat: 37.7694, lng:-122.4862},
        {lat: 37.7694, lng:-122.4862},
        {lat: 37.7694, lng:-122.4862},
        {lat: 37.7694, lng:-122.4862},
        {lat: 37.7729, lng:-122.4460}, //Panhandle
        {lat: 37.7729, lng:-122.4460},
        {lat: 37.7763, lng:-122.4328}, //The Painted Ladies
        {lat: 37.7763, lng:-122.4328},
        {lat: 37.7592, lng:-122.4572}, //Mount Sutro Open Space Reserve
        {lat: 37.7592, lng:-122.4572},
        {lat: 37.7592, lng:-122.4572},
        {lat: 37.7684, lng:-122.4414}, //Buena Vista Park
        {lat: 37.7684, lng:-122.4414},
        {lat: 37.7684, lng:-122.4414},
        {lat: 37.7592, lng:-122.4572}, //Forest Knolls
        {lat: 37.7592, lng:-122.4572},
        {lat: 37.7592, lng:-122.4572},
        {lat: 37.8048, lng:-122.4304}, //Great Meadow Park at Fort Mason
        {lat: 37.7846, lng:-122.5051}, //Lands End Lookout
        {lat: 37.7763, lng:-122.4328}, //The Painted Ladies
        {lat: 37.7653, lng:-122.4386}, //Corona Heights Park
        {lat: 37.7596, lng:-122.4269}, //Mission Dolores Park
      ]
    };
  }
};
</script>