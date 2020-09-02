<template>
  <div class="column">
    <div class="date" :class="{'sunday': isSunday, 'saturday': isSaturday}">
      {{date.format('M/D')}}
      <br>
      {{date.format('ddd')}}
    </div>
    <template v-for="h in timeRange">
      <div class="time" :key="h+'00'"></div>
      <div class="time" :key="h+'30'"></div>
    </template>
  </div>
</template>

<script>
import moment from "moment";
moment.locale('ja', {
  weekdays: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
  weekdaysShort: ["日", "月", "火", "水", "木", "金", "土"],
});
export default {
  name: 'column',
  props: {
    date: {required: true, type: Object}
    // date -> moment object
  },
  computed: {
    timeRange () {
      return this.$store.getters.timeRange;
    },
    isSaturday () {
      return this.date.day() == 6;
    },
    isSunday () {
      return this.date.day() == 0;
    },
  }
}
</script>

<style scoped>
@import "../assets/table-cell.css";

.column{
  display: flex;
  flex-direction: row;
  text-align: center;
}

.date.sunday{
  background-color: #ffc6c6;
}
.date.saturday{
  background-color: #8fe7fd;
}

</style>