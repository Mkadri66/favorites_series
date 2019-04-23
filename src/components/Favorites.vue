<template>
    <div>
        <h1> Vos favoris </h1>
        <div v-if="!!favSeries.length" class="row favorites container">
            <div v-for="favSerie in favSeries" :key="favSerie.id" class="favorite col-lg-12">
            <div class="content">
                <img :src="favSerie.url" alt="">
                <div class="description">
                <div class="header">{{favSerie.title}}</div>
                <div class="overview">{{favSerie.overview}}</div>
                <a class="delete-fav" @click="deleteFav(serie)" :v-model="serie"> <i class="far fa-star"></i> <p>Retirer des favoris </p></a>
                </div>
            </div>
            </div>
        </div>
        <div v-else> 
            <p>Aucun favoris</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: mapGetters(["favSeries"]), 
}
</script>

<style>
.favorites {
  height: 300px;
  margin: 20px auto;
}
.favorite {
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

.delete-fav {
  position: absolute;
  
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  bottom: 16px;
  right: 42px;
}


.delete-fav i, p{
    color:red;
}



/* // Animation  */

  @keyframes slidein {
      0%{
        transform: scale(0.3) translateX(50px);
        }
  }


</style>
