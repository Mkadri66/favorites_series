<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="views"></router-view>
    </transition>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
      <div id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}">
              <i class="fas fa-home"></i>
              <br>
              <span>Favorites Series</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Search'}">
              <i class="fas fa-search"></i>
              <br>
              <span>Recherche</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Favorites'}">
              <i class="far fa-star"></i>
              <br>
              <span>Favoris</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Home from "./components/Home";
import Search from "./components/SearchSeries";
import Favorites from "./components/Favorites";

export default {
  name: "app",
  components: {
    Home,
    Search,
    Favorites
  }
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  height: 100%;
  background-color: #f4f6fc;
}
#navbarNav {
  width: 100% !important;
}
nav {
  position: fixed;
}
.navbar {
  padding: 0;
}

.navbar-nav {
  padding: 10px;
  border-top: 1px solid #e2e2e2;
  text-align: center;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.views {
  margin-bottom: 70px;
}

/*  ANIMATION */

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/*  RESPONSIVE */

@media (max-width: 414px) {
  
  .navbar-nav{
    justify-content: space-around;
  }
  .navbar-nav .nav-item a span {
    display: none;
  }

  .navbar-nav .nav-item a i {
    font-size: 25px;
  }
}
</style>
