<template>
<!-- <NavFilter /> -->
  <div>
    <div class="carousel-container">
      <div class="container">
        <NavFilter />
      </div>
    </div>
      <section class="rooms">
        <div class="container top">
          <div class="heading">
            <h2>Nebraska real estate & homes for sale</h2>
          </div>
            <div class="content grid grid-3">
                <div  v-for="property in propertyStore.property"
                            :key="property.id">
                    <ListingCard :property="property"/>
                </div>
            </div>
        </div>
      </section>


  </div>
</template>

<script setup>
import { usePropertyStore } from '@/stores/propertyStore';


    const propertyStore = usePropertyStore();

    const getProperty =  propertyStore.getProperty()



</script>

<style scoped>
 .carousel-container {
    position: relative;
    width: 100%;
    height: 650px;
    padding: 20px 0;
    background: url('~/assets/images/realty_hero.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;

    /* overflow-x: hidden; */
    margin-top: 80px;
 }

 .carousel-container::before{
   content:'';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: hsl(220, 24%, 15%, .5);
 }


.grid{
  display: grid;
}

.grid-3{
  gap: 36px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
}
.grid-item {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.07);
    transition: 0.3s ease;
    background-color: #24481f;
    width: 263px;
    margin-bottom: 30px;
    overflow: hidden;
}

.heading{
  margin-bottom: 40px;
}


/* .swiper {
  width: 100%;
  height: 100%;
} */

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* .swiper-slide {
  width: 80%;
}

.swiper-slide:nth-child(2n) {
  width: 60%;
}

.swiper-slide:nth-child(3n) {
  width: 40%;
} */
</style>
