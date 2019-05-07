<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <h1>新增影廳</h1>
    </el-col>
    <el-col :span="4">
      <span>幾排座位</span>
      <el-input v-model.number="inputrow" placeholder="請輸入列" :disabled="disabled"></el-input>
    </el-col>
    <el-col :span="4">
      <span>一排幾個</span>
      <el-input v-model.number="inputcol" placeholder="請輸入個" :disabled="disabled"></el-input>
    </el-col>
    <el-col :span="4">
      <span>廳名</span>
      <el-input v-model="name" placeholder="請輸入廳名" :disabled="disabled"></el-input>
    </el-col>
    <el-col :span="4">
      <span>關聯影院</span>
      <el-select v-model="cinemaID" placeholder="請選擇影院關聯" :disabled="disabled">
        <el-option v-for="item in cinema" :key="item.id" :label="item.cinema" :value="item.id"></el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-button type="success" @click="clickCinema">確認</el-button>
    </el-col>
    <el-col :span="16">
      <div class="cinema" v-if="show">
        <!--用2個迴圈循環出影院-->
        <el-row
          v-for="(row,index) in inputrow"
          :key="index"
          type="flex"
          :gutter="1"
          justify="center"
          ref="row.index"
        >
          <font class="booking-row">{{row}}</font>
          <el-col v-for="(col,index) in inputcol" :key="index">
            <div class="booking-seat">
              <div v-if="seatArray[row-1][col-1] ==0">
                <img
                  src="../assets/unselected.png"
                  alt
                  @click="clickSeat(row-1,col-1)"
                  class="booking-seatimg"
                >
              </div>
              <div v-else-if="seatArray[row-1][col-1] == 3"></div>
            </div>
          </el-col>
        </el-row>
        <el-button type="success" @click="setData">儲存</el-button>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import db from "../firebase.js";
export default {
  data() {
    return {
      inputrow: 0,
      inputcol: 0,
      currentSeat: [],
      show: false,
      seatArray: [],
      cinema: [],
      disabled: false,
      cinemaID: "",
      name: ""
    };
  },
  created: function() {
    this.cinema = this.$store.state.cinema;
  },
  methods: {
    clickSeat(row, col) {
      let seatValue = { row: row, col: col, status: 3 };
      this.currentSeat.push(seatValue);
      this.seatArray[row][col] = seatValue.status;
      this.seatArray.splice();
    },
    clickCinema() {
      this.disabled = true;
      this.show = true;
      let seatRow = this.inputrow;
      let seatCol = this.inputcol;
      let seatArray = Array(seatRow)
        .fill(0)
        .map(() => Array(seatCol).fill(0));
      this.seatArray = seatArray;
      this.seatArray.splice();
    },
    setData() {
      let setData = {};
      var firehall = db.db.collection("halls").doc();
      setData["cinemaID"] = this.cinemaID;
      setData["id"] = firehall.id;
      setData["name"] = this.name;
      setData["occupied"] = this.currentSeat;
      setData["primaryCol"] = this.inputcol;
      setData["primaryRow"] = this.inputrow;
      firehall.set(setData, function(err){
          if(err){
              alert('錯誤')
              console.log(err)
          }else{
              console.log('成功')
          }
      });
    }
  },
  watch: {
    inputrow: function() {}
  }
};
</script>