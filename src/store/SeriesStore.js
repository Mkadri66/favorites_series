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
    }
}

const actions = {
    async FETCH_SERIES({ commit }, name) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=2169c952136a120dbcdac708fe0ac195&language=fr&&query=${name}`
        const { data } = await axios.get(url)
        commit('RECEIVE_SERIES', {
            series: data.results
        })
    }
}

const getters = {
    series: state => {
        return state.data.map(data => {
            return {
                title: data.title,
                url: data.poster_path,
                overview: data.overview === '' ? 'No description listed for this serie.' : data.overview
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