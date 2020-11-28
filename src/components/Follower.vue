<template>
  <div
    ref="follower"
    class="follower"
    :style="[{ top: (position.y - 24) + 'px' }, { left: (position.x - 24) + 'px' }]">
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: 'Follower',
  props: {
    position: {
      type: Object,
      default: () => ({
        x: 0,
        y: 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
