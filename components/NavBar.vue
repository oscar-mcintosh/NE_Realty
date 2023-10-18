<template>
  <header class="header">
    <nav class="nav container">
      <div class="nav__data">
        <nuxt-link to="/" class="nav__logo">
          <i class="ri-planet-line"></i> NE Realty
        </nuxt-link>

        <div class="nav__toggle" @click="toggleMenu">
          <i class="ri-menu-line nav__burger" :class="{ 'show-icon': isMenuOpen }"></i>
          <i class="ri-close-line nav__close" :class="{ 'show-icon': !isMenuOpen }"></i>
        </div>
      </div>

      <!--=============== NAV MENU ===============-->
      <div class="nav__menu" :class="{ 'show-menu': isMenuOpen }">
        <ul class="nav__list">
          <li>
            <nuxt-link to="/" class="nav__link">Home</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/company" class="nav__link">Company</nuxt-link>
          </li>

          <!--=============== DROPDOWN 1 ===============-->
          <li class="dropdown__item">
            <div class="nav__link">
              Properties <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <ul class="dropdown__menu">
              <li>
                <nuxt-link to="/analytics/overview" class="dropdown__link">
                  <i class="ri-pie-chart-line"></i> Overview
                </nuxt-link>
              </li>

              <li>
                <nuxt-link to="/sale" class="dropdown__link">
                  <i class="ri-home-3-line"></i> Sale
                </nuxt-link>
              </li>
                <li>
                    <nuxt-link to="/rent" class="dropdown__link">
                        <i class="ri-home-office-line"></i> Rent
                    </nuxt-link>
                </li>
            </ul>
          </li>

          <!--=============== DROPDOWN 2 ===============-->
          <li class="dropdown__item">
            <div class="nav__link">
              Users <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <ul class="dropdown__menu">
              <li>
                <nuxt-link to="/users/profiles" class="dropdown__link">
                  <i class="ri-user-line"></i> Profiles
                </nuxt-link>
              </li>

              <li>
                <nuxt-link to="/users/accounts" class="dropdown__link">
                  <i class="ri-lock-line"></i> Account
                </nuxt-link>
              </li>

              <li>
                <nuxt-link to="/users/messages" class="dropdown__link">
                  <i class="ri-message-3-line"></i> Messages
                </nuxt-link>
              </li>
            </ul>
          </li>

          <li>
            <nuxt-link to="/contact" class="nav__link">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<script setup>
    import { ref } from 'vue';

    const isMenuOpen = ref(false);

    const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    }
</script>

<style scoped>
/*=============== HEADER ===============*/
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white-color);
  box-shadow: 0 2px 16px hsla(220, 32%, 8%, .3);
  z-index: var(--z-fixed);
}

/*=============== NAV ===============*/
.nav {
  height: var(--header-height);
}

.nav__logo, 
.nav__burger, 
.nav__close {
  color: var(--primary-color);
}

