<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar />
    <div class="main-page">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "globals";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .main-page {
    margin-top: 80px;
  }
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
