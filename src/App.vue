<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
      <div id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}"> <i class="fas fa-home"></i> <br><strong>Favorites Series</strong> </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Search'}"> <i class="fas fa-search"></i><br> Recherche</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Favorites'}"><i class="far fa-star"></i> <br> Favoris</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Home from './components/Home'
import Search from './components/SearchSeries'
import Favorites from './components/Favorites'

export default {
  name: 'app',
  components: {
    Home,
    Search,
    Favorites
  }
}
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
  height: 100%;
}
#navbarNav {
    width: 100% !important;
}
nav{
  position:fixed;
}

.navbar-nav {
  text-align: center;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly
}



.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

/*  RESPONSIVE */

@media (max-width: 768px){
  /* #navbarNav {
    width: 100% !important;
  }
  .navbar-nav {
    text-align: center;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  } */

}
</style>
