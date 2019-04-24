<template>
  <div v-if="!!series.length" class="row series container">
    <div v-for="serie in series" :key="serie.id" class="serie col-lg-12">
      <div class="content">
        <img :src="serie.url" alt="">
        <a v-if="!serie.isFavorite" class="add-fav" @click="addFav(serie)" :v-model="serie"> <i class="far fa-star"></i> Ajouter aux favoris </a>
        <p v-else class="already-fav"> Dans vos favoris.</p>  
        <div class="description">
          <div class="header">{{serie.title}}</div>
          <div class="overview">{{serie.overview}}</div>
          <!-- <p> {{serie.isFavorite}}</p> -->        
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
    color:white;
    font-style: italic;
  }

  /* // Animation  */

  @keyframes slidein {
      0%{
        transform: scale(0.3) translateX(50px);
        }
  }

  @media (max-width: 768px){
  .serie .content img {
      height: 255px;
      margin-top: 22px;
  }
  .serie .content .add-fav {
    left: 19px !important;
    right: auto;
    padding: 7px;
  }

  .serie .content .already-fav {
    left: 25px !important;
    bottom: -2px;
    right: auto;
    padding: 10px;
    background-color: #74b9ff;
    border-radius: 5px;
  }
  .serie .description{
    margin-top: 0px;
  }
  .serie .description .header{
    font-size: 20px;
  }
  .serie .description .overview{
    font-size: 13px;
  }
}

</style>
