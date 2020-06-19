import db from "./firebase.js";
//時間
var TodayTime;
var Tomorrow;
var myDate = new Date();
var month = myDate.getMonth() + 1;
var tomorrowTime = myDate.getDate() + 1;
var day = myDate.getDate();
month = month.toString().length == 1 ? "0" + month : month;
day = day.toString().length == 1 ? "0" + day : day;
tomorrowTime = day.toString().length == 1 ? "0" + day : day;
var result = myDate.getFullYear() + "-" + month + "-" + day; //當前日期
var tom =
  myDate.getFullYear() + "-" + month + "-" + 0 + (parseInt(tomorrowTime) + 1); //明天日期

TodayTime = result;
Tomorrow = tom;

console.log(Tomorrow);
console.log(TodayTime);
//全部電影
var fireMovieRef = db.db.collection("all_movies");
let fireMovie = [];
fireMovieRef.get().then(function(data) {
  if (data.empty) {
    console.log("查無電影");
  } else {
    data.forEach(datamovie => {
      let movie = datamovie.data();
      let cida = movie;
      fireMovie.push(cida);
    });
  }
});
//firebase影院
var docRef = db.db.collection("cinemas");
let Arr = new Array();
//this.cinema = Arr;
//this.$store.commit("fireCinema", Arr);
docRef
  .get()
  .then(function(doc) {
    if (doc.empty) {
      console.log("找不到文件");
    } else {
      doc.forEach(docSnapshot => {
        let cinema = docSnapshot.data();
        let cida = cinema;
        Arr.push(cida);
      });
    }
  })
  .catch(function(error) {
    console.log("提取文件時出錯cinema:", error);
  });
//即將到來
var comingListRef = db.db.collection("moives").doc("now_coming_list");
let comingListArr = new Array();
//this.firecom = comingListArr
//this.$store.commit("fireComing", comingListArr);
comingListRef
  .get()
  .then(function(com) {
    if (com.empty) {
      console.log("找不到文件");
    } else {
      let data = com.data();
      for (let i in data) {
        comingListArr.push(data[i]);
      }
    }
  })
  .catch(function(error) {
    console.log("提取文件時出錯coming:", error);
  });
/*現在播放電影*/
var playingListRef = db.db.collection("moives").doc("now_playing_list");
let playingListArr = new Array();
//this.fireplay = playingListArr
//this.$store.commit("firePlaying", playingListArr);
playingListRef
  .get()
  .then(function(play) {
    if (play.empty) {
      console.log("找不到文件");
    } else {
      let data = play.data();
      for (let i in data) {
        playingListArr.push(data[i]);
      }
    }
  })
  .catch(function(error) {
    console.log("提取文件時出錯playing:", error);
  });

var weekingListRef = db.db.collection("moives").doc("now_weekly_list");
let weekingListArr = [];
//this.fireweek = weekingListArr
//this.$store.commit("fireWeeking", weekingListArr);
weekingListRef
  .get()
  .then(function(week) {
    if (week.empty) {
      console.log("找不到文件");
    } else {
      let data = week.data();
      for (let i in data) {
        weekingListArr.push(data[i]);
      }
    }
  })
  .catch(function(error) {
    console.log("提取文件時出錯weeking:", error);
  });
//今明電影
var todayMovieRef = db.db.collection("exhibitions");
let MovieArr = new Array();
let todayMovie = [];
let exhibitions = [];
todayMovieRef.get().then(function(today) {
  if (today.empty) {
    console.log("404");
  } else {
    today.forEach(data => {
      let today = data.data();
      let da = today;
      MovieArr.push(da);
    });
    for (let i = 0; i < MovieArr.length; i++) {
      if (MovieArr[i].date === String(TodayTime)) {
        let ada = MovieArr[i];
        exhibitions.push(ada);
      } else if (MovieArr[i].date === String(Tomorrow)) {
        let ada = MovieArr[i];
        exhibitions.push(ada);
      }
    }
    console.log(exhibitions);
  }
});
//所有影廳
var hallsRef = db.db.collection("halls");
let halls = [];
hallsRef.get().then(function(data) {
  if (data.empty) {
    console.log("404");
  } else {
    data.forEach(hallsd => {
      let hall = hallsd.data();
      let da = hall;
      halls.push(da);
    });
  }
});

export default {
  fireMovie,
  comingListArr,
  weekingListArr,
  playingListArr,
  Arr,
  halls,
  exhibitions
};
