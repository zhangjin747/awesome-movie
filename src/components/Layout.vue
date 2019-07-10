<template>
  <div class="app-wrapper">
    <Header />
    <Main />
    <el-backtop>
      <i class="el-icon-caret-top"></i>
    </el-backtop>
  </div>
</template>
<script>
import Header from './Header.vue';
import Main from './Main.vue';

export default {
  data() {
    return {};
  },
  components: { Header, Main },
};
</script>
