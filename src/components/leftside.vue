<template>
  <div id="calendar-leftside">
    <div class="date"></div>
    <template v-for="h in timeRange">
      <div class="time" :class="h+'00'" :key="h+'00'">
        {{h}}:00
      </div>
      <div class="time" :class="h+'30'" :key="h+'30'"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'leftside',
  computed: {
    timeRange () {
      return this.$store.getters.timeRange;
    }
  }
    
}
</script>

<style scoped>
@import "../assets/table-cell.css";
#calendar-leftside{
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.time{
  font-size: 10px;
  padding: 0 5px;
}
.time:nth-child(2n+1){
  border-top: none;
}
</style>