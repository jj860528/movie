<template>
    <div>
        <el-row >
            <el-col :span="16">
                <el-row>
                    <el-col :span="12"><p class = "hotMovie">熱門電影</p></el-col>
                    <el-col :span="6"><p class = "allMovie">全部》</p></el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" v-for = "(id , o) in hotMovie" :key="o">
                        <el-card :body-style="{ padding: '0px' }" id = "id.id">
                            <img :src="'https://image.tmdb.org/t/p/w500/'+id.poster_path" class="image">
                            <div style="padding: 14px;">
                                <span>{{id.title}}</span>
                                <div class="bottom clearfix">
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="4" :offset="4">
                <p class = "today">今日票房</p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import "../assets/home.css"


export default {
    data() {
        return {
            src:"",
            hotMovie:new Array()
        }
    },
    methods:{
        movie(){
            //data from TMDB
        }
    },
    created: function () {
        var apiKey = "1c6690deaaf9d0ad5da4165c1a00a722"
        var access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzY2OTBkZWFhZjlkMGFkNWRhNDE2NWMxYTAwYTcyMiIsInN1YiI6IjVjNDcwNzhiYzNhMzY4NDc4Yzg1ZDBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uh3Q_bO_S3nR4llL9_T38xjzBhtUPjUo18pSMsnQ0MQ"
        var account_id = "5c47078bc3a368478c85d0d0"
        //獲取熱門電影
        var urlT =
            "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=zh-tw&page=1";
        this.$ajax.post(urlT).then((data) =>{
            var arr = data.data.results;
            arr.length = 8
            this.hotMovie = arr;
        }).catch(function(err){
            console.log(err)
        })
    }
}
</script>
<style scoped>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>
