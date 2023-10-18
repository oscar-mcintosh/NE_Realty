<template>

    <div class="card">
        <NuxtLink :to="`/property/${property.id}`">
            <div class="img-block">
                <div class="overlay"></div>
                <figure>
                    <img :src="property.image" alt="" class="img-fluid">
                </figure>
                <div class="rate-info">
                    <h5>${{ property.price }}</h5>
                    <span>For {{ property.status }}</span>
                </div>
            </div>
            <div class="card-body">
                <a href="24_Property_Single.html" title="">
                    <h3>{{ property.type }}</h3>
                    <p><i class="ri-map-pin-line"></i>{{ property.street }}, {{ property.city }}, {{ property.state }}, {{ property.zipcode }}</p>
                </a>
                <ul>
                    <li>{{ property.baths }} Bathrooms</li>
                    <li>{{ property.beds }} Beds</li>
                    <li>{{ property.sqft }} Sq Ft</li>
                </ul>
            </div>
            <div class="card-footer">
                <a href="#" class="pull-left">
                    <i class="la la-heart-o"></i>
                </a>
                <a href="#" class="pull-right">
                    <i class="la la-calendar-check-o"></i> 25 Days Ago</a>
            </div>
        </NuxtLink>
    </div>

</template>

<script setup>
const { property } = defineProps(['property'])

</script>

<style >
.house{
    width: 350px;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 30px;
}

.card figure {
    margin-bottom: 0;
    overflow: hidden;
    position: relative;
    height: 210px;
}

.card .img-block {
    position: relative;
    z-index: 1;
    float: left;
    width: 100%;
}

.card:hover .img-block:before .card:hover:before, .card:hover:after {
    opacity: 1;
    visibility: visible;
    width: 0;
}

.card .img-block:before, .card .img-block:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(106, 123, 231, 0.8);
    opacity: 0;
    visibility: hidden;
}

.card .img-block .overlay, .srch-btn .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(106, 123, 231, 0.8);
    opacity: 0;
}

.img-fluid {
    max-width: 100%;
    height: auto;
} 

.rate-info {
    float: left;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 40px 23px 20px 23px;
    z-index: 2;
}
.rate-info:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(255,255,255,0.02),rgba(44,44,47,47));
    z-index: -1;
}

.card .img-block h5, .map-box .rate-info > h5 {
    margin: 0px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    float: left;
    position: relative;
    top: 5px;
}

.card .img-block span, .map-box .rate-info > span {
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    background: rgba(106, 123, 231, 0.7);
    border-radius: 50px;
    padding: 5px 13px;
    float: right;
    margin-right: 24px;
    margin-top: 2px;
}

.card .card-body {
    padding: 21px 23px 0;
}

.card .card-body h3 {
    font-size: 18px;
    margin: 5px 0;
    color: #6a7be7;
    text-transform: capitalize;
    /* color: #242526; */
}

.card .card-body p {
    font-size: 12px;
    color: #aeb4b6;
    font-weight: var(--font-semi-bold);
    margin-bottom: 16px;
    float: left;
    width: 100%;
}

.card .card-body p i {
    margin-right: 4px;
    font-size: 14px;
    margin-left: 0;
    position: relative;
    color: #242526;
    top: 2px;
}

.card .card-body ul {
    border-bottom: 1px solid #ddd;
    padding-bottom: 16px;
}

.card .card-body ul li:first-child {
    padding-left: 0px;
}

.card .card-body ul li {
    display: inline-block;
    font-size: 12px;
    color: #242526;
    line-height: 11px;
    border-right: 1px solid #ddd;
    padding: 0px 17px 0px 17px;
    margin-right: -3px;
}

.card .card-footer {
    background: transparent;
    border-top: 0px;
    display: flex;
    padding: 14px 20px 17px 20px;
}

.card .card-footer a {
    color: #aeb4b6;
    font-size: 12px;
    position: relative;
}

</style>