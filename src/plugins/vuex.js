import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    loginuser: {
      userid: '',
      username: '',
      key: '',
      reserve: false,
      reserveday: '',
      reservenumber: null
    }
  },
  getters: {
    loginuser: (state => state.loginuser),
    islogin: (state => state.loginuser.key.length > 0 ? true : false),
    username: (state => state.loginuser.username),
    reserve: (state => state.loginuser.reserve),
    reserveday: (state => state.loginuser.reserveday),
    reservenumber: (state => state.loginuser.reservenumber),
    canloaddays: (state => state.loginuser.key.length > 0 && !state.loginuser.reserve ? true : false),
  },
  mutations: {
    setloginuser: ((state, user) => { state.loginuser = user }),
    setreserve: ((state, obj) => {
      state.loginuser.reserve = obj.reserve;
      state.loginuser.reserveday = obj.reserveday;
      state.loginuser.reservenumber = obj.reservenumber;
    })
    // setapipath:((state,path)=>state.apipath=path),        
  }
});

export default store;

