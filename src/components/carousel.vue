<template>
  <div id="carousel">
    <column
      v-for="date in dateList"
      :key="date.format('YYYY-MM-DD')"
      :date="date"
      :style="[columnStyle, isTransition]"
    />

  </div>
</template>

<script>
import moment from 'moment';
import column from './column.vue';
export default {
  name: 'carousel',
  components: {
    column
  },
  data: function () {
    return {
      startX: null,
      diffX: 0,
      currentNum: 0,
      isAnimating: true,
      hoge: moment('2020-09-02')
    }
  },
  computed: {
    timeRange () {
      return this.$store.getters.timeRange;
    },
    displayDays () {
      return this.$store.state.displayDays;
    },
    currentDate () {
      return this.$store.state.currentDate;
    },
    dateList: function () {
      let i = -this.displayDays;
      let result = [];
      while (i < this.displayDays * 2) {
        result.push(this.currentDate.clone().add(i, 'days'));
        i++;
      }
      return result;
    },
    columnStyle: function () {
      return {
        width: 100 / this.displayDays + '%',
        transform: `
          translate3d(${this.diffX}px, 0, 0)
          translate3d(${this.currentNum * (-100)}%, 0, 0)`
      }
    },
    isTransition: function () {
      if (this.isAnimating) {
        return {transition: 'all 0.2s ease-out'}
      } else {
        return {transition: 'none'}
      }
    }
  },
  created: function () {
    // 前後に用意してある分ずらす
    this.currentNum = this.displayDays;
  },
}
</script>

<style scoped>
#carousel{
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-size: 0;/* inline-blockのとき隙間が空くので指定 */
}
#carousel .column{
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 16px;/* 親要素に0をしていしたので戻す */
  border-right: 1px solid #eee;
}
</style>