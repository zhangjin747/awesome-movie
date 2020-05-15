<template>
  <div class="header-wrapper">
    <header class="header">
      <el-menu
        mode="horizontal"
        active-text-color="#1989fa"
        :default-active="activeIndex"
        class="menuBar"
      >
        <el-menu-item index="1">正在热映</el-menu-item>
        <el-menu-item index="2">即将上映</el-menu-item>
        <el-menu-item index="3">Top250</el-menu-item>
        <el-menu-item index="4">页面3</el-menu-item>
      </el-menu>
      <el-input
        v-model="searchText"
        placeholder="搜索"
        class="search"
        suffix-icon="el-icon-search"
      ></el-input>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      activeIndex: '3',
    };
  },
};
</script>

<style lang="scss" scoped>
.menuBar {
  float: left;
}

.search {
  width: 20%;
  float: right;
  line-height: 60px;
}
</style>
