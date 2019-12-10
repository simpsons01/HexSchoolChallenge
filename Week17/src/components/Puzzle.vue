<template>
  <div
    class="puzzle-item"
    draggable="true"
    :style="{
      top: `${item.position.y}px`,
      left: `${item.position.x}px`,
      display: `${item.display ? 'block' : 'none'}`
    }"
  >
    <img :src="item.src" />
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type:Object,
      required:true
    },
  },
  mounted() {
    const self = this
    this.$nextTick(function() {
      self.$('.puzzle-item').each(function(index, el) {
        self.$(el).on({
          dragstart: function(e) {
            console.log(index)
            self.$emit('changeIndex',index)
          }
        })
      })
    })
  }
}
</script>

<style scoped>
.puzzle-item {
  width: 180px;
  height: 180px;
  position: absolute;
}

.puzzle-item > img {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
