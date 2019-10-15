<template>
  <el-row class="booking-level">
    <el-col :md="15" :xs="24" class="booking-level-children">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <img src="../assets/unselected.png">
          <span class="booking-seattext">可選座位</span>
        </el-col>
        <el-col :span="6">
          <img src="../assets/bought.png">
          <span class="booking-seattext">以選座位</span>
        </el-col>
        <el-col :span="6">
          <img src="../assets/selected.png">
          <span class="booking-seattext">不可選座位</span>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="24">
          <div class="booking-screen"></div>
        </el-col>
      </el-row>
      <div class="cinema">
        <!--用2個迴圈循環出影院-->
        <el-row
          v-for="(row) in seatRow"
          :key="row"
          type="flex"
          :gutter="0"
          justify="center"
          ref="row.index"
        >
          <font class="booking-row">{{row}}</font>
          <el-col v-for="(col) in seatCol" :key="col">
            <div class="booking-seat">
              <div v-if="seatArray[row-1][col-1] == 0">
                <img
                  :plain="true"
                  src="../assets/unselected.png"
                  alt
                  @click="clickSeat(row-1,col-1)"
                  class="booking-seatimg"
                >
              </div>
              <div v-else-if="seatArray[row-1][col-1] == 1">
                <img
                  src="../assets/selected.png"
                  alt
                  @click="clickSeat(row-1,col-1)"
                  class="booking-seatimg"
                >
              </div>
              <div v-else-if="seatArray[row-1][col-1] == 2">
                <img
                  src="../assets/bought.png"
                  alt
                  @click="clickSeat(row-1,col-1)"
                  class="booking-seatimg"
                >
              </div>
              <div v-else-if="seatArray[row-1][col-1] == 3"></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-col :span="4"></el-col>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :md="8" :xs="0" class="booking-level-childeren2">
      <div>
        <el-row>
          <el-col :span="12">
            <img
              :src="'https://images.weserv.nl/?url='+movie[0].images.small"
              class="booking-movieTicket-img"
            >
          </el-col>
          <el-col :span="12" class="p-ch">
            <p>{{movie[0].title}}</p>
            <i class="el-icon-star-on">{{movie[0].rating.average}}</i>
            <p>影院：{{cinema.cinema}}</p>
            <p>影廳：{{halls.name}}</p>
            <p>時間: {{exhibitions.time}}</p>
            <p>總價: {{price}}</p>
          </el-col>
          <el-col :span="24" class="booking-seat-area p-ch">
            <p>座位：一次最多選取五個</p>
            <p
              v-for="(currentSeat, index) in currentSeat"
              :key="index"
              class="booking-movieTicket"
            >{{currentSeat.row+1}}列,{{currentSeat.col+1}}座</p>
          </el-col>
          <el-col :span="24" style="border-top: 2px dashed #eee;">
            <el-input v-model="email" placeholder="信箱"></el-input>
            <p style="text-align:right; margin-top:20px;">
              <el-button type="primary" round @click="clickTick">訂票</el-button>
            </p>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import db from "../firebase.js";
