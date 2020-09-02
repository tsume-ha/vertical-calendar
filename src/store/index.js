import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentDate: moment(),
    displayDays: 7,
    timeStart: 9,
    timeEnd: 24,
  },
  getters: {
    timeRange: function (state) {
      let t = state.timeStart;
      let result = [];
      while (t < state.timeEnd) {
        result.push(t);
        t++;
      }
      return result;
    }
  },
  mutations: {
    updateDate (state, newDate) {
      state.currentDate = newDate;
    },
    updateDisplayDays (state, newDiaplayDays) {
      state.displayDays = newDiaplayDays;
    },
  },
  actions: {
  },
  modules: {
  }
})
