<template>
  <b-container>
    <h2 class="text-light font-weight-bold">POPULAR</h2>
    <b-row>
      <b-col
        cols="6"
        sm="4"
        md="4"
        lg="3"
        v-for="(movie, index) in movies"
        :key="index"
      >
        <b-card
          title=""
          :img-src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          :img-alt="movie.title"
          img-top
          class="mt-2 border-0 shadow card-poster"
        >
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Popular",
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=25e36fa93d6ebe5d0af45c48a89b4023&language=en-US&page=1"
      );
      let result = response.data.results;
      this.movies = result;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped></style>