export default {
  data() {
    return {
      //當前點選的座位用於顯示
      currentSeat: [],
      //status = 1 是已被選購的座位 2=當前點選的座位 3=走道
      oldArray: [
        { row: 1, col: 1, status: 1 },
        { row: 3, col: 4, status: 1 },
        { row: 0, col: 3, status: 3 },
        { row: 1, col: 3, status: 3 },
        { row: 2, col: 3, status: 3 },
        { row: 3, col: 3, status: 3 },
        { row: 4, col: 3, status: 3 },
        { row: 5, col: 3, status: 3 },
        { row: 6, col: 3, status: 3 },
        { row: 7, col: 3, status: 3 },
        { row: 8, col: 3, status: 3 },
        { row: 9, col: 3, status: 3 }
      ],
      seatArray: [],
      seatRow: 10,
      seatCol: 15,
      value: "",
      movie: "",
      cinema: "",
      halls: [],
      exhibitions: [],
      price: 0,
      email: "",
      time: ""
    };
  },
  created: function() {
    var date = new Date();
    var year = date.getFullYear(); //獲取當前年份
    var mon = date.getMonth() + 1; //獲取當前月份
    var da = date.getDate(); //獲取當前日
    var h = date.getHours(); //獲取小時
    var m = date.getMinutes(); //獲取分鐘

    var time = year + "-" + mon + "-" + da + " " + h + ":" + m;
    this.time = time;
    console.log(time);
    //從store取出電影ID
    let movieID = this.$store.state.movieID;
    let allMovie = this.$store.state.playingList;
    let halls = this.$store.state.halls;
    let Arr = [];
    this.movie = Arr;
    for (let i in allMovie) {
      if (allMovie[i].id === movieID) {
        Arr.push(allMovie[i]);
      }
    }
    //store取出影院
    let cinemaID = this.$store.state.cinemaID;
    let cinema = this.$store.state.cinema;
    for (let i in cinema) {
      if (cinema[i].id === cinemaID) {
        this.cinema = cinema[i];
      }
    }
    console.log(this.cinema);
    for (let i in halls) {
      if (cinemaID === halls[i].cinemaID) {
        this.halls = halls[i];
      }
    }
    //ajax 取出
    let seatRow = this.halls.primaryRow;
    let seatCol = this.halls.primaryCol;
    let oldArray = this.halls.occupied;
    //到這裡
    this.seatRow = seatRow;
    this.seatCol = seatCol;
    let seatArray = Array(seatRow)
      .fill(0)
      .map(() => Array(seatCol).fill(0));
    //把舊座位加進去
    for (let i = 0; i < oldArray.length; i++) {
      let row = oldArray[i].row;
      let col = oldArray[i].col;
      seatArray[row][col] = oldArray[i].status;
    }
    this.seatArray = seatArray;
    let aa = [];
    let exhibitions = this.$store.state.exhibitions;
    for (let i in exhibitions) {
      if (movieID === exhibitions[i].movieID) {
        aa.push(exhibitions[i]);
      }
    }
    console.log(aa);
    for (let i in aa) {
      if (aa[i].cinemaID === cinemaID) {
        this.exhibitions = aa[i];
      }
    }
    console.log(this.exhibitions);
  },
  methods: {
    clickSeat(row, col) {
      console.log(row, col);
      let seatValue = this.seatArray[row][col];
      let newSeat = this.seatArray;
      if (seatValue == 1) {
        return;
      } else if (seatValue == 0) {
        let currentSeat = { row: row, col: col };
        if (this.currentSeat.length < 5) {
          newSeat[row][col] = 2;
          this.currentSeat.push(currentSeat);
        } else {
          this.$message({
            message: "最多只能選5個座位喔",
            type: "error"
          });
          return;
        }
      } else if (seatValue == 2) {
        newSeat[row][col] = 0;
        let Cancel = { row: row, col: col };
        let old = this.currentSeat;
        for (let i = 0; i < old.length; i++) {
          if (old[i].row == Cancel.row && old[i].col == Cancel.col) {
            old.splice(i, 1);
            this.seatArray = old.slice();
          }
        }
      }
      //更新seatArray
      this.seatArray = newSeat.slice();
      this.price = this.currentSeat.length * 230;
    },
    clickTick() {
      let setData = {};
      let orderRef = db.db.collection("orders").doc();
      let ticket = db.db.collection("tickets").doc();
      let ticketsIDs = [];
      for (let i = 0; i < this.currentSeat.length; i++) {
        let tack = {};
        let c = db.db.collection("tickets").doc().id;
        tack["cinemaID"] = this.cinema;
        tack["exhibitionID"] = "exhibition01";
        tack["hallID"] = this.halls.id;
        tack["id"] = c;
        tack["movieID"] = this.$store.state.movieID;
        tack["orderID"] = orderRef.id;
        tack["price"] = 230;
        tack["purchasedEmail"] = this.email;
        tack["ticketCol"] = this.seatCol;
        tack["ticketRow"] = this.seatRow;
        tack["time"] = this.time;
        ticketsIDs.push(c);
        ticket.set(tack);
      }
      setData["exhibitionID"] = "exhibition01";
      setData["purchasedEmail"] = this.email;
      setData["id"] = orderRef.id;
      setData["hallID"] = this.halls.id;
      setData["total_price"] = this.price;
      setData["price"] = 230;
      setData["time"] = this.time;
      setData["ticketsIDs"] = ticketsIDs;
      orderRef.set(setData);
      this.$message({
        message: "訂票成功",
        type: "success"
      });
      return;
      var sendHtml = `<BODY style="MARGIN: 10px">
          <DIV>
            <h1>電影名：${this.movie[0].title}</h1>
            <h2>影院：  ${this.cinema.cinema}</h2>
            <h2>放映廳：${this.halls.name}</h2>
            <h2>座位：${tickets}</h2>
            <h1>總價：${this.price}</h1>
            `;
      Email.send({
        Host: "smtp.yourisp.com",
        Username: "youdiandongxi123465@gmail.com",
        Password: "sdfsdfsdfsdfv",
        To: "jj860528@gmail.com",
        From: "youdiandongxi123465@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
      }).then(message => alert(message));

    }
  },
  watch: {}
};
</script>
<style scoped>
.cinema {
  width: 100%;
  height: 100%;
}
</style>