.nav__data {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo {
  display: inline-flex;
  align-items: center;
  column-gap: .25rem;
  font-weight: var(--font-semi-bold);
  /* Color highlighting when pressed on mobile devices */
  /*-webkit-tap-highlight-color: transparent;*/
}

.nav__logo i {
  font-weight: initial;
  font-size: 1.25rem;
}

.nav__toggle {
  position: relative;
  width: 32px;
  height: 32px;
}

.nav__burger, 
.nav__close {
  position: absolute;
  width: max-content;
  height: max-content;
  inset: 0;
  margin: auto;
  font-size: 1.25rem;
  cursor: pointer;
  transition: opacity .1s, transform .4s;
}

.nav__close {
  opacity: 0;
}

/* Navigation for mobile devices */
@media screen and (max-width: 1118px) {
  .nav__menu {
    position: absolute;
    left: 0;
    top: 2.5rem;
    width: 100%;
    height: calc(100vh - 3.5rem);
    overflow: auto;
    pointer-events: none;
    opacity: 0;
    transition: top .4s, opacity .3s;
  }
  .nav__menu::-webkit-scrollbar {
    width: 0;
  }
  .nav__list {
    background-color: var(--primary-color);
    padding-top: 1rem;
  }
}

.nav__link {
  color: var(--primary-color);
  background-color: var(--white-color);
  font-weight: var(--font-semi-bold);
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color .3s;
}

.nav__link:hover {
  background-color: var(--black-color-light);
}

/* Show menu */
.show-menu {
  opacity: 1;
  top: 3.5rem;
  pointer-events: initial;
}

/* Show icon */
.show-icon .nav__burger {
  opacity: 0;
  transform: rotate(90deg);
}
.show-icon .nav__close {
  opacity: 1;
  transform: rotate(90deg);
}

/*=============== DROPDOWN ===============*/
.dropdown__item {
  cursor: pointer;
}

.dropdown__arrow {
  font-size: 1.25rem;
  font-weight: initial;
  transition: transform .4s;
}

.dropdown__link{
  padding: 1.25rem 1.25rem 1.25rem 2.5rem;
  color: var(--white-color);
  /* background-color: var(--black-color-light); */
    background-color: var(--primary-color);

  display: flex;
  align-items: center;
  column-gap: .5rem;
  font-weight: var(--font-semi-bold);
  transition: background-color .3s;
}

.dropdown__link i {
  font-size: 1.25rem;
  font-weight: initial;
}

.dropdown__link:hover{
  background-color: var(--black-color);
}

.dropdown__menu, 
.dropdown__submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height .4s ease-out;
}

/* Show dropdown menu & submenu */
.dropdown__item:hover .dropdown__menu, 
.dropdown__subitem:hover > .dropdown__submenu {
  max-height: 1000px;
  transition: max-height .4s ease-in;
}

/* Rotate dropdown icon */
.dropdown__item:hover .dropdown__arrow {
  transform: rotate(180deg);
}

/*=============== DROPDOWN SUBMENU ===============*/
.dropdown__add {
  margin-left: auto;
}

.dropdown__sublink {
  background-color: var(--black-color-lighten);
}

/*=============== BREAKPOINTS ===============*/
/* For small devices */
@media screen and (max-width: 340px) {
  .container {
    margin-inline: 1rem;
  }

  .nav__link {
    padding-inline: 1rem;
  }
}

/* For large devices */
@media screen and (min-width: 1118px) {
  .container {
    margin-inline: auto;
  }

  .nav {
    height: calc(var(--header-height) + 2rem);
    display: flex;
    justify-content: space-between;
  }
  .nav__toggle {
    display: none;
  }
  .nav__list {
    height: 100%;
    display: flex;
    column-gap: 3rem;
  }
  .nav__link {
    height: 100%;
    padding: 0;
    justify-content: initial;
    column-gap: .25rem;
  }
  .nav__link:hover {
    background-color: transparent;
  }

  .dropdown__item, 
  .dropdown__subitem {
    position: relative;
  }

  .dropdown__menu, 
  .dropdown__submenu {
    max-height: initial;
    overflow: initial;
    position: absolute;
    left: 0;
    top: 6rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s, top .3s;
  }

  .dropdown__link, 
  .dropdown__sublink {
    padding-inline: 1rem 3.5rem;
  }

  .dropdown__subitem .dropdown__link {
    padding-inline: 1rem;
  }

  .dropdown__submenu {
    position: absolute;
    left: 100%;
    top: .5rem;
  }

  /* Show dropdown menu */
  .dropdown__item:hover .dropdown__menu {
    opacity: 1;
    top: 5.5rem;
    pointer-events: initial;
    transition: top .3s;
  }

  /* Show dropdown submenu */
  .dropdown__subitem:hover > .dropdown__submenu {
    opacity: 1;
    top: 0;
    pointer-events: initial;
    transition: top .3s;
  }
}

</style>