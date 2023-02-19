<template>
  <div v-if="muscles.length" class="response-container">
    <ul class="search-results-text">
      <li v-for="muscle in muscles" :key="muscle.name">
        <h4>Search Results</h4>
        Exercise Name: {{ muscle.name }}
        <br />
        Type: {{ muscle.type }}
        <br />
        Muscle: {{ muscle.muscle }}
        <br />
        Equipment: {{ muscle.equipment }}
        <br />
        Difficulty: {{ muscle.difficulty }}
        <br />
        Instructions: {{ muscle.instructions }}
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    muscles: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.response-container {
  position: absolute;
  padding: 10px;
  background-color: rgba(47, 10, 48, 0.8);
  padding-bottom: 150px;
  width: 160%;
  display: flex;
  left: -30%;
}
</style>
