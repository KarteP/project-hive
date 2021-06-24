<template>
  <v-footer color="black darken-4" dark>
    <div>&copy; {{ new Date().getFullYear() }} by Project Hive.</div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

