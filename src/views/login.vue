<template>
  <div id="login">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24">
        <div id="windo">
          <router-link to="/">
            <img :src="title" id="title" alt="UU電影" />
          </router-link>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="24">
              <div class="subtitle">註冊UU電影 ,訂票就是如此簡單</div>
            </el-col>
          </el-row>
          <transition name="el-zoom-in-center" mode="out-in">
            <div v-show="windowSwitch">
              <el-col :span="24">
                <div class="logintitle">帳號登入</div>
              </el-col>
              <el-form
                :model="loginform"
                style="text-align: center; width:300px; margin:auto;"
              >
                <el-form-item>
                  <el-input
                    v-model="loginform.email"
                    placeholder="帳號"
                    type="email"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    v-model="loginform.pwd"
                    placeholder="密碼"
                    type="password"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    :loading="sta"
                    @click="onLogin"
                    style="width:300px"
                    @keyup.enter.native="onLogin"
                    >登入</el-button
                  >
                </el-form-item>
              </el-form>
              <el-row type="flex" class="windo2" justify="center">
                <div class="miniwindo2">
                  <el-col :span="12">
                    <div style="text-align:right;">還沒有帳號嗎?</div>
                  </el-col>
                  <el-col :span="12">
                    <el-row>
                      <el-col :span="10">
                        <a href="#" class="windo2Text" @click="Switch"
                          >進行註冊</a
                        >
                      </el-col>
                      <el-col :span="3">
                        <p>or</p>
                      </el-col>
                      <el-col :span="10">
                        <router-link to="/" style="text-align:left;"
                          >回首頁</router-link
                        >
                      </el-col>
                    </el-row>
                  </el-col>
                </div>
              </el-row>
            </div>
          </transition>
          <transition name="el-zoom-in-center" mode="out-in">
            <div v-show="windowSwitch === false">
              <el-col :span="24">
                <div class="regsteredTitle">註冊</div>
              </el-col>
              <el-form
                :model="regestered"
                style="text-align: center; width:300px; margin:auto;"
              >
                <el-form-item>
                  <el-input
                    v-model="regestered.email"
                    placeholder="帳號"
                    type="email"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    v-model="regestered.password"
                    placeholder="密碼"
                    type="password"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    v-model="regestered.pwd2"
                    placeholder="請再次輸入密碼"
                    type="password"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <!--修改-->
                  <!--<el-select v-model="regestered.level" placeholder="註冊身份"  style = "width: 300px">
                                        <el-option
                                            v-for="item in cities"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                           >
                                        </el-option>
                  </el-select>-->
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    :loading="false"
                    @click="onRegistered"
                    style="width:300px"
                    @keyup.enter.native="onRegistered"
                    >註冊</el-button
                  >
                </el-form-item>
              </el-form>
              <el-row type="flex" class="regsteredwindow2" justify="center">
                <div class="regsteredarea">
                  <el-col :span="12">
                    <div style="text-align:right;">已經有帳號嗎?</div>
                  </el-col>
                  <el-col :span="12">
                    <a href="#" class="windo2Text" @click="Switch">進行登入</a>
                  </el-col>
                </div>
              </el-row>
            </div>
          </transition>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import "@/assets/style.css";
import title from "@/assets/title.png";
export default {
  data() {
    return {
      loginform: {
        email: "",
        pwd: ""
      },
      regestered: {
        email: "",
        password: "",
        pwd2: "",
        level: ""
      },
      windowSwitch: true,
      sta: false,
      title: title
    };
  },
  created: function() {
    var _this = this;
    document.onkeydown = function(e) {
      let key = window.event.keyCode;
      if (key == 13) {
        if (this.windowSwitch === true) {
          _this.onLogin();
        } else if (this.windowSwitch === false) {
          _this.onRegistered();
        }
      }
    };
  },
  methods: {
    //登入
    onLogin() {
      this.sta = true;
      var self = JSON.stringify(this.loginform);
      const h = this.$createElement;
      this.$ajax
        .post("/chwz/login", self)
        .then(function(response) {
          if (response.data.status !== "loggedin") {
            this.$message({
              message: response.data.err,
              type: "error"
            });
            this.loginform.pwd = "";
            this.sta = false;
          } else {
            this.$message({
              message: h("p", null, [
                h("span", null, "歡迎回來!!! "),
                h("i", { style: "color: teal" }, response.data.username)
              ]),
              type: "success"
            });
            this.sta = false;
          }
        })
        .catch(function(error) {
          console.log(error);
          this.$message({
            message: "請輸入正確的電子郵件",
            type: "error"
          });
        });
    },
    //註冊
    onRegistered() {
      var self = JSON.stringify(this.regestered);
      console.log(self);
      if (this.regestered.email == "") {
        this.$message({
          message: "請輸入電子郵件",
          type: "error"
        });
      } else if (this.regestered.password != this.regestered.pwd2) {
        this.$message({
          message: "請進行密碼確認",
          type: "error"
        });
        this.regestered.password = "";
        this.regestered.pwd2 = "";
      } else if (this.regestered.password == "") {
        this.$message({
          message: "請輸入密碼",
          type: "error"
        });
      } else if (this.regestered.pwd2 == "") {
        this.$message({
          message: "請輸入第二次密碼",
          type: "error"
        });
      } else if (this.regestered.level == "") {
        this.$message({
          message: "請選擇用戶身份",
          type: "error"
        });
      } else {
        console.log("ok");
        /*輸入正確
        this.$ajax("/chwz/register", self)
          .then(function(data) {
            console.log(data);
          })
          .catch(function(error) {
            console.log(error);
          });*/
      }
    },
    //視窗切換
    Switch() {
      if (this.windowSwitch === true) {
        this.windowSwitch = false;
      } else {
        this.windowSwitch = true;
      }
    }
  }
};
</script>
<style scoped>
#login {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: #000 url(../assets/backimg.jpg) center center fixed no-repeat;
  -moz-background-size: cover;
  background-size: cover;
}
.el-zoom-in-center-leave-active {
  transition: opacity 0s;
}
.el-zoom-in-center-enter-active {
  transition: opacity 2s;
}
</style>
