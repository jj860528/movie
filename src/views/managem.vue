<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <h1>管理影廳</h1>
    </el-col>
    <el-col :span="5">
      <span>選擇關聯影院</span>
      <el-select v-model="cinemaID" placeholder="請選擇影院關聯">
        <el-option v-for="item in cinema" :key="item.id" :label="item.cinema" :value="item.id"></el-option>
      </el-select>
    </el-col>
    <el-col :span="5">
      <span>選擇影廳</span>
      <el-select v-model="hallsID" placeholder="請選擇影廳關聯" :disabled="disabled">
        <el-option v-for="item in halls" :key="item.id" :label="item.name" :value="item"></el-option>
      </el-select>
    </el-col>
    <el-col :span="24">
      <div class="cinema">
        <h1>點選修改</h1>
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <img src="../assets/unselected.png">
            <span class="booking-seattext">可選座位</span>
          </el-col>
          <el-col :span="6">
            <img src="../assets/bought.png">
            <span class="booking-seattext">走道</span>
          </el-col>
        </el-row>
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
              <div v-else-if="seatArray[row-1][col-1] == 3">
                <img
                  src="../assets/bought.png"
                  alt
                  @click="clickSeat(row-1,col-1)"
                  class="booking-seatimg"
                >
              </div>
            </div>
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
      cinemaID: "",
      cinema: [],
      disabled: true,
      halls: [],
      hallsID: "",
      inputcol: "",
      inputrow: "",
      seatArray: [],
      oldArray: []
    };
  },
  created: function() {
    this.cinema = this.$store.state.cinema;
  },
  methods: {
    clickSeat(row, col) {
        console.log(row, col)
        let seatValue = this.seatArray[row][col];
        let newSeat = this.seatArray;
        if(seatValue == 3){
            let seat = {col:col,row:row,status:0}
            this.seatArray[row][col] = seat.status
            this.seatArray.splice()
            
        }
    }
  },
  watch: {
    cinemaID: function() {
      let All = this.$store.state.halls;
      let cinemaID = this.cinemaID;
      let halls = [];
      this.halls = [];
      this.halls = halls;
      this.disabled = false;
      if (cinemaID !== "") {
        for (let i in All) {
          if (cinemaID === All[i].cinemaID) {
            halls.push(All[i]);
          }
        }
        console.log(this.halls);
      }
    },
    hallsID: function() {
      this.inputcol = this.hallsID.primaryCol;
      this.inputrow = this.hallsID.primaryRow;
      let oldArray = this.hallsID.occupied;
      this.oldArray = oldArray;
      let seatRow = this.inputrow;
      let seatCol = this.inputcol;
      let seatArray = Array(seatRow)
        .fill(0)
        .map(() => Array(seatCol).fill(0));
      for (let i = 0; i < oldArray.length; i++) {
        let row = oldArray[i].row;
        let col = oldArray[i].col;
        seatArray[row][col] = oldArray[i].status;
      }
      this.seatArray = seatArray;
      console.log(seatArray)
    }
  }
};
</script>