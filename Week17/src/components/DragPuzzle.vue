<template>
  <div class="drag-puzzle">
    <div v-show="step === 1" class="title">請完成這幅《清明上河圖》</div>
    <div class="content">
      <div class="puzzle-girds" :class="{ 'puzzle-grid-step2': step === 2 }">
        <div
          v-for="(item, index) in puzzleList.length"
          :key="index"
          :class="'puzzle-item' + index"
          draggable="true"
          :data-index="index"
        ></div>
      </div>

      <div
        v-for="(item, index) in puzzleList"
        :key="index"
        class="puzzle-item"
        draggable="true"
        :style="{ top: `${item.position.y}px`, left: `${item.position.x}px` }"
      >
        <img :src="item.src" />
      </div>
    </div>
    <a v-show="step === 1" @click.prevent="startGame" class="trigger"
      >重新排列</a
    >
  </div>
</template>

<script>
import { images } from '../assets/loader'
import { waitHandler, classHandler } from '../../utilities'
let imgMap = {
  puzzle1: {
    top: 0,
    left: -27
  },
  puzzle4: {
    top: -27,
    left: 0
  },
  puzzle5: {
    top: 0,
    left: -27
  },
  puzzle6: {
    top: -27,
    left: 0
  },
  puzzle7: {
    top: 0,
    left: -27
  },
  puzzle8: {
    top: -27,
    left: 0
  }
}
export default {
  data() {
    return {
      step: 1,
      puzzleList: [],
      dropList: null
    }
  },
  methods: {
    startGame() {
      let self = this
      this.puzzleList.forEach(item => {
        (item.position.x = 50), (item.position.y = 50)
      })
      this.$('.puzzle-item').each(function(index, el) {
        self.animation(index, el, self, function() {
          self.step = 2
          self.puzzleList[index].position.x = Math.random() * (90 - 50) + 50
          self.puzzleList[index].position.y = Math.random() * (70 - 10) + 10
          self.animation(index, el, self)
        })
      })
    },
    animation(index, el, self, callback) {
      this.$(el).animate(
        {
          left: `${self.puzzleList[index].position.x}%`,
          top: `${self.puzzleList[index].position.y}%`
        },
        300,
        callback
      )
    },
    async checkFinish(index) {
      let checkPuzzle = this.dropList[index]
      let targetItem = this.$(`.puzzle-item${index}`)
      if (checkPuzzle === index) {
        classHandler(targetItem, 'correct')
      } else {
        classHandler(targetItem, 'error')
      }
    },
    isFinish() {
      for (let i = 0; i < this.puzzleList.length; i++) {
        if (i !== this.dropList[i]) return false
      }
      return true
    }
  },
  mounted() {
    let dragTarget, aryIndex
    const self = this
    self.dropList = new Array(9)
    for (let i = 0; i < 9; i++) {
      this.puzzleList.push({
        src: images[i],
        index: i,
        position: {
          x: Math.random() * (1000 - 200) + 200,
          y: Math.random() * (400 - 200) + 200
        }
      })
    }
    this.$nextTick(function() {
      self.$('.puzzle-item').each(function(index, el) {
        self.$(el).on({
          dragstart: function() {
            [dragTarget, aryIndex] = [el, index]
          }
        })
      })
    })
    self.$('.puzzle-girds').on({
      dragover: function(e) {
        e.preventDefault()
      },
      drop: function(e) {
        let targetIndex = parseInt(self.$(e.target)[0].dataset.index)
        let { top, left } = self.$(e.target).offset()
        if (imgMap[`puzzle${aryIndex}`]) {
          (top = top + imgMap[`puzzle${aryIndex}`].top),
          (left = left + imgMap[`puzzle${aryIndex}`].left)
        }
        self.$set(self.puzzleList[aryIndex].position, 'x', left)
        self.$set(self.puzzleList[aryIndex].position, 'y', top)
        self.dropList[targetIndex] = self.puzzleList[aryIndex].index
        self.checkFinish(targetIndex)
        if (self.isFinish()) console.log('finished')
      }
    })
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  background-image: url("../assets/bg/img-bg-Qingming.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app::before {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  filter: blur(10px);
}

.title {
  text-align: center;
  color: white;
  font-size: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 5%;
}

.trigger {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  color: white;
  font-size: 24px;
  position: absolute;
  border: 1px solid white;
  padding: 5px 30px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
}

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

.puzzle-girds {
  width: 540px;
  height: 540px;
  border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  left: 40%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  z-index: 1;
  transition: 0.3s all ease-in-out;
}

.puzzle-grid-step2 {
  position: absolute;
  opacity: 1;
  z-index: 0;
  left: 5%;
}

.puzzle-girds.puzzle-grid-step2 > div {
  border: 1px solid white;
  width: 180px;
  height: 180px;
  box-sizing: border-box;
  position: relative;
}
.correct {
  animation: correct-light 0.5s 1;
}
@keyframes correct-light {
  0% {
    box-shadow: 0px 0px 0px white;
  }
  50% {
    box-shadow: 0px 0px 40px white;
  }
  100% {
    box-shadow: 0px 0px 0px white;
  }
}
.error {
  animation: error-light 0.5s 1;
}
@keyframes error-light {
  0% {
    box-shadow: 0px 0px 0px red;
  }
  50% {
    box-shadow: 0px 0px 40px red;
  }
  100% {
    box-shadow: 0px 0px 0px red;
  }
}
</style>
