<template>
  <div class="movie-list">
    <el-row>
      <el-col :span="16">
        <el-row
          type="flex"
          :gutter="10"
          justify="space-between"
          align="top"
          style="flex-wrap: wrap;"
        >
          <el-col :span="6" v-for="movie in movies" :key="movie.id">
            <el-card :body-style="{ padding: 0 }" shadow="never">
              <a :href="movie.url" target="_blank">
                <div class="img-container">
                  <img :src="movie.cover" width="150" />
                </div>
                <div class="info">
                  <span class="title">{{movie.title}}</span>
                  <span class="rate">{{movie.rate}}</span>
                </div>
              </a>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="more" v-show="isShowMore" @click.native="loadMore">
            <span>加载更多</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="right-tag">
        <MovieTag
          v-for="tags in allTags"
          :key="tags[0]"
          :tags="tags"
          @filter-movie="filterMovieByTag"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieTag from './MovieTag.vue';
import allTags from '@/constants/tag';
import { getMovies } from '@/api/movies';
import { getScrollTop } from '@/utils';

export default {
  data() {
    return {
      movies: [],
      type: '',
      feature: '',
      start: 0,
      genres: '',
      countries: '',
      year_range: '',
      isShowMore: false,
      allTags,
    };
  },
  components: { MovieTag },
  created() {
    this.getMovies();
  },
  computed: {
    params() {
      return {
        sort: 'U',
        range: '0,10',
        tags:
          this.type && this.feature
            ? `${this.type}, ${this.feature}`
            : `${this.type}${this.feature}`,
        start: this.start,
        genres: this.genres,
        countries: this.countries,
        year_range: this.mapYear(this.year_range),
      };
    },
  },
  methods: {
    async getMovies() {
      const { data } = await getMovies(this.params);
      this.movies = [...this.movies, ...data];
      if (!this.isShowMore) {
        this.isShowMore = true;
      } else {
        this.$nextTick(() => {
          const scrollTop = getScrollTop();
          const offset = window.innerHeight - 110;
          window.scrollTo({
            top: scrollTop + offset,
            behavior: 'smooth',
          });
        });
      }
    },
    loadMore() {
      this.start += 20;
      this.getMovies();
    },
    async filterMovieByTag(tag) {
      if (allTags.genres.includes(tag)) {
        this.genres = tag.includes('全部') ? '' : tag;
      } else if (allTags.countries.includes(tag)) {
        this.countries = tag.includes('全部') ? '' : tag;
      } else if (allTags.years.includes(tag)) {
        this.year_range = tag.includes('全部') ? '' : tag;
      } else if (allTags.types.includes(tag)) {
        this.type = tag.includes('全部') ? '' : tag;
      } else if (allTags.features.includes(tag)) {
        this.feature = tag.includes('全部') ? '' : tag;
      }
      this.start = 0;
      const { data } = await getMovies(this.params);
      this.movies = data;
      window.scrollTo(0, 0);
    },
    getImage(url) {
      return url.replace(/http\w{0,1}:\/\//g, 'https://images.weserv.nl/?url=');
    },
    mapYear(yearStr) {
      const map = {
        2019: '2019,2019',
        2018: '2018,2018',
        '2010年代': '2010,2019',
        '2000年代': '2000,2009',
        '90年代': '1990,1999',
        '80年代': '1980,1989',
        '70年代': '1970,1979',
        '60年代': '1960,1969',
        更早: '1,1959',
      };
      return map[yearStr];
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
