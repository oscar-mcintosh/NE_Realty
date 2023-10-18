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
                  <!-- <div class="card"> -->
                    <ListingCard :property="property"/>
                  <!-- </div> -->
                </div>
            </div>
        </div>
      </section>


  </div>
</template>

<script setup>
const searchedListing = ref([]);
const searchInput = ref('');
const fetchState = ref({ pending: false });
import { usePropertyStore } from '@/stores/propertyStore';


    const propertyStore = usePropertyStore();

    const getProperty =  propertyStore.getProperty()

        const headers = new Headers({
          'Authorization': 'Bearer patevbkap9GYPDy3X.ddfe0e6d8d2504cc6f8b9aa7603a4969cefe3e644efef2142d541f3e998ad625',
        });

        const config = { headers };


const searchListing = async () => {
  fetchState.value.pending = true;
  const response = await fetch(
        `https://api.airtable.com/v0/appY0bzf2gBIl0j7i/zillow?filterByFormula=ARRAYUNIQUE(${searchInput.value})%3D%3E+%5B1%2C2%2C3%5D`, config

    // `https://api.airtable.com/v0/appY0bzf2gBIl0j7i/zillow/${searchInput.value}`, config
  );
  const data = await response.json();
  console.log(data)
  searchedListing.value = data.results;
  fetchState.value.pending = false;
};
console.log(searchedListing.value)

const clearSearch = () => {
  searchInput.value = '';
  searchedListing.value = [];
};

const fetchMovies = () => {
  if (searchInput.value === '') {
    getMovies();
  } else {
    searchListing();
  }
};

watch(searchInput, () => {
  console.log(searchInput.value);
});

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
