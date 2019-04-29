<template>
  <el-row>
    <el-col :span="24" class="select-bg">
      <el-row>
        <el-col :span="6">
          <img
            :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path"
            :alt="movie.alt"
            class="select-movieTicket-img"
          >
        </el-col>
        <el-col :span="12" style="color:#fff; margin-top:30px">
          <el-row>
            <el-col :span="24">
              <p class="select-title">{{movie.title}}</p>
            </el-col>
            <el-col :span="24">
              評分：
              <span>{{movie.vote_average}}</span>
            </el-col>
            <el-col :span="2" v-for="(genres, o) in movie.genres" :key="o">{{genres.name}}</el-col>
            <el-col :span="24">
              <p class="booking-overview">{{movie.overview}}</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" style=" margin-top:50px">
      <el-table
        :data="cinema"
        style="width: 100%"
        highlight-current-row
        @current-change="handleCurrentChange"
        size="medium"
      >
        <el-table-column fixed column-key="id" prop="cinema" label="影院" width="240"></el-table-column>
        <el-table-column prop="phone" label="電話" width="260"></el-table-column>
        <el-table-column fixed prop="add" label="地址" width="500"></el-table-column>
        <el-table-column fixed="right" prop="id" label="購票" width="160">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">購票</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      cinema: [],
      movie: [],
      src: "",
      alt: ""
    };
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleClick(row) {
      console.log(row.id);
      this.$store.commit("cinema", row.id);
      this.$router.push("/booking");
    }
  },
  created: function() {
    let movieID = this.$store.state.movieID;
    let TMDBmovie =
      "https://api.themoviedb.org/3/movie/" +
      movieID +
      "?api_key=" +
      this.apiKey +
      "&language=zh";
    this.$ajax
      .get(TMDBmovie)
      .then(data => {
        const movie = data.data;
        console.log(movie);
        this.movie = movie;
      })
      .catch(err => {
        console.log(err);
      });
    this.cinema = this.$store.state.cinema;
  }
};
</script>
