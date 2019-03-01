<template>
  <div class="mt-5 d-flex justify-content-center result">
    <span
      class="text-center"
      style="font-style:italic;text-stroke:5px white;text-fill-color:transparent;"
    >WINNER</span>
    <div class="cross-bg">
      <div></div>
      <div></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.result {
  margin: 50px 0px;
  height: 570px;
  .cross-bg {
    > div {
      width: 400px;
      height: 40px;
      background: #ed494c;
      &:first-child {
        transform: rotate(140deg);
        position: relative;
        top: 220px;
      }
      &:nth-child(2) {
        transform: rotate(-140deg);
        position: relative;
        top: 185px;
      }
    }
  }
  span {
    font-size: 154px;
    position: absolute;
    top: 200px;
    z-index: 2;
  }
}
@media screen and (min-width: 320px) and (max-width: 576px) {
  .result {
    margin: 0px 0px;
    height: 400px;
    .cross-bg {
      > div {
        width: 300px;
        height: 30px;
        background: #ed494c;
        &:first-child {
          transform: rotate(140deg);
          position: relative;
          top: 190px;
        }
        &:nth-child(2) {
          transform: rotate(-140deg);
          position: relative;
          top: 165px;
        }
      }
    }
    span {
      font-size: 80px;
      top: 250px;
    }
  }
}

@media screen and (min-width: 100px) and (max-width: 320px) {
  .result {
    margin: 80px 0px;
    height: 200px;
    .cross-bg {
      > div {
        width: 300px;
        height: 30px;
        background: #ed494c;
        &:first-child {
          transform: rotate(140deg);
          position: relative;
          top: 110px;
        }
        &:nth-child(2) {
          transform: rotate(-140deg);
          position: relative;
          top: 85px;
        }
      }
    }
    span {
      font-size: 80px;
      font-weight: normal;
      top: 180px;
    }
  }
}
</style>
