<template>
  <div>
    <el-row>
      <el-col :span="16">
        <el-row type="flex" justify="center" style="margin:25px">
          <el-col :span="6">
            <img src="../assets/unselected.png">
            <span class="seattext">可選座位</span>
          </el-col>
          <el-col :span="6">
            <img src="../assets/bought.png">
            <span class="seattext">以選座位</span>
          </el-col>
          <el-col :span="6">
            <img src="../assets/selected.png">
            <span class="seattext">不可選座位</span>
          </el-col>
        </el-row>
        <el-row type="flex">
          <el-col :span="24">
            <div class="screen"></div>
          </el-col>
        </el-row>
        <div class="cinema">
          <!--用2個迴圈循環出影院-->
          <el-row
            v-for="(row) in seatRow"
            :key="row"
            type="flex"
            :gutter="5"
            justify="center"
            ref="row.index"
          >
            <el-col v-for="(col) in seatCol" :key="col">
              <div class="seat">
                <div v-if="seatArray[row-1][col-1] == 0">
                  <img
                    :plain="true"
                    src="../assets/unselected.png"
                    alt
                    @click="clickSeat(row-1,col-1)"
                    class="seatimg"
                  >
                </div>
                <div v-else-if="seatArray[row-1][col-1] == 1">
                  <img
                    src="../assets/selected.png"
                    alt
                    @click="clickSeat(row-1,col-1)"
                    class="seatimg"
                  >
                </div>
                <div v-else-if="seatArray[row-1][col-1] == 2">
                  <img
                    src="../assets/bought.png"
                    alt
                    @click="clickSeat(row-1,col-1)"
                    class="seatimg"
                  >
                </div>
                <div v-else-if="seatArray[row-1][col-1] == 3"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8" class="booking-select">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>
<script>
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
      seatCol: 20,
      value: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  created: function() {
    //從store取出電影ID
    let movieID = this.$store.state.movieID;
    let TMDBmovie =
      "https://api.themoviedb.org/3/movie/" +
      movieID +
      "?api_key=" +
      this.apiKey +
      "&language=zh";
    console.log(TMDBmovie);
    this.$ajax
      .get(TMDBmovie)
      .then(data => {
        console.log(data.data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(movieID);
    //ajax 取出
    let seatRow = 10;
    let seatCol = 14;
    let oldArray = this.oldArray;
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
    console.log(this.seatArray);
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
    }
  }
};
</script>
<style scoped>
.booking-select {
  background-color: rgb(38, 82, 184);
  margin: 25px 0 0 0;
}
.seattext {
  display: inline-block;
  height: 100%;
  line-height: 35px;
  font-size: 14px;
  position: relative;
  left: 5px;
  bottom: 15px;
}
.screen {
  width: 80%;
  height: 200px;
  margin: 20px auto 50px;
  background-color: #f6f6f6;
  color: #636363;
  border: 1px solid #b1b1b1;
}
.cinema {
  width: 100%;
  height: 100%;
}
.seat {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
