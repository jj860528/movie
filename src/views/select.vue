<template>
  <el-row>
    <el-col :span="24" class="select-bg">
      <el-row>
        <el-col :span="6">
          <img
            :src="'https://images.weserv.nl/?url='+movie[0].images.small"
            :alt="movie[0].title"
            class="select-movieTicket-img"
          >
        </el-col>
        <el-col :span="7" style="color:#fff; margin-top:30px">
          <el-row>
            <el-col :span="24">
              <p class="select-title">{{movie[0].title}}</p>
            </el-col>
            <el-col :span="24" style = "margin-top: 25px ;">
              評分：
              <span>{{movie[0].rating.average}}</span>
            </el-col>
            <el-col :span="3" v-for="(genres, o) in movie[0].genres" :key="o" style = "margin-top: 25px ;">{{genres}}</el-col>
          </el-row>
        </el-col>
          <el-col :span="8" style="color:#fff; margin-top:30px">
          <el-row :gutter="50">
            <el-col :span="24"><h1>主演</h1></el-col>
            <el-col :span="8" v-for="(person,o) in movie[0].casts" :key = "o" class = "select-person-img-father">
              <el-tooltip class="item" effect="dark" :content="person.name" placement="top-end">
                <img :src="'https://images.weserv.nl/?url='+person.avatars.small"  class = "select-person-img">
              </el-tooltip>
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
<<<<<<< HEAD
      alt: "",
      Arr:null,
      content:""
=======
      alt: ""
>>>>>>> f57a5daac1a5d77524826fac9a84e2ee30d19940
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
<<<<<<< HEAD
    let allMovie = this.$store.state.playingList;
    let Arr = []
    this.movie = Arr
    for(let i in allMovie){
      if(allMovie[i].id === movieID){
        Arr.push(allMovie[i])
        console.log(Arr)
      }
    }
    /*let TMDBmovie =
=======
    let TMDBmovie =
>>>>>>> f57a5daac1a5d77524826fac9a84e2ee30d19940
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
<<<<<<< HEAD
      });*/
    this.cinema = this.$store.state.cinema;
  },
=======
      });
    this.cinema = this.$store.state.cinema;
  }
>>>>>>> f57a5daac1a5d77524826fac9a84e2ee30d19940
};
</script>
