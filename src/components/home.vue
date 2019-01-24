<template>
    <div>
        <el-row >
            <el-col :xl="16" :md="16" :xs="24">
                <el-row type="flex" justify="space-around" style = "align-items: baseline; ">
                    <el-col :span="12"><div class = "hotMovie-title"><p>熱門電影</p></div ></el-col>
                    <el-col :span="6"><div class = "allMovie"><p>全部》</p></div ></el-col>
                </el-row>
                <el-row>
                    <el-col :xl="5" :md="5" :xs="9" v-for = "(movie , o) in hotMovie" :key="o" class = "movie">
                        <el-card :body-style="{ padding: '0px' }" :id='movie.id' shadow="hover">
                            <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" class="image">
                            <div style="padding: 14px;">
                                <el-tooltip  effect="dark" :content="movie.title" placement="top">
                                    <div  class="movieTitleWindow">
                                        <span class = "movie-txt">{{movie.title}}</span>
                                    </div>
                                </el-tooltip>
                            </div>
                        </el-card>
                        <div class = "hover-movie">
                            <div>
                                <el-button class = "movie-detailed" type="info" size="mini" plain round>電影詳情 <i class = "el-icon-star-on"></i></el-button>
                            </div>
                            <div>
                                 <el-button class = "movie-go" type="info" size="mini" plain round>前往訂票 <i class = "el-icon-d-arrow-right"></i></el-button>                        
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :xl="4" :md="4" class = "hidden-md-and-down">
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
            content:"",
            src:"",
            id:"",
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

</style>
