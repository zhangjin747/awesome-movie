<template>
  <div class="movie-list">
    <el-row type="flex" :gutter="10" align="top" style="flex-wrap: wrap;">
      <el-col :span="6" v-for="movie in movies" :key="movie.id">
        <el-card :body-style="{ padding: 0 }" shadow="never">
          <a :href="movie.alt" target="_blank">
            <div class="img-container">
              <img :src="movie.images.small" width="150" />
            </div>
            <div class="info">
              <span class="title">{{ movie.title }}</span>
              <span class="rate">{{ movie.rating.average }}</span>
            </div>
          </a>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getTop250 } from '@/api/movies';

export default {
  data() {
    return {
      movies: [],
    };
  },
  // components: { MovieTag },
  created() {
    this.getMovies();
  },
  computed: {},
  methods: {
    async getMovies() {
      const data = await getTop250();
      this.movies = data.subjects;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-list {
  padding-top: 15px;
}

.right-tag {
  position: sticky;
  top: 76px;
}

.el-card {
  border: none;
}

.el-col {
  margin-bottom: 20px;
}

a {
  color: #000;
  text-decoration: none;
}
.img-container {
  height: 210px;
  overflow: hidden;
}
.info {
  margin-top: 5px;
  width: 150px;
  text-align: left;
}
.title {
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
  }
}

.rate {
  color: #ffac2d;
}

.more {
  background: #f7f7f7;
  padding: 5px 0;
  text-align: center;
  &:hover {
    background: #e6e6e6;
    cursor: pointer;
  }
  span {
    color: #258dcd;
  }
}
</style>
