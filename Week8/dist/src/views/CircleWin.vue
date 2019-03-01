<template>
  <div class="mt-5 d-flex justify-content-center result">
    <div class="shape"></div>
    <span
      class="text-center"
      style="font-style:italic;text-stroke:5px white;text-fill-color:transparent;color:#fff"
    >WINNER</span>
  </div>
</template>


<style lang="scss" scoped>
.result {
  margin: 50px 0px;
  height: 570px;
  .shape {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 20px solid #ed494c;
    margin-top: 70px;
  }
  span {
    font-size: 154px;
    position: absolute;
    top: 250px;
    z-index: 2;
  }
}

@media screen and (min-width: 320px) and (max-width: 576px) {
  .result {
    margin: 0px 0px;
    height: 400px;
    .shape {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 20px solid #ed494c;
      margin-top: 70px;
    }
    span {
      font-size: 100px;
      top: 230px;
    }
  }
}

@media screen and (min-width: 100px) and (max-width: 320px) {
  .result {
    margin: 100px 0px;
    height: 200px;
    .shape {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 10px solid #ed494c;
      margin-top: 20px;
    }
    span {
      font-size: 80px;
      font-weight: normal;
      top: 180px;
    }
  }
}
</style>

