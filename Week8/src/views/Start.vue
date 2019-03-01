<template>
  <div class="start">
    <div class="container">
      <div class="d-flex flex-wrap">
        <div>
          <span style="color:white;">TIC</span>
        </div>
        <div>
          <i class="far fa-circle fa-6x" style="color:#ED494C"></i>
        </div>
        <div>
          <i
            class="fas fa-times fa-7x"
            style="color:#ED494C;text-stroke:2px white;text-fill-color:transparent;"
          ></i>
        </div>
        <div>
          <i class="fas fa-times fa-7x" style="color:#ED494C;"></i>
        </div>
        <div>
          <span style="color:white;">TAC</span>
        </div>
        <div>
          <i
            class="far fa-circle fa-7x"
            style="color:#FF6D70;text-stroke:3px #FF6D70;text-fill-color:transparent;"
          ></i>
        </div>
        <div>
          <i
            class="far fa-circle fa-7x"
            style="color:#FF6D70;text-stroke:3px #FF6D70;text-fill-color:transparent;"
          ></i>
        </div>
        <div>
          <i class="fas fa-times fa-7x" style="color:#ED494C"></i>
        </div>
        <div>
          <span style="color:white;">TOE</span>
        </div>
      </div>
      <div class="text-center mt-3 mt-sm-0">
        <a class="btn btn-light start-game" @click.prevent="statGame" href="@">START</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    statGame() {
      this.$router.push("./start");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";

.start {
  width: 100%;
  height: 100vh;
  background: black;
  .container {
    > div {
      > div {
        width: 33.3%;
        height: 250px;
        line-height: 319px;
        text-align: center;
        span {
          font-size: 100px;
          font-weight: 700;
        }
        > i {
          position: relative;
          top: 40px;
        }
      }
    }
    .start-game {
      padding: 20px 35%;
      font-size: 48px;
      color: #ff6d70;
      position: relative;
      border-radius: 10px;
      right: -30px;
      font-weight: 600;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 576px) {
  .start {
    .container {
      > div {
        > div {
          width: 33.3%;
          height: 150px;
          line-height: 150px;
          text-align: center;
          span {
            font-size: 70px;
          }
          > i {
            position: relative;
            top: 25px;
            transform: scale(0.7);
          }
        }
      }
      .start-game {
        padding: 10px 20%;
        right: -10px;
      }
    }
  }
}

@media screen and (min-width: 100px) and (max-width: 320px) {
  .start {
    .container {
      > div {
        > div {
          width: 33.3%;
          height: 150px;
          line-height: 150px;
          text-align: center;
          span {
            font-size: 50px;
          }
          > i {
            position: relative;
            top: 20px;
            transform: scale(0.5);
          }
        }
      }
      .start-game {
        padding: 5px 20%;
        right: -10px;
      }
    }
  }
}
</style>
