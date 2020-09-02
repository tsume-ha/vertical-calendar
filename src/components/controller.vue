<template>
  <div id="conroller" class="row mx-0 my-2 clearfix">
    <div>
      <button
        class="btn btn-secondary"
        @click="updateDisplayDays(-1)">
          列を減らす
      </button>
      <button
        class="btn btn-secondary"
        @click="updateDisplayDays(1)">
          列を増やす
      </button>
    </div>
    <div>
      <button
        class="btn btn-primary"
        @click="move(-displayDays)">
          {{displayDays}}日戻る
      </button>
      <button
        class="btn btn-primary"
        @click="move(-1)">
          1日戻る
      </button>
      <button
        class="btn btn-primary"
        @click="move(1)">
          1日進む
      </button>
      <button
        class="btn btn-primary"
        @click="move(displayDays)">
          {{displayDays}}日進む
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comtroller',
  computed: {
    displayDays () {
      return this.$store.state.displayDays;
    },
    currentDate () {
      return this.$store.state.currentDate;
    }
  },
  methods: {
    move (n) {
      const newDate = this.currentDate.clone().add(n, 'days');
      this.$store.commit('updateDate', newDate);
    },
    updateDisplayDays (n) {
      this.$store.commit('updateDisplayDays', this.displayDays + n);
    }
  }
}
</script>