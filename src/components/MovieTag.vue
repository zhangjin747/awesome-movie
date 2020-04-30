<template>
  <div class="tags">
    <el-button
      plain
      v-for="tag in tags"
      :key="tag"
      size="mini"
      :class="name === tag ? 'active' : ''"
      @click="filterMovie(tag)"
      >{{ tag }}</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.tags[0],
    };
  },
  props: {
    tags: Array,
  },
  methods: {
    filterMovie(tag) {
      this.name = tag;
      this.$emit('filter-movie', tag);
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  padding-bottom: 20px;
}
.el-button + .el-button {
  margin-left: 0;
}
.el-button {
  margin-bottom: 10px;
  margin-right: 15px;
  &.active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    background: #fff;
    outline: 0;
  }
}
</style>
