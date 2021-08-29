<template>
  <div class="home">
    <div v-if="!isLoading">
      <SearchBar />
      <!-- List Movie -->
      <MovieList :movies="movies" />
      <MovieList :movies="movies" />
      <MovieList :movies="movies" />
      <MovieList :movies="movies" />
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Button from '@/components/Button.vue'
import axios from "axios";
import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/MovieList";
import Loading from "@/components/Loading";

export default {
  name: "Home",
  components: { SearchBar, MovieList, Loading },
  data() {
    return {
      movies: [],
      isLoading: true,
      // searchValue: "",
    };
  },
  computed: {},
  async created() {
    try {
      let response = await axios.get(
        "http://localhost:8080/3/movie/upcoming?api_key=25e36fa93d6ebe5d0af45c48a89b4023&language=en-US&page=1"
      );
      this.movies = response.data.results.reverse();
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
