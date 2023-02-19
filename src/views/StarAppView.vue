<script setup>
import StarList from "../components/StarList.vue";
import R2D2ImageStarAppVue from "../components/R2D2ImageStarApp.vue";
</script>

<template>
  <R2D2ImageStarAppVue />
  <div class="app"><StarList /></div>
</template>

<style scoped>
.app {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
