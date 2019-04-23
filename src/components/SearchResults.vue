<template>
  <div v-if="!!series.length" class="row series container">
    <div v-for="serie in series" :key="serie.id" class="serie col-lg-12">
      <div class="content">
        <img :src="serie.url" alt="">
        <div class="description">
          <div class="header">{{serie.title}}</div>
          <div class="overview">{{serie.overview}}</div>
          <!-- <p> {{serie.isFavorite}}</p> -->
          <a v-if="!serie.isFavorite" class="add-fav" @click="addFav(serie)" :v-model="serie"> <i class="far fa-star"></i> Ajouter aux favoris </a>
          <p v-else class="already-fav"> Cette serie fait partie de vos favoris.</p>          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  // on recupere les series depuis l'API
  computed: mapGetters(["series"]),
  // ajout de la série au click de l'étoile
  methods: mapActions([
    'addFav'
  ])
};
</script>


<style scope>
.series {
  height: 300px;
  margin: 20px auto;
}
.serie{
  /* border: 1px solid rgb(187, 187, 187); */
  margin-bottom: 30px;
  height: 350px;
  overflow: auto;
  border-radius: 10px;
  -moz-box-shadow: -3px 4px 16px #adadad;
  -webkit-box-shadow: -3px 4px 16px #adadad;
  box-shadow: -3px 4px 16px #adadad;
  animation-name: slidein;
  animation-duration: 700ms;
}

.content{
  display: flex;
  max-height: 300px;
}
.content img {
  height: 300px;
  margin-top: 30px;
}

.description {
  display: grid;
  padding : 10px;
  margin-left: 30px;
  max-height: 300px; 
  margin-top: 20px;
}
.header {
  font-weight: bold;
  font-size: 30px;
}

.overview {
  font-size: 15px;
  text-align: justify;
  padding-right: 15px;
}

.far {
  text-align: right;
}
/* img{
  width: 200px;
} */

.no-result{
  text-align: center;
  margin-top: 20px;
}

.add-fav{
  position: absolute;
  bottom: 16px;
  right: 42px;
  padding: 10px;
  background-color: #ececec;
  border-radius: 5px;
}

.already-fav{
  position: absolute;
  bottom: 16px;
  right: 42px;
  color:grey;
  font-style: italic;
}

/* // Animation  */

  @keyframes slidein {
      0%{
        transform: scale(0.3) translateX(50px);
        }
  }

  /* @-webkit-keyframes slidein {
      0% {
          opacity: 0;
      }

      100% {
        opacity: 1;
      }
  } */

</style>
