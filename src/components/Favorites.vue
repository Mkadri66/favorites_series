<template>
  <div>
    <h1>Vos favoris</h1>
    <div v-if="!!favSeries.length" class="row favorites container">
      <div v-for="favSerie in favSeries" :key="favSerie.id" class="favorite col-lg-12">
        <div class="content">
          <img :src="favSerie.url" alt>
          <div class="description">
            <div class="header">{{favSerie.title}}</div>
            <div class="overview">{{favSerie.overview}}</div>
            <span class="delete-fav" @click="deleteFav(favSerie)">
              <i class="far fa-trash-alt"></i>
              <span>Retirer des favoris</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="no-fav">Aucun favori</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["favSeries"]),
  methods: mapActions(["deleteFav"])
};
</script>

<style>
.favorites {
  margin: 20px auto;
}
.favorite {
  background-color: white;
  margin-bottom: 30px;
  height: 408px;
  border-radius: 10px;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.16);
  animation-name: slidein;
  animation-duration: 700ms;
}

.favorite .content {
  display: flex;
  max-height: 300px;
}
.favorite .content img {
  height: 300px;
  margin-top: 30px;
}

.favorite .content .description {
  display: grid;
  padding: 10px;
  margin-left: 30px;
  margin-top: 20px;
}
.favorite .content .description .header {
  font-weight: bold;
  font-size: 30px;
}

.favorite .content .description .overview {
  font-size: 15px;
  text-align: justify;
  padding-right: 15px;
}

.favorite .content .description .delete-fav .far {
  text-align: right;
}

.no-result {
  text-align: center;
  margin-top: 20px;
}


.delete-fav {
  position: absolute;
  bottom: 16px;
  right: 42px;
  padding: 10px;
  background-color: #ff7675;
  border-radius: 5px;
}
.delete-fav i {
  color:white;
}
.delete-fav span {
  margin-left: 5px;
  color:white;
}

.no-fav {
  color: gray;
  text-align: center;
}

/* // Animation  */

@keyframes slidein {
  0% {
    transform: scale(0.3) translateX(50px);
  }
}
/*  RESPONSIVE */

/* IPAD  */
@media (max-width: 768px) {
  .favorite {
    height: 345px;
  }
  .favorite .content img {
    position: absolute;
    height: 255px;
    margin-top: 22px;
  }
  .favorite .content .delete-fav {
    left: 17px !important;
    bottom: 12px;
    right: auto;
    padding: 8px;
    background-color: #ff7675;
    border-radius: 5px;
    color: white;
  }

  .favorite .content .description {
    margin-top: 5px;
    margin-left: 30%;
  }
  .favorite .description .header {
    font-size: 20px;
  }
  .favorite .description .overview {
    font-size: 13px;
    overflow: auto;
    height: 225px;
  }
}

/* ///////////////////// */

@media (max-width: 414px) {

  .favorite {
    height: auto;
  }

  .favorite .content {
    max-height: unset;
  }

  .favorite .content .description {
    margin-top: 40px;
    margin-left: 0;
    margin-bottom: 10px;
    max-height: unset;
  }
  .favorite .content .description .header {
    font-size: 25px;
    text-align: left;
    margin-bottom: 10px;
  }

  .favorite .content .description .overview {
    width: 100%;
    overflow: unset;
    height: unset;
    padding-right: 0;
  }
  .favorite .content img {
    display: none;
  }

  .favorite .content .delete-fav {
    position: absolute;
    right: 10px;
    left: auto !important;
    top: 10px;
    bottom: auto;
    padding: 10px;
    background-color: #ff7675;
    border-radius: 5px;
  }

 
  .favorite .content .delete-fav span {
    display: none;
  }
}
</style>
