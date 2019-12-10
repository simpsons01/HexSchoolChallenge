<template>
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
</template>

<script>
export default {
   props:{
       step:{
           type:Number,
           required:true
       }
   }
}
</script>

<style scoped>
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
</style>