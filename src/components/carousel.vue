<template>
  <div id="carousel">
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />
    <column :date="hoge" :style="[columnStyle]" />

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
    columnStyle: function () {
      return {
        width: 100 / this.displayDays + '%',
        transform: `
          translate3d(${this.diffX}px, 0, 0)
          translate3d(${this.currentNum * (-100)}%, 0, 0)`
      }
    },
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