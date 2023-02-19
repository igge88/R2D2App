<script setup>
import ExerciseList from "../components/ExerciseList.vue";
import R2D2ImageExerciseApp from "../components/R2D2ImageExerciseApp.vue";
</script>

<template>
  <R2D2ImageExerciseApp />
  <div class="app2"><ExerciseList /></div>
</template>

<style scoped>
.app2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
