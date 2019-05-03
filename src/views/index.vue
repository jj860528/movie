<template>
  <el-container>
    <el-header class="header">
      <el-row type="flex" justify="center" :gutter="24">
        <el-col :xl="16" :md="16" :xs="24">
          <el-row type="flex" justify="space-between" style="text-align : center; ">
            <el-col :xl="4" :md="3" :xs="4">
              <router-link to="/">
                <img :src="title" alt="UU電影" class="logo">
                <img src="../assets/mini-title.png" alt="UU電影" class="logo-mini">
              </router-link>
            </el-col>
            <el-col :xl="16" :md="10" :xs="18">
              <el-menu
                class="menu-header menu"
                mode="horizontal"
                :default-active="activeIndex"
                @select="handmenu"
                router
                style="
										border-style:none;
										margin: 0px 0px 0px 0px;
									"
              >
                <el-menu-item index="/">首頁</el-menu-item>
                <el-menu-item index="/movie">電影</el-menu-item>
                <el-menu-item index="/cinema">影院</el-menu-item>
              </el-menu>
            </el-col>
            <el-col :xl="4" :md="3" :xs="2">
              <router-link to="/login">
                <i class="iconfont user">&#xe6a3;</i>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-main style=" margin:60px 0px 0px 0px;">
      <el-row type="flex" justify="center" :gutter="24">
        <el-col :xl="16" :md="16" :xs="24">
          <transition name="fade">
            <router-view/>
          </transition>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="footer">
      <p class="footer-txt">轉載內容版權歸作者及來源網站所有，本站原創內容轉載請註明來源，商業媒體及紙媒請先聯繫：UUmovie@gmail.com</p>
      <p class="footer-mix">本網站內容享有著作權，禁止侵害，違者必究。 © 2019 UUmovie All Rights Reserved.</p>
    </el-footer>
  </el-container>
</template>
<script>
import "@/assets/style.css";
import title from "@/assets/title.png";
export default {
  data() {
    return {
      activeIndex: "/",
      title: title,
      cinema: new Array(),
    };
  },
  methods: {
    handmenu(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created: function() {
    this.activeIndex = this.$route.path;
  },
  watch: {
    $route(to) {
      this.activeIndex = to.path;
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
