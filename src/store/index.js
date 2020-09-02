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
    timeRange: function () {
      let t = this.timeStart;
      let result = [];
      while (t < this.timeEnd) {
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
