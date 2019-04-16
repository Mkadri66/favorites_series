<template>
    <div>
        <h1> Recherchez une série </h1>
        <form @submit.prevent
        @submit="handleSearch()">
            <input v-model="name"
            placeholder="Nom de la serie"
            type="text"/>

            <button class="btn-primary">
                <i class="fas fa-search"></i>
            </button>
            <br>
           <search-results></search-results>
        </form>
    </div>
</template>

<script>
import SearchResults from '../components/SearchResults'
// import store from '../store/SeriesStore.js'
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        handleSearch () {
            // on emet le nom au store qui va passer en parametre le nom recherché
        this.$store.dispatch('FETCH_SERIES', this.name)
        }
    },
    components: {
        SearchResults
    }
}
</script>

<style>

</style>
