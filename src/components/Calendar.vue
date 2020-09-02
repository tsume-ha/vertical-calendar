<template>
    <div>
        <controller />
        <div id="table" class="row">
            <leftside />
            <carousel />
        </div>
    </div>
</template>

<script>
import controller from '@/components/controller.vue'
import leftside from '@/components/leftside.vue'
import carousel from '@/components/carousel.vue'

export default {
    name: 'Calendar',
    components: {
        controller,
        leftside,
        carousel
    }
}
</script>

<style scoped>
#table{
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
}
#table > div{
  position: relative;
  margin: 0;
  padding: 0;
}
#table > #leftside{
  display: inline-block;
  flex-basis: 40px;
  flex-shrink: 0;
  flex-grow: 0.25;
}
#table > #carousel{
  display: inline-block;
  flex-basis: auto;
  flex-shrink: 1;
  flex-grow: 10;
}
</style>