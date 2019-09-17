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
.main {
  height: 100vh;
}

/* .views {
  margin-bottom: 70px;
} */

.wall-series {
  background: url("../assets/wall_netflix.jpg");
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  filter: blur(3px);
  -webkit-filter: blur(3px);
}
.home-content {
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
  margin: 20%;
}

.home-content h1 {
  text-shadow: 1px 1px 2px black;
  font-size: 75px;
  font-weight: bolder;
}
.home-content p {
  text-shadow: 1px 1px 2px black;
  text-align: center;
  color: white;
  font-size: 25px;
}
.home-content .btn-outline-light {
  margin-top: 20px;
}

h1 {
  font-weight: bolder;
}

@media (max-width: 768px) {
  .home-content {
    top: 0;
    margin: 0 10%;
  }
}

@media (max-width: 414px) {
  .home-content {
    top: 0;
    margin: 0 6%;
  }
  .home-content h1 {
    font-size: 60px;
  }
  .home-content p {
    font-size: 20px;
  }
}
</style>
