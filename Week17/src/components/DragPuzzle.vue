<template>
  <div class="drag-puzzle">
    <div v-show="step === 1" class="title">請完成這幅《清明上河圖》</div>
    <div class="content">
      <transition name="silde-fade">
        <div class="puzzle-girds" v-show="step >= 2">
          <div
            v-for="(item, index) in puzzleGrid"
            :key="index"
            :class="'puzzle-item' + (item.x + item.y * 3)"
            draggable="true"
            :data-index="item.x + item.y * 3"
          ></div>
          <div
            v-for="(item, index) in dropList"
            :key="index + 10"
            :data-index="item.index"
            class="drop-list-item"
            draggable="true"
            :style="{
              top: `${item.position.y}px`,
              left: `${item.position.x}px`
            }"
          >
            <img :src="item.src" />
          </div>
        </div>
      </transition>
      <div
        v-for="(item, index) in puzzleList"
        :key="index"
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
    </div>
    <transition name="silde-fade">
      <div class="intro" v-if="step === 3">
        <h1>清院本清明上河圖</h1>
        <h4>陳枚、孫祜、金昆、戴洪、程志道</h4>
        <p>
          宋張澤端（活動於西元十二世紀前期）「清明上河圖」是畫史中寫實風俗畫的一件傑作，
          歷代臨仿者甚多，在故宮即藏有七種不同的本子，其中就屬清院本「清明上河圖」最為
          有名。此卷為乾隆元年（一七三六）由宮廷畫院畫師陳枚、孫祜、金昆、戴洪、程志道等
          五人合繪。
          此卷設色鮮麗，用筆圓熟，界畫橋樑、屋宇及人物皆十分細膩嚴謹，是院畫中
          之極精者。所畫事物甚多，雖失去了宋代古制，但也足以代表明清之際北京風物。
        </p>
      </div>
    </transition>
    <a v-show="step === 1" @click.prevent="startGame" class="trigger"
      >重新排列</a
    >
  </div>
</template>

<script>
import { images } from '../assets/loader'
import { waitHandler, classHandler, dataHandler } from '../../utilities'
import imgMap from '../../img_setting'
export default {
  data() {
    return {
      step: 1,
      puzzleList: [],
      puzzleGrid: [],
      dropList: [],
      dragTarget: null,
      aryIndex: 0
    }
  },
  methods: {
    startGame() {
      let self = this
      this.puzzleList.forEach(item => {
        (item.position.x = 500), (item.position.y = 500)
      })
      this.$('.puzzle-item').each(function(index, el) {
        self.animation(index, el, self, function() {
          self.puzzleList[index].position.x = Math.random() * (1100 - 600) + 600
          self.puzzleList[index].position.y = Math.random() * (550 - 0) + 0
          self.step = 2
          self.animation(index, el, self)
        })
      })
    },
    animation(index, el, self, callback) {
      this.$(el).animate(
        {
          left: `${self.puzzleList[index].position.x}px`,
          top: `${self.puzzleList[index].position.y}px`
        },
        600,
        callback
      )
    },
    async checkFinish(dropItem, index) {
      let targetItem = this.$(`.puzzle-item${index}`)
      if (dropItem.index === index) {
        await classHandler(targetItem, 'correct')
      } else {
        await classHandler(targetItem, 'error')
      }
    },
    isFinish() {
      if (this.dropList.length < 9) return false
      for (let i = 0; i < this.dropList.length; i++) {
        let { x, y } = this.dropList[i].position
        let calcNum = Math.ceil(x / 180) + Math.ceil(y / 180) * 3
        if (calcNum !== this.dropList[i].index) return false
      }
      return true
    },
    bindDragEvent() {
      const self = this
      this.$nextTick(function() {
        self.$('.drop-list-item').each(function(index, el) {
          self.$(el).on({
            dragstart: function(e) {
              self.aryIndex = parseInt(e.currentTarget.dataset.index)
            }
          })
        })
      })
    },
     bindDropEvent() {
      let self = this
      this.$('.puzzle-girds').on({
        dragover(e) {
          e.preventDefault()
        },
        async drop(e) {
          let targetIndex = parseInt(self.$(e.target)[0].dataset.index)
          let { x, y } = self.puzzleGrid[targetIndex]
          x *= 180
          y *= 180
          if (imgMap[`puzzle${self.aryIndex}`]) {
            (y = y + imgMap[`puzzle${self.aryIndex}`].top),
            (x = x + imgMap[`puzzle${self.aryIndex}`].left)
          }
          self.$set(self.puzzleList[self.aryIndex].position, 'x', x)
          self.$set(self.puzzleList[self.aryIndex].position, 'y', y)
          let { setItem, dropItem } = dataHandler(
            self.aryIndex,
            self.puzzleList,
            self.dropList
          )
          if (setItem) {
            setItem.position.x = dropItem.position.x
            setItem.position.y = dropItem.position.y
          } else {
            self.dropList.push(dropItem)
          }
          self.$set(self.puzzleList[self.aryIndex], 'display', false)
          self.bindDragEvent()
          self.checkFinish(dropItem, targetIndex)
          if (self.isFinish()) {
            await classHandler(self.$('.puzzle-girds'), 'correct')
            self.$('.puzzle-girds').css({ left: `${50}%` })
            self.step = 3
          }
        }
      })
    }
  },
  mounted() {
    const self = this
    for (let i = 0; i < 9; i++) {
      this.puzzleList.push({
        src: images[i],
        index: i,
        position: {
          x: Math.random() * (1000 - 200) + 200,
          y: Math.random() * (400 - 150) + 150
        },
        display: true
      })
    }
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        this.puzzleGrid.push({ x: k, y: i, order: k + i * 3 })
      }
    }
    this.$nextTick(function() {
      self.$('.puzzle-item').each(function(index, el) {
        self.$(el).on({
          dragstart: function(e) {
            [self.dragTarget, self.aryIndex] = [el, index]
          }
        })
      })
    })
    this.bindDropEvent()
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

.intro {
  width: 350px;
  color: white;
  left: 15%;
  top: 50%;
  transition: 0.3s all ease-in-out;
  position: absolute;
  transform: translateY(-50%);
  line-height: 1.8;
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
  left: 5%;
  top: 50%;
  transition: 0.6s all ease-in-out;
  position: absolute;
  transform: translateY(-50%);
}

.puzzle-girds > div {
  border: 1px solid white;
  width: 180px;
  height: 180px;
  box-sizing: border-box;
  position: relative;
}
.drop-list-item {
  position: absolute !important;
  width: 180px;
  height: 180px;
  z-index: 10;
  border: none !important;
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

.silde-fade-enter-to,
.silde-fade-leave {
  transform: translate(0, -50%);
  opacity: 1;
}

.silde-fade-enter,
.silde-fade-leave-to {
  transform: translate(100%, -50%);
  opacity: 0;
}

.silde-fade-enter-active,
.silde-fade-leave-active {
  transition: 0.6s all ease-in-out;
}
</style>
