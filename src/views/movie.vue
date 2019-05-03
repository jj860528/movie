<template>
  <el-row>
    <el-col :span="0"></el-col>
    <el-col :span="24">
      <el-row>
        <el-col
          :xl="4"
          :md="4"
          :xs="12"
          v-for="(movie , o) in hotMovie"
          :key="o"
          style="border-style:none"
        >
          <el-card :body-style="{ padding: '0px'}" :id="movie.id" shadow="hover" class="movie">
            <div slot="header" class="clearfix">
              <el-tooltip effect="dark" :content="movie.title" placement="top">
                <span class="movie-txt">{{movie.title}}</span>
              </el-tooltip>
            </div>
            <img :src="'https://images.weserv.nl/?url='+movie.images.small" class="image">
            <div class="buyButtonBackground">
              <el-button
                type="primary"
                class="buybutton"
                style="border-radius:0px"
                @click="buyTickets(movie.id)"
              >點擊購票</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import "../assets/style.css";

export default {
  data() {
    return {
      src: "",
      hotMovie: new Array()
    };
  },
  methods: {
    buyTickets(id) {
      this.$store.commit("movie", id);
      this.$router.push("/select");
    }
  },
  created: function() {
    /*console.log(this.$store.state.comingList)
    console.log(this.$store.state.playingList)
    console.log(this.$store.state.weeklyList)
    var urlT =
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
      this.apiKey +
      "&language=zh-tw&page=1";
    this.$ajax
      .post(urlT)
      .then(data => {
        var arr = data.data.results;
        this.hotMovie = arr;
        this.loading = false;
      })
      .catch(function(err) {
        console.log(err);
      });*/
    this.hotMovie = this.$store.state.allMovie
  }
};
</script>
