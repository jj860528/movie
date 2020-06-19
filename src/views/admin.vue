<template>
  <el-container>
    <el-header class="header">
      <el-row type="flex" justify="center" :gutter="24">
        <el-col :xl="16" :md="16" :xs="24">
          <el-row
            type="flex"
            justify="space-between"
            style="text-align : center; "
          >
            <el-col :xl="4" :md="3" :xs="4">
              <router-link to="/">
                <img :src="title" alt="UU電影" class="logo" />
                <img
                  src="../assets/mini-title.png"
                  alt="UU電影"
                  class="logo-mini"
                />
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
				margin: 0px 0px 0px 0px;"
              >
                <el-menu-item index="/chseat">新增影廳</el-menu-item>
                <el-menu-item index="/managem">管理影廳</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-main style=" margin:60px 0px 0px 0px;">
      <el-row type="flex" justify="center" :gutter="24">
        <el-col :xl="16" :md="16" :xs="24">
          <transition name="fade">
            <router-view />
          </transition>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import "@/assets/style.css";
import title from "@/assets/title.png";
export default {
  data() {
    return {
      activeIndex: "/",
      fireMovie: [],
      title: title
    };
  },
  created: function() {
    this.fireMovie = this.$store.state.fireMovie;
  },
  methods: {
    handmenu(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.fireMovie);
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
