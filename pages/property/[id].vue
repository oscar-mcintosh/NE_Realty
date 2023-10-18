<template>
    <div >

                     <NuxtLink to="/">Home </NuxtLink>

                <section class="property-single-pg" v-if="property">

                    <div class="container">
                        <div class="property-hd-sec">
                            <div class="card">
                                <div class="card-body">
                                    <a href="#">
                                        <h3>{{ property.type }}</h3>
                                        <p><i class="ri-map-pin-line"></i>{{ property.street }}, {{ property.city }}</p>
                                    </a>
                                    <ul>
                                        <li>{{ property.baths }} Bathrooms</li>
                                        <li>{{ property.beds }} Beds</li>
                                        <li>{{ property.sqft }} Sq Ft</li>
                                    </ul>
                                </div><!--card-body end-->
                                <div class="rate-info">
                                    <h5>$ {{ property.price }}</h5>
                                    <span>For {{ property.status }}</span>
                                </div><!--rate-info end-->
                            </div><!--card end-->
                        </div>
                        <div class="property-hd-sec">
                            <div class="property-single-page-content">
                                <div class="row">
                                    <div class="col-lg-8 pl-0 pr-0">
                                        <div class="property-main-img">
                                            <div class="property-img">
                                                <img :src="property.image" alt="" class="img-fluid">

                                            </div><!--property-img end-->
                                        </div>
                                        <div class="descp-text">
                                            <h3>Description</h3>
                                            <p>{{ property.description }}</p>
                                        </div><!--descp-text end-->
                                        <div class="details-info">
                                            <h3>Detail</h3>
                                            <ul>
                                                <li>
                                                    <h4>Construction Tyoe:</h4>
                                                    <span>{{ property.type }}</span>
                                                </li>
                                                <li>
                                                    <h4>Year Built:</h4>
                                                    <span>{{ property.built }}</span>
                                                </li>
                                                <li>
                                                    <h4>Units in Building: </h4>
                                                    <span>87</span>
                                                </li>
                                                <li>
                                                    <h4>Bathrooms:</h4>
                                                    <span>{{ property.baths }}</span>
                                                </li>
                                                <li>
                                                    <h4>Badrooms:</h4>
                                                    <span>{{ property.beds }}</span>
                                                </li>
                                                <li>
                                                    <h4>Flooring:</h4>
                                                    <span>{{ property.sqft }} Sq Ft</span>
                                                </li>
                                                <li>
                                                    <h4>Amenities:</h4>
                                                    <span>Elevator</span>
                                                </li>
                                                <li>
                                                    <h4>Cooling:</h4>
                                                    <span>Central Cooling</span>
                                                </li>
                                                <li>
                                                    <h4>Other Features:</h4>
                                                    <span>Fireplace</span>
                                                </li>
                                            </ul>
                                        </div><!--details-info end-->
                                        <div class="features-dv">
                                            <h3>Features</h3>
                                            <form class="form_field">
                                                <ul>
                                                    <li class="input-field">
                                                        <input type="checkbox" name="cc" id="c1">
                                                        <label for="c1">
                                                            <span></span>
                                                            <small>Parking</small>
                                                        </label>
                                                    </li>
                                                    <li class="input-field">
                                                        <input type="checkbox" name="cc" id="c2" checked>
                                                        <label for="c2">
                                                            <span></span>
                                                            <small>Gym</small>
                                                        </label>
                                                    </li>
                                                    <li class="input-field">
                                                        <input type="checkbox" name="cc" id="c3">
                                                        <label for="c3">
                                                            <span></span>
                                                            <small>Heating</small>
                                                        </label>
                                                    </li>
                                                    <li class="input-field">
                                                        <input type="checkbox" name="cc" id="c4" checked>
                                                        <label for="c4">
                                                            <span></span>
                                                            <small>Air Conditioner</small>
                                                        </label>
                                                    </li>
                                                    <li class="input-field">
                                                        <input type="checkbox" name="cc" id="c5" checked>
                                                        <label for="c5">
                                                            <span></span>
                                                            <small>Wireless Internet</small>
                                                        </label>
                                                    </li>
                                                    <li class="input-field">
                                                        <input type="checkbox" name="cc" id="c6">
                                                        <label for="c6">
                                                            <span></span>
                                                            <small>Swimming Pool</small>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div><!--features-dv end-->
                                    </div>
                                    <!---property-hd-sec end-->

                                    <div class="col-lg-4 pr-0">

                                        <div class="sidebar layout2">
                                            <div class="widget widget-form">
                                                <h3 class="widget-title">Contact Listing Agent</h3>
                                                <div class="contct-info">
                                                    <img src="https://via.placeholder.com/81x74" alt="">
                                                    <div class="contct-nf">
                                                        <h3>Tomas Wilkinson</h3>
                                                        <h4>Douglas and Eleman Agency</h4>
                                                        <span><i class="la la-phone"></i>+1 212-925-3797</span>
                                                    </div>
                                                </div><!--contct-info end-->
                                                <div class="post-comment-sec">
                                                    <form>
                                                        <div class="form-field">
                                                            <input type="text" name="name" placeholder="Your Name">
                                                        </div><!--form-field end-->
                                                        <div class="form-field">
                                                            <input type="text" name="email" placeholder="Your Email">
                                                        </div><!--form-field end-->
                                                        <div class="form-field">
                                                            <input type="text" name="phone" placeholder="Your Phone">
                                                        </div><!--form-field end-->
                                                        <div class="form-field">
                                                            <textarea name="message" placeholder="Your Message"></textarea>
                                                        </div><!--form-field end-->
                                                        <button type="submit" class="btn2">Contact</button>
                                                    </form>
                                                </div><!--post-comment-sec end-->
                                            </div><!--widget-form end-->
                                            <div class="widget">
                                                <MrtgCalc />
                                            </div><!--widget-calculator end-->
                                        </div><!--sidebar end-->
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </section>
        


        
        <span v-else>Loading...</span>

    </div>
