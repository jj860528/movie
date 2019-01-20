<template>
    <div>
		<el-container>
			<el-header>
				<el-row type="flex" class="row-bg">
					<el-col :span="6"><div ><img :src="title" alt="UU電影"></div></el-col>
					<el-col :span="6"><div>
						<el-menu 
						mode="horizontal" 
						:default-active="activeIndex" 
						@select="handmenu" router>
							<el-menu-item index="/">首頁</el-menu-item>
							<el-menu-item index="/movie">電影</el-menu-item>
							<el-menu-item index="/cinema">影院</el-menu-item>
						</el-menu>
					</div></el-col>
					<el-col :span="6"><div ></div></el-col>
				</el-row>			
			</el-header>
			<el-main><router-view/></el-main>
			<el-footer>Footer</el-footer>
		</el-container>	
	</div>
</template>
<script>
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
        }
    },
}
</script>
<style scoped>
a { 
text-decoration: none; 
}
.router-link-active {
    text-decoration: none;
}
</style>



