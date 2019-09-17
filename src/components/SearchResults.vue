<template>
  <div v-if="!!series.length" class="row series container">
    <div v-for="serie in series" :key="serie.id" class="serie col-lg-12">
      <div class="content">
        <img :src="serie.url" alt>
        <div class="description">
          <div class="header">{{serie.title}}</div>
          <div class="overview">{{serie.overview}}</div>
          <!-- <p> {{serie.isFavorite}}</p> -->
        </div>
        <span v-if="!serie.isFavorite" class="add-fav" @click="addFav(serie)" :v-model="serie">
          <i class="far fa-star"></i>
          <span>Ajouter aux favoris</span>
        </span>
        <span v-else class="already-fav">
          <i class="fas fa-star"></i>
          <span>Dans vos favoris</span>
        </span>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-center"> Aucun resultat trouvé </p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  // on recupere les series depuis l'API
  computed: mapGetters(["series"]),
  // ajout de la série au click de l'étoile
  methods: mapActions(["addFav"])
};
</script>


<style scope>
.series {
  margin: 70px auto;
}
.serie {
  /* border: 1px solid rgb(187, 187, 187); */
  margin-bottom: 30px;
  background-color: white;
  height: 408px;
  border-radius: 10px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.16);
  animation-name: slidein;
  animation-duration: 700ms;
}

.serie .content {
  display: flex;
}
.serie .content img {
  height: 300px;
  margin-top: 30px;
  border-radius: 10px;
}

.serie .content .description {
  display: grid;
  padding: 10px;
  margin-left: 30px;
  max-height: 300px;
  margin-top: 20px;
}
.serie .content .description .header {
  font-weight: bold;
  font-size: 30px;
}

.serie .content .description .overview {
  font-size: 15px;
  text-align: left;
  padding-right: 15px;
  overflow: auto;
}

.add-fav .far {
  text-align: right;
  color: black;
}

.no-result {
  text-align: center;
  margin-top: 20px;
}

.add-fav {
  position: absolute;
  bottom: 16px;
  right: 42px;
  padding: 10px;
  background-color: #e6e6e6;
  border-radius: 5px;
}
.add-fav span {
  margin-left: 5px;
  color: black;
}
.already-fav {
  position: absolute;
  bottom: 16px;
  right: 42px;
  padding: 10px;
  background-color: #74b9ff;
  border-radius: 5px;
}
.already-fav i {
  color: white;
}

.already-fav span {
  margin-left: 5px;
  color: white;
}
/* // Animation  */

@keyframes slidein {
  0% {
    transform: scale(0.3) translateX(50px);
  }
}

/*  RESPONSIVE */

@media (max-width: 768px) {
  .serie {
    display: flex;
    height: 345px;
  }
  .serie .content img {
    height: 255px;
    margin-top: 22px;
  }
  .serie .content .add-fav {
    left: 17px !important;
    bottom: 12px;
    right: auto;
    padding: 8px;
    border-radius: 5px;
    color: black;
    background-color: #e6e6e6;
  }
  .serie .content .already-fav {
    left: 17px !important;
    bottom: 12px;
    right: auto;
    padding: 8px;
    border-radius: 5px;
    color: black;
    background-color: #74b9ff;
  }
  .serie .description {
    margin-top: 5px;
    margin-left: 30%;
  }
  .serie .description .header {
    font-size: 20px !important;
  }
  .serie .description .overview {
    width: 435px;
    height: 225px;
    margin-bottom: 10px;
  }
}
/* ///////////////////// */

@media (max-width: 414px) {
  .serie {
    height: auto;
  }

  .serie .content .description {
    margin-top: 40px;
    margin-left: 0;
    margin-bottom: 10px;
    max-height: unset;
  }
  .serie .content .description .header {
    font-size: 25px;
    text-align: left;
    margin-bottom: 10px;
  }

  .serie .content .description .overview {
    width: 100%;
    overflow: unset;
    height: unset;
    padding-right: 0;
  }
  .serie .content img {
    display: none;
  }
  .serie .content .add-fav {
    position: absolute;
    right: 10px;
    left: auto !important;
    top: 10px;
    bottom: auto;
    padding: 10px;
    background-color: #ececec;
    border-radius: 5px;
  }
  .serie .content .add-fav {
    position: absolute;
  }
  .serie .content .add-fav span {
    display: none;
  }

  .serie .content .already-fav {
    position: absolute;
    right: 10px;
    left: auto !important;
    top: 10px;
    bottom: auto;
    padding: 10px;
    background-color: #74b9ff;
    border-radius: 5px;
  }

  .serie .content .already-fav span {
    color: white;
  }
  .serie .content .already-fav span {
    display: none;
  }
}
</style>
