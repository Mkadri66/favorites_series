<template>
    <div>
        <h1> Recherchez une série </h1>
        <form @submit.prevent
              @submit="handleSearch()">
            <input v-model="name"
                placeholder="Tapez le nom d'une serie ... Entrée pour valider"
                type="text"
                class="col-lg-6 col-md-8 col-8 search-input"/>

            <button class="btn-primary">
                <i class="fas fa-search"></i>
            </button>
            <br>
        </form>
        <search-results></search-results>
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
        },
    },
    components: {
        SearchResults
    }
}
</script>

<style>
h1, form  {
    text-align: center;
    margin-top: 20px;
}

p {
    font-style: italic;
    color:grey;
    margin-top: 10px;
}
.search-input{
    height: 43px;
    border: 1px solid lightgrey;
}
.btn-primary {
    height: 43px;
    width: 43px;
}
</style>
