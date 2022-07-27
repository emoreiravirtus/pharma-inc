<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./views/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
