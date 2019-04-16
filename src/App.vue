<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{name: 'Home'}"> Favorites Series </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Search'}">Search</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Favorites'}">Favorites</router-link>>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
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

</style>
