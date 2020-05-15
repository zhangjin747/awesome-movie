<template>
  <div class="main-wrapper">
    <div class="main-container">
      <MovieList />
    </div>
  </div>
</template>

<script>
import MovieList from './MovieList.vue';

export default {
  data() {
    return {};
  },
  components: { MovieList },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:first-child {
    padding-top: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
