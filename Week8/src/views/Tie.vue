<template>
  <div class="mt-5 d-flex justify-content-center result">
    <div class="cross-bg">
      <div></div>
      <div></div>
    </div>
    <div class="shape"></div>
    <span
      class="text-center"
      style="font-style:italic;text-stroke:5px white;text-fill-color:transparent;"
    >DRAW</span>
    <span
      class="text-center"
      style="font-style:italic;text-stroke:5px white;text-fill-color:transparent;"
    >DRAW</span>
    <span
      class="text-center"
      style="font-style:italic;text-stroke:5px white;text-fill-color:transparent;"
    >DRAW</span>
  </div>
</template>


<style lang="scss" scoped>
.result {
  margin: 50px 0px;
  height: 570px;
  .shape {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 20px solid #ed494c;
    margin-top: 200px;
  }
  .cross-bg {
    > div {
      width: 250px;
      height: 30px;
      background: #ed494c;
      &:first-child {
        transform: rotate(140deg);
        position: relative;
        top: 280px;
      }
      &:nth-child(2) {
        transform: rotate(-140deg);
        position: relative;
        top: 245px;
      }
    }
  }
  span {
    font-size: 154px;
    position: absolute;
    z-index: 2;
    &:nth-child(3) {
      top: 100px;
    }
    &:nth-child(4) {
      top: 300px;
    }
    &:nth-child(5) {
      top: 500px;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 576px) {
  .result {
    margin: 0px 0px;
    height: 400px;
    .shape {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 20px solid #ed494c;
      margin-top: 120px;
    }
    .cross-bg {
      > div {
        width: 200px;
        height: 30px;
        background: #ed494c;
        &:first-child {
          transform: rotate(140deg);
          position: relative;
          top: 200px;
        }
        &:nth-child(2) {
          transform: rotate(-140deg);
          position: relative;
          top: 165px;
        }
      }
    }
    span {
      font-size: 100px;
      position: absolute;
      top: 200px;
      z-index: 2;
      &:nth-child(3) {
        top: 100px;
      }
      &:nth-child(4) {
        top: 240px;
      }
      &:nth-child(5) {
        top: 380px;
      }
    }
  }
}

@media screen and (min-width: 100px) and (max-width: 320px) {
  .result {
    margin: 0px 0px;
    height: 300px;
    .shape {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 20px solid #ed494c;
      margin-top: 100px;
    }
    .cross-bg {
      > div {
        width: 100px;
        height: 20px;
        background: #ed494c;
        &:first-child {
          transform: rotate(140deg);
          position: relative;
          top: 140px;
        }
        &:nth-child(2) {
          transform: rotate(-140deg);
          position: relative;
          top: 120px;
        }
      }
    }
    span {
      font-size: 60px;
      position: absolute;
      top: 200px;
      z-index: 2;
      &:nth-child(3) {
        top: 100px;
      }
      &:nth-child(4) {
        top: 200px;
      }
      &:nth-child(5) {
        top: 300px;
      }
    }
  }
}
</style>
