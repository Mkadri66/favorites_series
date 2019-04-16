<template>
  <div v-if="!!series.length" class="row">
    <div v-for="serie in series" :key="serie.name" class="serie col-lg-4">
      <div class="content">
        <div class="header">{{serie.title}}</div>
        <div class="description">{{serie.overview}}</div>
      </div>
      <!-- <div class="extra content">
        <span class="right floated">
          <a target="_blank" :href="serie.url">
            <button class="ui icon purple tiny button">
                More Info
            </button>
          </a>
        </span>
      </div>-->
    </div>
    <hr>
  </div>

  <div v-else>Aucun resultat</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["series"])
};
</script>


<style>
.serie{
  border: 1px solid black;
  margin-bottom: 30px;
  height: 200px;
  overflow: auto;
}
</style>
