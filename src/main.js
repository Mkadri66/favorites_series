import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/SeriesStore.js'

// Components
import Home from './components/Home.vue'
import SearchSeries from './components/SearchSeries.vue'
import Favorites from './components/Favorites.vue'


Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchSeries
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]

})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')