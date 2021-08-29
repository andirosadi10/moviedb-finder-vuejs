<template>
  <div>
    <b-container class="mb-4">
      <h2 class="text-light font-weight-bold">UPCOMING</h2>
      <div v-if="movies" class="border d-flex row-posters">
        <b-col
          cols="6"
          sm="4"
          md="4"
          lg="3"
          v-for="movie in movies"
          :key="movie.id"
        >
          <b-card
            title=""
            :img-src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            :img-alt="movie.title"
            img-top
            class="mt-2 border-0 shadow card-poster"
          >
            <b-card-text>
              <!-- {{ movie.overview }} -->
            </b-card-text>
          </b-card>
        </b-col>
      </div>
      <b-row v-else>
        <b-col cols="12">
          <b-card>
            <h1>Kosong..</h1>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    movies: Array,
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.row-posters {
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
