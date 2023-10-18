<template>
    <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="~/assets/images/logo2.png" alt="logo">
                </span>

                <div class="text header-text">
                    <span class="name">Realty Group</span>
                </div>
            </div>

            <i class="ri-arrow-right-s-line toggle" ></i>
        </header>

        <div class="menu-bar">
            <div class="menu">
                    <li class="search-box">
                        <i class="ri-search-line icon"></i>
                        <input type="search" placeholder="Search...">

                    </li>
                <ul class="menu-links">
                    <li class="nav-link">
                        <nuxt-link to="/">
                        <i class="ri-home-5-line icon"></i>
                        <span class="text nav-text">Home</span>
                        </nuxt-link>
                    </li>
                    <li class="nav-link">
                        <nuxt-link to="/services">
                        <i class="ri-service-line icon"></i>
                        <span class="text nav-text">Services</span>
                        </nuxt-link>
                    </li>
                    <li class="nav-link">
                        <nuxt-link to="/payments">
                        <i class="ri-wallet-2-line icon"></i>
                        <span class="text nav-text">Payments</span>
                        </nuxt-link>
                    </li>
                    <li class="nav-link">
                        <nuxt-link to="/payments">
                            <i class="ri-map-line icon"></i>
                            <span class="text nav-text">Smart Map</span>
                        </nuxt-link>
                    </li>
                    <li class="nav-link">
                        <nuxt-link to="/payments">
                            <i class="ri-book-3-line icon"></i>
                            <span class="text nav-text">About</span>
                        </nuxt-link>
                    </li>
                    <li class="nav-link">
                        <nuxt-link to="/payments">
                            <i class="ri-mail-send-line icon"></i>
                            <span class="text nav-text">Contacts</span>
                        </nuxt-link>
                    </li>

                </ul>

            </div>

            <div class="bottom-content">
                <li class="">
                    <a href="#">
                        <i class="ri-logout-circle-line icon"></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>

                <li class="mode">
                    <div class="moon-sun">
                        <i class="ri-moon-line icon moon"></i>
                        <i class="ri-sun-line icon sun"></i>
                    </div>
                    <span class="mode-text text">Dark Mode</span>

                    <div class="toggle-switch" ref="toggleElement">
                        <span class="switch"></span>
                    </div>
                </li>

            </div>
        </div>
    </nav>

    <!-- <section class="home">
        <div class="text">Dashboard</div>
        <header class="header">
            <div class="header__container container">
               <div class="header__toggle" id="header-toggle" @click="toggleSidebar">
                  <i class="ri-menu-line"></i>
               </div>
    
               <a href="#" class="header__logo">
                  <img src="assets/img/yt-logo-full.svg" alt="">
               </a>
            </div>
         </header>
    
    </section> -->

</template>

<script setup>
import { ref, onMounted } from 'vue';

const sidebar = ref(null);
const toggle = ref(null);
const searchBtn = ref(null);
const modeSwitch = ref(null);
const modeText = ref(null);

// Function to toggle the sidebar
const toggleSidebar = () => {
  if (sidebar.value) {
    sidebar.value.classList.toggle('close');
  }
};

// Function to handle dark mode
const toggleDarkMode = () => {
  if (document.body) {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      modeText.value = 'Light Mode';
      localStorage.setItem('darkMode', 'true');
    } else {
      modeText.value = 'Dark Mode';
      localStorage.setItem('darkMode', 'false');
    }
  }
};

// Function to initialize dark mode state
const initializeDarkMode = () => {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'true') {
    if (document.body) {
      document.body.classList.add('dark');
    }
    if (modeText.value) {
      modeText.value = 'Light Mode';
    }
  } else {
    if (document.body) {
      document.body.classList.remove('dark');
    }
    if (modeText.value) {
      modeText.value = 'Dark Mode';
    }
  }
};

onMounted(() => {
  // Initialize dark mode
  initializeDarkMode();

  // Set references to DOM elements
  sidebar.value = document.querySelector('.sidebar');
  toggle.value = document.querySelector('.toggle');
  modeSwitch.value = document.querySelector('.toggle-switch');

  // Add event listeners
  if (toggle.value) {
    toggle.value.addEventListener('click', toggleSidebar);
  }
  if (modeSwitch.value) {
    modeSwitch.value.addEventListener('click', toggleDarkMode);
  }
});
</script>

