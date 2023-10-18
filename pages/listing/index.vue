<template>
            <div class="swiper-wrapper">
                <Swiper
                    :freeMode="true"

                    :pagination="{
                    clickable: true,
                    }"
                     :navigation= " {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            }"
                    :breakpoints="{
                      '640': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      '768': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      '1024': {
                        slidesPerView: 4,
                        spaceBetween:30,
                      },
                    }"
                    >
                <SwiperSlide class="swiper-slide"
                    v-for="(property, idx) in propertyStore.property"
                    :key="idx"
                    >
                    <ListingCard :property="property" />

                </SwiperSlide>

                <SwiperControls />
                </Swiper>
            </div>

    <div>
        <div class="list-container">
            <div class="left-col">
                <p>200+ Options</p>
                <h2>Recommended Places in</h2>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.list-container{
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.left-col{
    flex-basis: 70%;
}

.right-col{
    flex-basis: 25%;
}

.left-col h1{
    color: #333;
    font-weight: 600;
    margin-bottom: 30px;
}

</style>