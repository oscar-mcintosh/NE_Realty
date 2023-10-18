<script setup >
const swiper = useSwiper()
</script>

<template>

    <div @click="swiper.slideNext()" class="swiper-button-next">
        <i class="ri-arrow-right-s-line"></i>
    </div>
    <div @click="swiper.slidePrev()" class="swiper-button-prev">
        <i class="ri-arrow-left-s-line"></i>
    </div>
</template>

<style scoped>
 .swiper-button-prev::after,
 .swiper-button-next::after{
   content: '' !important;
 }
 
 .swiper-button-prev ,
 .swiper-button-next {
     position: absolute !important;
     top: 50% !important;
   /* top: initial !important; */
   /* bottom: 0 !important; */
   /* width: initial;
   height: initial; */
   width: 50px;
   height: 50px;
   background-color: var(--container-color);
   border: 1px solid var(--first-color);
   padding: 6px;
   border-radius: 50%;
   font-size: 1.5rem;
   color: var(--first-color);
   z-index: 100;
 }
 
 .swiper-button-prev{
    left: 25px !important;
 }
 
 .swiper-button-next{
        right: -25px !important;
 }
 


</style>