<template>
  <div>
    <div class="main">
      <div class="wall-series"></div>
      <div class="home-content">
        <h1>Favorites Series</h1>
        <p>Bienvenue sur cette application qui permet de rechercher vos series préférées et de les ajouter à vos favoris</p>
        <router-link :to="{name: 'Search'}" class="btn btn-outline-light">Lancer une recherche</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main{
  height: 100vh;
}

.wall-series{
  background: url('https://assets.nflxext.com/ffe/siteui/vlv3/58a3d29a-63a2-4753-b5c6-63df88ab7f95/4369693a-bb2c-4240-9d20-01f188ddd1d7/FR-fr-20190414-popsignuptwoweeks-perspective_alpha_website_large.jpg');
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%; 
  filter: blur(3px);
  -webkit-filter: blur(3px);
}
.home-content{
  color: white;
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 40px;
  margin-left: 20%;
}
.home-content h1 {
  font-size: 60px;
  font-weight: bolder;
}
.home-content p , a{
  color: white;
  font-size: 15px;
}

h1{
    font-weight: bolder;
}

@media (max-width: 768px){
  .home-content{
    margin: 0;
    padding: 25px;
  }
}
</style>
