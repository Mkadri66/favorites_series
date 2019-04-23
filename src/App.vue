<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{name: 'Home'}"> <strong>Favorites Series</strong> </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Search'}">Recherche</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Favorites'}">Favoris</router-link>
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
nav{
  position:fixed;
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
</style>
