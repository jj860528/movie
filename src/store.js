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
    fireMovie:all.fireMovie,
    comingList: all.comingListArr,
    playingList: all.playingListArr,
    allMovie:all.playingListArr,
    weeklyList: all.weekingListArr,
    halls:all.halls,
    exhibitions:all.exhibitions
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
    },
    fireMovie(state, movie){
      console.log(movie)
      this.state.fireMovie = movie
    }
  },
  getters: {
  },
  actions: {}
});
