<template>
  <b-navbar toggleable="lg" type="dark" class="mb-3" fixed="top">
    <b-container>
      <router-link to="/" class="mr-lg-4 navbar-brand"
        >MovieDB Finder</router-link
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="mx-lg-5">
            <router-link to="/" class="nav-link">Home</router-link>
          </b-nav-item>
          <b-nav-item class="mx-lg-5">
            <router-link to="/upcoming" class="nav-link">Upcoming</router-link>
          </b-nav-item>
          <b-nav-item class="mx-lg-5">
            <router-link to="/top-rated" class="nav-link"
              >Top Rated</router-link
            >
          </b-nav-item>
          <b-nav-item class="mx-lg-5">
            <router-link to="/popular" class="nav-link">Popular</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
.navbar {
  /* border: 2px solid grey; */
  background: rgb(12, 15, 54);
  box-sizing: border-box !important;

  &-brand {
    font-family: "Kaushan Script", cursive;
    /* font-weight: bold; */
    text-decoration: none;
    color: #42b983 !important;
  }
  .nav-link {
    color: #42b983 !important;
    :hover {
      color: whitesmoke !important;
      border-bottom: 2px solid;
      box-sizing: border-box !important;      }
    :active {
      color: #fff !important;
    }
  }
}
</style>
