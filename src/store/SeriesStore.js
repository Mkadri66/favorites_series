import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    data: []
}

const mutations = {
    RECEIVE_SERIES(state, {
        characters
    }) {
        state.data = characters
    }
}

const actions = {
    async FETCH_SERIES({
        commit
    }, name) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=2169c952136a120dbcdac708fe0ac195&language=fr&&query=${name}`
        const {
            data
        } = await axios.get(url)
        commit('RECEIVE_SERIES', {
            series: data.results
        })
    }
}

const getters = {
    series: state => {
        return state.data.map(data => {
            return {
                name: data.name,
                url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
                image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
                description: data.description === '' ? 'No description listed for this character.' : data.description
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