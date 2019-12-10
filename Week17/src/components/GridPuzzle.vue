<template>
  <div
    class="drop-list-item"
    draggable="true"
    :data-index="item.index"
    :style="{
      top: `${item.position.y}px`,
      left: `${item.position.x}px`
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
      self.$('.drop-list-item').each(function(index, el) {
        self.$(el).on({
          dragstart: function(e) {
            self.$emit('changeIndex',parseInt(e.currentTarget.dataset.index))
          }
        })
      })
    })
  }
}
</script>

<style scoped>
.drop-list-item {
  position: absolute !important;
  width: 180px;
  height: 180px;
  z-index: 10;
  border: none !important;
}
</style>