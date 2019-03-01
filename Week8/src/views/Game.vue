<template>
  <div class="game">
    <div class="container">
      <div class="d-flex" style="transform:translate(0,15px)">
        <div class="text-center align-self-end circle d-flex">
          <div>
            <i class="far fa-circle fa-3x" style="color:white;"></i>
          </div>
          <div clsas="text-center">{{circle}}</div>
          <span v-if="step%2 === 0">YOUR TURN!</span>
        </div>
        <div class="text-center vs">VS</div>
        <div class="text-center align-self-end cross d-flex">
          <div clsas="text-center">{{cross}}</div>
          <div>
            <i class="fas fa-times fa-3x" style="color:white;"></i>
          </div>
          <span v-if="step%2 !== 0">YOUR TURN!</span>
        </div>
      </div>
      <transition name="fade" key="process" mode="out-in">
        <div v-if="statu === 'process'" class="d-flex flex-wrap mt-5" key="process">
          <button
            class="space"
            v-for="(item,index)  in dataAry"
            :key="index"
            @click="userInput(index)"
          >
            <i v-if="item === 1" class="fas fa-times fa-2x" style="color:white"></i>
            <i v-if="item === 10" class="far fa-circle fa-2x"></i>
          </button>
        </div>
        <component v-if="statu === 'over'" :is="view" key="over"></component>
      </transition>
      <div class="text-center mt-sm-5 mt-3">
        <a class="btn btn-light restart-game" @click.prevent="restatGame" href="@">RESTART</a>
      </div>
    </div>
  </div>
</template>

<script>
import CircleWin from "./CircleWin.vue";
import CrossWin from "./CrossWin.vue";
import Tie from "./Tie.vue";

let timer = null;

export default {
  data() {
    return {
      dataAry: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      step: 0,
      turn: 0,
      statu: "process",
      circle: 0,
      cross: 0,
      view: ""
    };
  },
  components: {
    CircleWin,
    CrossWin,
    Tie
  },
  methods: {
    userInput(index) {
      if (this.dataAry[index] !== 0) return;
      this.step++;
      this.step % 2 !== 0 ? (this.turn = 10) : (this.turn = 1);
      this.$set(this.dataAry, index, this.turn);
    },
    restatGame() {
      for (let i = 0; i < this.dataAry.length; i++) {
        this.$set(this.dataAry, i, 0);
      }
      this.statu = "process";
      this.step = 0;
    },
    check() {
      return new Promise((resolve, reject) => {
        resolve("over");
        if (!this.winner) return;
        if (this.winner === "circle") {
          this.view = "CircleWin";
          this.circle++;
        } else if (this.winner === "cross") {
          this.view = "CrossWin";
          this.cross++;
        }
        localStorage.setItem(
          "data",
          JSON.stringify([{ circle: this.circle, cross: this.cross }])
        );
        timer = setTimeout(() => {
          this.statu = "over";
        }, 200);
      });
    }
  },
  computed: {
    calcWinner() {
      return [
        this.dataAry[0] + this.dataAry[1] + this.dataAry[2],
        this.dataAry[3] + this.dataAry[4] + this.dataAry[5],
        this.dataAry[6] + this.dataAry[7] + this.dataAry[8],
        this.dataAry[0] + this.dataAry[3] + this.dataAry[6],
        this.dataAry[1] + this.dataAry[4] + this.dataAry[7],
        this.dataAry[2] + this.dataAry[5] + this.dataAry[8],
        this.dataAry[0] + this.dataAry[4] + this.dataAry[8],
        this.dataAry[2] + this.dataAry[4] + this.dataAry[6]
      ];
    },
    winner() {
      let result = "";
      let winner = "";
      result = this.calcWinner.find(item => item === 3 || item === 30);
      if (result === 30) {
        winner = "circle";
      } else if (result === 3) {
        winner = "cross";
      }
      return winner;
    }
  },
  watch: {
    step() {
      if (this.step >= 2 && this.step < 9) {
        this.check();
      }
      if (this.step === 9) {
        this.check().then(res => {
          timer = setTimeout(() => {
            this.statu = res;
            let tempStatu = "";
            tempStatu = this.calcWinner.find(item => item === 3 || item === 30);
            if (tempStatu === 30) {
              this.view = "CircleWin";
            } else if (tempStatu === 3) {
              this.view = "CrosseWin";
            } else {
              this.view = "Tie";
            }
          }, 200);
        });
      }
    }
  },
  mounted() {
    this.circle = JSON.parse(localStorage.getItem("data"))[0].circle;
    this.cross = JSON.parse(localStorage.getItem("data"))[0].cross;
  },
  beforeDestroy() {
    clearTimeout(timer);
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@import "../assets/all.scss";

.game {
  width: 100%;
  height: 100vh;
  background: #ff6d70;
  .circle {
    position: relative;
    flex: 0 0 44%;
    background: white;
    border: 3px solid black;
    height: 60px;
    border-radius: 10px 0 0 10px;
    > div:first-child {
      flex: 0 0 30%;
      background: #ed494c;
      border-right: 3px solid black;
      line-height: 30px;
      border-radius: 7px 0 0 7px;
      > i {
        position: relative;
        top: 3px;
      }
    }
    > div:nth-child(2) {
      flex: 0 0 70%;
      line-height: 50px;
      font-size: 36px;
      font-weight: 700;
    }
    > span {
      position: absolute;
      bottom: -30px;
      color: white;
      font-size: 16px;
    }
  }
  .vs {
    background: black;
    color: white;
    height: 70px;
    flex: 0 0 12%;
    border-radius: 10px 10px 0 0;
    line-height: 80px;
    font-size: 24px;
  }
  .cross {
    position: relative;
    flex: 0 0 44%;
    border: 3px solid black;
    background: white;
    height: 60px;
    border-radius: 0 10px 10px 0;
    > div:nth-child(2) {
      flex: 0 0 30%;
      background: black;
      border-right: 1px solid black;
      > i {
        position: relative;
        top: 3px;
      }
    }
    > div:first-child {
      flex: 0 0 70%;
      line-height: 50px;
      font-size: 36px;
      font-weight: 700;
    }
    > span {
      position: absolute;
      bottom: -30px;
      right: 0px;
      color: white;
      font-size: 16px;
    }
  }
  .space {
    width: 33.3%;
    height: 190px;
    line-height: 220px;
    text-align: center;
    border: 5px solid #ed494c;
    font-size: 50px;
    background: #ff6d70;
    &:first-child,
    &:nth-child(4),
    &:nth-child(7) {
      border-left: 0px;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9) {
      border-right: 0px;
    }
    &:first-child,
    &:nth-child(2),
    &:nth-child(3) {
      border-top: 0px;
    }
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9) {
      border-bottom: 0px;
    }
  }
  .restart-game {
    padding: 20px 30%;
    font-size: 48px;
    color: white;
    background: #ed494c;
    border-color: #ed494c;
    border-radius: 10px;
    font-weight: 600;
  }
}

@media screen and (min-width: 320px) and (max-width: 576px) {
  .game {
    .space {
      height: 120px;
      line-height: 120px;
      i {
        transform: scale(0.8);
      }
    }
    .restart-game {
      padding: 20px 20%;
    }
  }
}

@media screen and (min-width: 100px) and (max-width: 320px) {
  .game {
    .space {
      height: 80px;
      line-height: 80px;
      i {
        position: relative;
        top: -10px;
        transform: scale(0.5);
      }
    }
    .restart-game {
      padding: 5px 8%;
    }
  }
}
</style>