<style scoped>
:root{
    --body-color: #e4e9f7;
    --sidebar-color: #fff;
    --primary-color: #695cfe;
    --primary-color-light: #f6f5ff;
    --toggle-color:#ddd;
    --text-color: #707070;

    /* ======== Transition ======== */

    --tran-02: all 0.2s ease ;
    --tran-03: all 0.3s ease;
    --tran-04: all 0.4s ease;
    --tran-05: all 0.5s ease;
}

body.dark{
    --body-color: #18191a;
    --sidebar-color: #242526;
    --primary-color: #3a3b3c;
    --primary-color-light: #3a3b3c;
    --toggle-color:#fff;
    --text-color: #ccc;
}
 
  a {
    text-decoration: none;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /*=============== HEADER ===============*/
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--sidebar-color);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    /* z-index: var(--z-fixed); */
  }
  
  .header::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--gradient-x);
  }
  
  .header__container {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header__toggle {
    font-size: 1.25rem;
    color: var(--primary-color);
    cursor: pointer;
  }

  .container {
    margin-inline: 1.5rem;
  }
  
  
    /*=============== END HEADER ===============*/

.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background: var(--sidebar-color);
    z-index: 500;
    padding: 10px 14px;
    border-right: 1px solid var(--toggle-color);
    transition: var(--tran-05);
    z-index: 100;
}

.sidebar.close{
    width: 88px;
}

.sidebar header{
    position: relative;
}

.sidebar .text{
    font-size: 1rem;
    font-weight: var(--font-semi-bold);
    color: var(--text-color);
    transition: var(--tran-03);
    white-space: nowrap;
    opacity: 1;
}

.sidebar.close .text{
    opacity: 0;
}


.sidebar .image{
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-text{
    display: flex;
    align-items: center;
}
.sidebar .image-text img{
    width: 40px;

}

.header-text{
    display: flex;
    flex-direction: column;
}

.header-text .name{
    font-weight: var(--font-semi-bold);
}

.profession{
    margin-top: -2px;
}

.sidebar header .toggle{
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--sidebar-color);
    font-size: 22px;
    transition: var(--tran-03);
    cursor: pointer;

}

.sidebar.close header .toggle{
    transform: translateY(-50%);
}

body.dark .toggle{
    color: var(--text-color);
}

.sidebar li{
    height: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
}

.sidebar li .icon{
    font-size: 20px;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

}

.sidebar li .icon,
.sidebar li .text{
    color: var(--text-color);
    transition: var(--tran-04);
}

.sidebar li a{
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 6px;
    align-items: center;
    transition: var(--tran-04);

}

.search-box{
    background: var(--primary-color-light);
    border-radius: 6px;
    transition: var(--tran-05);
}

.search-box input{
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    background: var(--primary-color-light);
}

.sidebar li a:hover{
    background: var(--primary-color);
}

.sidebar li a:hover .icon,
.sidebar li a:hover .text{
    color: var(--sidebar-color);
}

body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text{
    color: var(--text-color);
}

.sidebar .menu{
    margin-top: 35px;
}

.sidebar .menu-bar{
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.menu-bar .mode{
    position: relative;
    border-radius: 6px;
    background: var(--primary-color-light);
}

.menu-bar .mode .moon-sun{
    height: 50px;
    width: 60px;
    display: flex;
    align-items: center;
}

.menu-bar .mode i{
    position: absolute;
    transition: var(--tran-03);
}

.menu-bar .mode i.sun{
    opacity: 0;
}

body.dark .menu-bar .mode i.sun{
    opacity: 1;
}

body.dark .menu-bar .mode i.moon{
    opacity: 0;
}


.menu-bar .mode .toggle-switch{
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 60px;
    cursor: pointer;
    background: var(--primary-color-light);
    border-radius: 6px;
}

.toggle-switch .switch{
    position: relative;
    height: 22px;
    width: 44px;
    border-radius: 25px;
    background: var(--toggle-color);
    transition: var(--tran-05);
}

.switch::before{
    content:'';
    position: absolute;
    height: 15px;
    width: 15px;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: var(--sidebar-color);
    cursor: pointer;
}

body.dark .switch::before{
    left: 24px;
}

.home{
    position: relative;
    left: 250px;
    height: 100%;
    width: 100%;
    width: calc(100% - 250px);
    background: var(--body-color);
    transition: var(--tran-05);
}

.sidebar.close ~ .home{
    left: 88px;
    width: calc(100% - 250px);
}
</style>