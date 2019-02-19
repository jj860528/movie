<template>
    <el-row>
        <el-col :span="0"></el-col>
        <el-col :span="24">
            <el-row>
                <el-col :span="4" v-for = "(movie , o) in hotMovie" :key="o" style = "border-style:none">
                    <el-card :body-style="{ padding: '0px'}" :id='movie.id' shadow="hover" class = "movie">
                        <div slot="header" class="clearfix">
                            <el-tooltip  effect="dark" :content="movie.title" placement="top" >
                                <span class = "movie-txt">{{movie.title}}</span>
                            </el-tooltip>
                        </div>
                        <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" class="image">
                        <div class = "buyButtonBackground">
                            <el-button type="primary" class="buybutton" style = "border-radius:0px" >點擊購票</el-button>
                        </div>
                    </el-card>            
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
import "../assets/movie.css"

export default {
    data(){
        return{
            src:"",
            hotMovie:new Array(), 
        }
    },
    created: function(){
        var urlT =
            "https://api.themoviedb.org/3/movie/popular?api_key=" + this.apiKey + "&language=zh-tw&page=1";
            this.$ajax.post(urlT).then((data) =>{
            var arr = data.data.results;
            this.hotMovie = arr;
            console.log(arr)
            this.loading = false;
            
        }).catch(function(err){
            console.log(err)
        })
    }
}
</script>