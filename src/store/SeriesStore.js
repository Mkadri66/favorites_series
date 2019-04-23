import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    data: [],
    favorites: []
}

const mutations = {
    RECEIVE_SERIES(state, {
        series
    }) {
        state.data = series
    }, 
    RECEIVE_FAVORITES(state, { favSerie }) {
        // on verifie si la serie n'est pas deja dans les favoris.
        const isAlreadyFav = state.favorites.find(fav => fav.id == favSerie.id)
        if(!isAlreadyFav){
            state.favorites.push(favSerie)
        }     
    },
    DELETE_FAVORITES(state, { deleteSerie }) {
        // console.log(deleteSerie)
        this.state.favorites = state.favorites.filter(fav => fav.id !== deleteSerie.id)
    }

}

const actions = {
    async FETCH_SERIES({ commit }, name) {
        const url = `https://api.themoviedb.org/3/search/tv?api_key=2169c952136a120dbcdac708fe0ac195&language=fr&&query=${name}`
        const { data } = await axios.get(url)
        commit('RECEIVE_SERIES', {
            series: data.results
        })
    },
    addFav({commit}, serie){
        commit('RECEIVE_FAVORITES',{
            favSerie : serie
        }) 
    },
    deleteFav({commit}, favSerie) {
        commit('DELETE_FAVORITES', {
            deleteSerie: favSerie
        })
    }

}

const getters = {
    series: state => {
        return state.data.map(data => {
            return {
                id : data.id,
                title: data.name,
                url: data.poster_path === null ? require('../assets/no-image-fav-series.png') : "https://image.tmdb.org/t/p/w500/" + data.poster_path,
                overview: data.overview === '' ? 'Il n\'y pas de description pour cette serie.' : data.overview,
                isFavorite : state.favorites.find( favorite => favorite.id == data.id) ? true : false
            }
        })
    }, 
    favSeries: state => {
        return state.favorites.map(data => {
            return {
                id: data.id,
                title: data.title,
                url: data.url,
                overview: data.overview
            }
        })
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store