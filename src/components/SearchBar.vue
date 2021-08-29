<template>
  <b-container class="mb-2 search-bar">
    <b-form>
      <b-form-input
        size="lg"
        type="search"
        name="search_bar"
        id="search_bar"
        placeholder="Search ..."
        prepend-html='<i class="fa fa-pencil"></i>'
      />
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  background: lightgrey;
}
</style>
