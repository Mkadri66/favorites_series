<template>
  <div>
      <div class="home-content">
        <h1>Favorites Series</h1>
        <p>Bienvenue sur cette application qui permet de rechercher vos series préférées et de les ajouter à vos favoris</p>
        <router-link :to="{name: 'Search'}">Lancer une recherche</router-link>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-content{
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1{
    font-weight: bold;
}
</style>
