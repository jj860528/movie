<template>
  <div>
    <el-row :gutter="24">
      <el-col :xl="16" :md="16" :xs="24">
        <el-row type="flex" justify="space-around" style="align-items: baseline; ">
          <el-col :span="12">
            <div class="hotMovie-title">
              <p>熱門電影</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="allMovie">
              <router-link to="/movie">
                <p style="color:#ef4238" @click="allMovie">全部》</p>
              </router-link>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :xl="5"
            :md="5"
            :xs="9"
            v-for="(movie , o) in hotMovie"
            :key="o"
            class="movie"
            v-loading.fullscreen.lock="loading"
          >
            <el-card :body-style="{ padding: '0px' }" :id="movie.id" shadow="hover">
              <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" class="image">
              <div style="padding: 14px;">
                <el-tooltip effect="dark" :content="movie.title" placement="top">
                  <div class="movieTitleWindow">
                    <span class="movie-txt">{{movie.title}}</span>
                  </div>
                </el-tooltip>
              </div>
            </el-card>
            <div class="hover-movie">
              <div>
                <!--<el-button class = "movie-detailed" type="warning" size="mini" plain round>電影詳情 <i class = "el-icon-star-on"></i></el-button>-->
              </div>
              <div>
                <el-button class="movie-go" type="primary" size="mini" plain round>前往訂票
                  <i class="el-icon-d-arrow-right"></i>
                </el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xl="6" :xs="0" :offset="1">
        <p class="today">今日票房</p>
        <ol>
          <li v-for="(todayHots ,o) in  todayHot" :key="o" class="today-text">{{todayHots.title}}</li>
        </ol>
      </el-col>
      <el-col :xl="16" :md="16" :xs="24">
        <el-row type="flex" justify="space-around" style="align-items: baseline; ">
          <el-col :span="12">
            <div class="future-title">
              <p>即將上映</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="allMovie">
              <p style="color:#409EFF">全部》</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :xl="5"
            :md="5"
            :xs="9"
            v-for="(movie , o) in futureMovie"
            :key="o"
            class="movie"
            v-loading.fullscreen.lock="loading"
          >
            <el-card :body-style="{ padding: '0px' }" :id="movie.id" shadow="hover">
              <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" class="image">
              <div style="padding: 14px;">
                <el-tooltip effect="dark" :content="movie.title" placement="top">
                  <div class="movieTitleWindow">
                    <span class="movie-txt">{{movie.title}}</span>
                  </div>
                </el-tooltip>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xl="6" :xs="0" :offset="1">
        <p class="today" style="color:#ffb400!important">最受期待</p>
        <ol>
          <li
            v-for="(futureMovies ,o) in  futureMovie"
            :key="o"
            class="today-text"
          >{{futureMovies.title}}</li>
        </ol>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import "../assets/style.css";

export default {
  data() {
    return {
      loading: true,
      content: "",
      src: "",
      id: "",
      hotMovie: new Array(),
      futureMovie: new Array(),
      todayHot: new Array(),
      activeIndex: "/movie"
    };
  },
  methods: {
    movie() {
      //data from TMDB
    },
    allMovie() {
      this.$store.commit("indexPage", "/movie");

      console.log(this.$store.state.indexPage);
    }
  },
  created: function() {
    //獲取熱門電影
    var hoturlT =
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
      this.apiKey +
      "&language=zh-tw&page=1";
    this.$ajax
      .post(hoturlT)
      .then(data => {
        var arr = data.data.results;
        arr.length = 8;
        this.hotMovie = arr;
        this.loading = false;
      })
      .catch(function(err) {
        console.log(err);
      });
    //即將上映
    var urlT =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
      this.apiKey +
      "&language=zh-tw&page=1";
    this.$ajax
      .post(urlT)
      .then(data => {
        var arr = data.data.results;
        arr.length = 8;
        this.futureMovie = arr;
        this.loading = false;
      })
      .catch(function(err) {
        console.log(err);
      });
    //todayHot
    const todayurlT =
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
      this.apiKey +
      "&language=zh-tw&page=1";
    this.$ajax
      .post(todayurlT)
      .then(data => {
        var arr = data.data.results;
        arr.length = 10;
        this.todayHot = arr;
        this.loading = false;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