</template>

<script setup>
        const { id } = useRoute().params
        const { public: { apiKey, apiUrl } } = useRuntimeConfig();

        const headers = new Headers({
          'Authorization': `Bearer ${apiKey}`,
        });

        const config = { headers };


        const fetchData = async () => {
        try {
            const response = await fetch(apiUrl + id, config);
            const data = await response.json();
            console.log(data)
            const property = {
                id: data.id,
                name: data.fields.Name,
                street: data.fields.street,
                state: data.fields.state,
                zipcode: data.fields.zipcode,
                sqft: data.fields.sqft,
                image: data.fields.photos1,
                price: data.fields.price,
                baths: data.fields.baths,
                type: data.fields.type,
                beds: data.fields.beds,
                city: data.fields.city,
                status: data.fields.status,
                built: data.fields.built,


                description: data.fields.description
            };
            return property;
            } catch (error) {
                console.error('Error fetching data:', error);
                return null; 
            }
        };

        const property = ref(null); 
        fetchData().then((result) => {
        property.value = result;
        });




        definePageMeta({
            layout: "property"
        })


</script>

<style scoped>
.section {
    position: relative;
    width: 100%;
    display: block;
}

.big-55-height {
    height: 55vh;
}

.property-hd-sec {
    float: left;
    width: 100%;
}

.property-hd-sec .card {
    float: left;
    width: 100%;
    border: 0;
    display: block;
    background: transparent;
}

.property-hd-sec .card-body {
    float: left;
    width: 50%;
    border: 0;
    padding: 0;
    margin-top: 2px;
}

.property-hd-sec .rate-info {
    position: relative;
    float: right;
    width: 50%;
    padding: 0;
    position: static;
    text-align: right;
}

.property-hd-sec .rate-info:before {
    background-image: none;
}


.property-hd-sec .rate-info > h5 {
    display: inline-block;
    color: #242526;
    font-size: 24px;
    font-weight: 500;
    margin-right: 22px;
    position: relative;
    top: 4px;
}

.property-hd-sec .rate-info > span {
    display: inline-block;
    color: #242526;
    font-size: 12px;
    background-color: #efeff3;
    height: 25px;
    border-radius: 30px;
    padding: 0 14px;
    line-height: 25px;
    text-transform: uppercase;
}

