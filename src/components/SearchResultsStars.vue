<template>
  <div v-if="stars.length" class="response-container">
    <ul class="search-results-text">
      <li v-for="star in stars" :key="star.name">
        <h2>Search Results</h2>
        Star: {{ star.name }}
        <br />
        Constellation: {{ star.constellation }}
        <br />
        Right Ascension: {{ star.right_ascension }}
        <br />
        Declination: {{ star.declination }}
        <br />
        Apparent Magnitude: {{ star.apparent_magnitude }}
        <br />
        Absolute Magnitude: {{ star.absolute_magnitude }}
        <br />
        Distance from Earth (light years): {{ star.distance_light_year }}
        <br />
        Spectral Class: {{ star.spectral_class }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.search-results-text {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: rgba(47, 10, 48, 0.7);
}
</style>
