<template>
    <div class="home_form">
        <form action="" class="form__project-search">
            <div class="form__top">
                <button class="form__type-toggle active">
                    Buy
                </button>
                <button class="form__type-toggle">
                    Sell
                </button>
                <button class="form__type-toggle">
                    Rent
                </button>
            </div>

            <div class="form__bottom">
                <div class="input_group">
                    <div class="icon">
                        <i class="ri-map-pin-line"></i>
                    </div>

                    <input type="text" placeholder="Location" class="input_field">
                </div>

                <div class="input_group">
                    <div class="icon">
                        <i class="ri-home-2-line"></i>
                    </div>

                    <input type="text" placeholder="Property" class="input_field">
                </div>

                <div class="input_group">
                    <div class="icon">
                        <i class="ri-money-dollar-circle-line"></i>
                    </div>

                    <input type="text" placeholder="Price" class="input_field">
                </div>

                <button class="btn">
                    <i class='bx bx-search' ></i>

                    <span>Search</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
    const city = ref("");
    const cityError = ref(false);
    const selectText = ref('All properties');
    const isOpen = ref(false);
    const options = ['All', 'Rent', 'Sale'];

    const selectOption = (option) => {
        selectText.value = option;
        isOpen.value = false; // Close the list
    };

    const toggleList = () => {
        isOpen.value = !isOpen.value;
    };

    const handleSearch = () => {
        if(!city.value){
            return cityError.value = true
        }
        navigateTo(`/property/${city.value}`)
    }
</script>


<style scoped>
input,
button,
i{
    display: block;
}

input{
    border: none;
    outline: none;
    background: transparent;
    font: inherit;
}

button,
i{
    cursor: pointer;
}

input{
    width: 100%;
}

.home_form{
    margin-block-start: 70px;
}

.form__top{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 12px;
}

.form__top .form__type-toggle{
    padding: 10px 16px;
    background-color: var(--white-color);
    border-radius: 4px 4px 0 0;
    font-size: 14px;
    font-weight: 400;
    color: var(--primary-color);
}

.form__top .form__type-toggle.active{
    background-color: var(--primary-color);
    color: var(--white-color);
}

.form__bottom{
    background-color: rgba(255, 255, 255, .2);
    backdrop-filter: blur(4px);
    border-radius: 6px;
    padding: 14px;
    display: grid;
    gap: 15px;
}

.input_group{
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: var(--white-color);
    padding: 20px;
    border-radius: 5px;
    font-size: 14px;
    color: var(--lighter-text);
    font-weight: 500;
}

.input_group .icon i{
    color: var(--primary-color);
}


.btn{
    display: flex;
    align-items: center;
    gap: 5px;
    max-width: max-content;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    background-color: var(--primary-color);
    color: var(--white-color);
    border-radius: 4px;
    padding: 8px 20px;
    box-shadow: 0 3px 3px rgba(9, 23, 44, .25);
}

/* 
  #BREAKPOINT
*/

@media screen and (min-width: 560px) {
    .form__bottom,
    .footer_top,
    .counter_list{
        grid-template-columns: repeat(2, 1fr);
    }

    .footer{
        padding-block-end: 20px;
    }

    .footer_bottom{
        flex-direction: row;
        gap: 0;
    }
}
@media screen and (min-width: 768px) {

    .form__bottom{
        grid-template-columns: repeat(3, 1fr);
    }

}

@media screen and (min-width: 992px) {
    .form__bottom{
        max-width: 700px;
        grid-template-columns: repeat(3, 1fr) .5fr;
    }

}

</style>