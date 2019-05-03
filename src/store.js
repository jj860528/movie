import all from './Alldata'
import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexPage: "/",
    movieID: "399361",
    cinemaID: "01",
    cinema: all.Arr,
    comingList: all.comingListArr,
    playingList: all.playingListArr,
    allMovie:all.playingListArr,
    weeklyList: all.weekingListArr
  },
  mutations: {
    indexPage(state, page) {
      this.state.indexPage = page;
    },
    movie(state, id) {
      this.state.movieID = id;
    },
    cinema(state, id) {
      this.state.cinemaID = id;
<<<<<<< HEAD
    },
    fireCinema(state, cinema) {
      this.state.cinema = cinema;
    },
    fireComing(state, coming) {
      this.state.comingList = coming
    },
    firePlaying(state, play) {
      this.state.playingList = play
    },
    fireWeeking(state, week) {
      this.state.weeklyList = week
=======
>>>>>>> f57a5daac1a5d77524826fac9a84e2ee30d19940
    }
  },
  getters: {
  },
  actions: {}
});
