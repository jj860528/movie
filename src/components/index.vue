<template>
    <div>
		<el-container>
			<el-header class = "header">
				<el-row type="flex" justify="center" :gutter="24" >
					<el-col :xl="16" :md = "16" :xs="24">
						<el-row type="flex" justify="space-between" style = "text-align : center; " >
							<el-col :xl="4" :md = "3" :xs="4">
								<img :src="title" alt="UU電影" class = "logo">
								<img src="../assets/mini-title.png" alt="UU電影" class = "logo-mini">
							</el-col>
							<el-col :xl="16" :md = "10" :xs="18">
								<el-menu 
									class = "menu-header menu "
									mode="horizontal" 
									:default-active="activeIndex" 
									@select="handmenu" router
									style = "
										border-style:none;
										margin: 0px 0px 0px 0px;
									">
									<el-menu-item index="/">首頁</el-menu-item>
									<el-menu-item index="/movie">電影</el-menu-item>
									<el-menu-item index="/cinema">影院</el-menu-item>
								</el-menu>
							</el-col>
							<el-col :xl="4" :md = "3" :xs="2">
								<router-link to = "/login"><i class = "iconfont user" >&#xe6a3;</i></router-link>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</el-header>
			<el-main style = " margin: 50px 0px 0px 0px;">
				<el-row type="flex" justify="center" :gutter="24" >
					<el-col :xl="16" :md = "16" :xs="24">
						<router-view/>
					</el-col>
				</el-row>
			</el-main>
			<el-footer class = "footer" height = "60px">
				<p class = "footer-txt" @click="movie">轉載內容版權歸作者及來源網站所有，本站原創內容轉載請註明來源，商業媒體及紙媒請先聯繫：UUmovie@gmail.com</p>
				<p class = "footer-mix">本網站內容享有著作權，禁止侵害，違者必究。 © 2019 UUmovie All Rights Reserved.</p>
			</el-footer>
		</el-container>	
	</div>
</template>
<script>
import "@/assets/index.css"
import title from '@/assets/title.png'
export default {
    data(){
        return{
			activeIndex: '/',
			title:title,
        }
    },
    methods: {
        handmenu(key, keyPath){
            console.log(key, keyPath);
		},
		//data from TMDB
		movie(){
			var apiKey = "1c6690deaaf9d0ad5da4165c1a00a722"
			var access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzY2OTBkZWFhZjlkMGFkNWRhNDE2NWMxYTAwYTcyMiIsInN1YiI6IjVjNDcwNzhiYzNhMzY4NDc4Yzg1ZDBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uh3Q_bO_S3nR4llL9_T38xjzBhtUPjUo18pSMsnQ0MQ"
			var account_id = "5c47078bc3a368478c85d0d0"
			//獲取熱門電影
			var urlT =
			  "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=zh-tw&page=1";
			this.$ajax.post(urlT).then(function(data){
				console.log(data.data.results)
			}).catch(function(err){
				console.log(err)
			})

		}
    },
}
</script>
<style scoped>
</style>



