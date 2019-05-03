<template>
  <div v-if="show">
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
            v-for="(movie ,index) in hotMovie"
            :key="index"
            class="movie"
            v-loading.fullscreen.lock="loading"
          >
            <el-card :body-style="{ padding: '0px' }" :id="movie.id" shadow="hover">
              <img :src="'https://images.weserv.nl/?url='+movie.images.small" class="image">
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
                <el-button class="movie-go" type="primary" size="mini" plain round>
                  前往訂票
                  <i class="el-icon-d-arrow-right"></i>
                </el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xl="6" :xs="0" :offset="1">
        <p class="today" @click="movie">今日票房</p>
        <ul style="list-style: none; counter-reset: li;">
          <li v-for="(todayHots ,o) in  hotMovie" :key="o" class="today-text">{{todayHots.title}}</li>
        </ul>
      </el-col>
      <el-col :xl="16" :md="16" :xs="24">
        <el-row type="flex" justify="space-around" style="align-items: baseline; ">
          <el-col :span="12">
            <div class="future-title">
              <p>即將上映</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="allMovie"></div>
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
              <img :src="'https://images.weserv.nl/?url='+movie.images.small" class="image">
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
        <ul style="list-style: none; counter-reset: li;">
          <li
            v-for="(futureMovies ,o) in  futureMovie"
            :key="o"
            class="today-text"
          >{{futureMovies.title}}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import "../assets/style.css";

export default {
  data() {
    return {
      loading: false,
      content: "",
      src: "",
      id: "",
      hotMovie: {},
      futureMovie: new Array(),
      activeIndex: "/movie",
      show: true
    };
  },
  methods: {
    movie() {
      //data from TMDB
    },
    allMovie() {
      this.$store.commit("indexPage", "/movie");
    }
  },
  created: function() {
    this.hotMovie = this.$store.state.playingList;
    this.futureMovie = this.$store.state.comingList;

    //即將上映
    /*var urlT =
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
      });*/
    //todayHot
    /*const todayurlT =
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
      });*/
  },
  watch: {
    futureMovie: function() {
      if (this.futureMovie.length > 8) {
        this.futureMovie.splice(8);
      }
    },
    hotMovie: function() {
      if (this.hotMovie.length > 8) {
        let obj =JSON.parse(JSON.stringify(this.hotMovie));
        obj.splice(8);
        this.hotMovie = obj
      }
    }
  }
};
</script>
