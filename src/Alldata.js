import db from "./firebase.js";
//firebase影院
var docRef = db.db.collection("theaters");
let Arr = new Array();
//this.cinema = Arr;
//this.$store.commit("fireCinema", Arr);
docRef
    .get()
    .then(function (doc) {
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
    .catch(function (error) {
        console.log("提取文件時出錯cinema:", error);
    });
//即將到來
var comingListRef = db.db.collection("moives").doc("now_coming_list");
let comingListArr = new Array();
//this.firecom = comingListArr
//this.$store.commit("fireComing", comingListArr);
comingListRef
    .get()
    .then(function (com) {
        if (com.empty) {
            console.log("找不到文件");
        } else {
            let data = com.data()
            for (let i in data) {
                comingListArr.push(data[i]);
            }
        }
    }).catch(function (error) {
        console.log("提取文件時出錯coming:", error);
    });
/*現在播放電影*/
var playingListRef = db.db.collection("moives").doc("now_playing_list");
let playingListArr = new Array();
//this.fireplay = playingListArr
//this.$store.commit("firePlaying", playingListArr);
playingListRef
    .get()
    .then(function (play) {
        if (play.empty) {
            console.log("找不到文件");
        } else {
            let data = play.data()
            for (let i in data) {
                playingListArr.push(data[i]);
            }
        }
    })
    .catch(function (error) {
        console.log("提取文件時出錯playing:", error);
    });

var weekingListRef = db.db.collection("moives").doc("now_weekly_list");
let weekingListArr = new Array();
//this.fireweek = weekingListArr
//this.$store.commit("fireWeeking", weekingListArr);
weekingListRef
    .get()
    .then(function (week) {
        if (week.empty) {
            console.log("找不到文件");
        } else {
            let data = week.data()
            for (let i in data) {
                weekingListArr.push(data[i]);
            }
        }
    })
    .catch(function (error) {
        console.log("提取文件時出錯weeking:", error);
    });
export default {comingListArr,weekingListArr,playingListArr,Arr}