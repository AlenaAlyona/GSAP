<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  font-family: "Rubik", sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
