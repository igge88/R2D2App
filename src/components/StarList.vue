<script setup>
import SearchResults from "./SearchResultsStars.vue";
</script>

<template>
  <div>
    <div class="input-group mb-3">
      <input
        class="form-control"
        v-model="name"
        placeholder="Enter a star name"
        aria-label="Enter a star name"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="searchStar"
      >
        Search
      </button>
    </div>

    <search-results :stars="stars" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      stars: [],
    };
  },
  methods: {
    async searchStar() {
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/stars?name=${this.name}`,
          {
            headers: {
              "X-Api-Key": "OVFnughw4k30WFHLcxFSympYiiaTo6Wcbpx9bbv0",
            },
          }
        );
        this.stars = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