.descp-text {
    float: left;
    width: 100%;
    border: 1px solid #e0e1e6;
    padding: 23px 30px 20px 30px;
    margin-bottom: 35px;
}

.property-pg-left h3 {
    color: #242526;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 16px;
    letter-spacing: 1px;
}

.descp-text > p {
    color: #67686c;
    font-size: 14px;
    line-height: 30px;
    margin-top: -2px;
}

.details-info {
    float: left;
    width: 100%;
    padding: 23px 30px 23px 30px;
    background-color: #f5f6fa;
    border: 1px solid #dfe0e5;
    margin-bottom: 35px;
}

.details-info ul {
    float: left;
    width: 100%;
    margin-top: 2px;
    margin-bottom: -14px;
}

.details-info ul li {
    float: left;
    width: 33%;
    margin-bottom: 15px;
}

.details-info ul li h4 {
    color: #242526;
    font-size: 14px;
    display: inline-block;
}

.details-info ul li span {
    display: inline-block;
    color: #67686c;
    font-size: 14px;
    padding-left: 5px;
}

.features-dv {
    float: left;
    width: 100%;
    border: 1px solid #e1e2e7;
    padding: 23px 30px 32px 30px;
    margin-bottom: 35px;
}

.features-dv > form {
    float: left;
    width: 100%;
}

.features-dv form ul {
    float: left;
    width: 100%;
    margin-top: 7px;
    margin-bottom: -14px;
}

.features-dv form ul li {
    float: left;
    width: 33.33%;
    margin-bottom: 12px;
}

.features-dv form ul li input[type="checkbox"] {
    display: none;
    cursor: text;
}

.input-field > label {
    float: left;
    cursor: pointer;
}

.features-dv .input-field input[type="checkbox"] + label span {
    border-color: transparent;
    cursor: inherit;
}

.property-single-page-content .sidebar {
    padding-left: 25px;
}
.widget-title {
    color: #242526;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.contct-info img {
    float: left;
    display: table-cell;
}

.contct-nf {
    display: table-cell;
    width: 100%;
    vertical-align: top;
    padding-left: 23px;
}

.contct-nf > h3 {
    color: #242526;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: -3px;
    margin-bottom: 1px;
}

.contct-nf > h4 {
    color: #aeb4b6;
    font-size: 12px;
    margin-bottom: 13px;
}

.contct-nf > span {
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
}

.contct-nf > span i {
    font-size: 16px;
    padding-right: 7px;
}

.post-comment-sec {
    float: left;
    width: 100%;
    margin-top: 22px;
}

.post-comment-sec > form {
    float: left;
    width: 100%;
}

.form-field {
    float: left;
    width: 100%;
    margin-bottom: 15px;
}

.post-comment-sec form input, .post-comment-sec form textarea {
    width: 100%;
    color: #67686c;
    font-size: 12px;
    font-weight: 400;
    border: 1px solid #dfe0e5;
}

.post-comment-sec form input {
    height: 48px;
    padding: 0 17px;
}

.post-comment-sec form textarea {
    height: 124px;
    padding: 14px 17px;
}

.btn2 {
    float: left;
    width: 100%;
    color: #ffffff;
    font-size: 14px;
    height: 51px;
    line-height: 51px;
    border-radius: 30px;
    text-align: center;
    border: 0;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
    background-color: #6a7be7;

}

.widget-calculator{
    margin-top: 20px;
}

.widget-calculator ul li {
    float: left;
    width: 100%;
    border: 1px solid #dfe0e5;
    line-height: 48px;
    height: 48px;
    margin-bottom: 16px;
    position: relative;
}

.widget-calculator ul li i {
    font-size: 16px;
    color: #67686c;
    width: 49px;
    text-align: center;
    border-right: 1px solid #dfe0e5;
    line-height: 46px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
}

.widget-calculator ul li input {
    float: left;
    color: #67686c;
    font-size: 12px;
    padding-left: 16px;
    height: 100%;
    margin: 0;
    width: 100%;
    border: 0;
    padding: 0 15px 0 68px;
    outline: none;
    background-color: #ffffff;
}
</style>