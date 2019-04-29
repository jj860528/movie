import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexPage: "/",
    movieID: "399361",
    cinemaID: "01",
    cinema: [
      {
        id: "01",
        cinema: "台北信義威秀",
        phone: "(02)8780-5566",
        add: "台北市信義區松壽路16,18號"
      },
      {
        id: "02",
        cinema: "國賓微風影城",
        phone: "(02)8772-1234",
        add: "台北市松山區復興南路一段39號(微風廣場7樓)"
      },
      {
        id: "03",
        cinema: "台北日新威秀",
        phone: "(02)2331-5256",
        add: "台北市萬華區武昌街二段87號"
      },
      {
        id: "04",
        cinema: "東南亞秀泰影城",
        phone: "(02)2367-8999",
        add: "台北市中正區羅斯福路四段136巷3號"
      },
      {
        id: "05",
        cinema: "板橋大遠百威秀影城",
        phone: "(02)7738-6608",
        add: "新北市板橋區新站路28號10樓"
      },
      {
        id: "06",
        cinema: "樹林秀泰影城",
        phone: "(02)-2686-8769",
        add: "新北市樹林區樹新路40-6號"
      },
      {
        id: "07",
        cinema: "台中新光影城",
        phone: "(04)2258-9911",
        add: "台中市西屯區中港路二段111號(新光三越13/14樓)"
      },
      {
        id: "08",
        cinema: "台中大遠百威秀影城",
        phone: "(04)2258-8511",
        add: "台中市西屯區台中港路二段105號13樓"
      },
      {
        id: "09",
        cinema: "台中站前秀泰影城",
        phone: "(04)-2211-7988",
        add: "台中市東區南京路76號"
      },
      {
        id: "10",
        cinema: "時代數位3D影城",
        phone: "(04)2622-2216",
        add: "台中市清水區光復街65號3樓"
      },
      {
        id: "11",
        cinema: "星橋國際影城",
        phone: "(03)468-0100",
        add: "桃園市中壢區中園路二段501號5樓"
      },
      {
        id: "12",
        cinema: "威尼斯影城",
        phone: "(03)280-5018",
        add: "桃園市中壢區九和一街48號3樓之2"
      },
      {
        id: "13",
        cinema: "高雄大遠百威秀影城",
        phone: "(07)334-5566",
        add: "高雄市苓雅區三多四路21號13樓"
      },
      {
        id: "14",
        cinema: "十全電影城",
        phone: "(07)311-7141",
        add: "高雄市三民區十全二路21號(博愛路口)"
      },
      {
        id: "15",
        cinema: "彰化戲院",
        phone: "(04)725-5669",
        add: "彰化縣彰化市中正路二段153號3,4樓"
      }
    ]
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
    }
  },
  actions: {}
});
