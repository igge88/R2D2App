<script setup>
import SearchResults from "./SearchResultsMuscles.vue";
</script>

<template>
  <div>
    <div class="input-group mb-3">
      <input
        class="form-control"
        v-model="name"
        placeholder="Enter a muscle name"
        aria-label="Enter a muscle name"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="searchMuscle"
      >
        Search
      </button>
    </div>
    <search-results :muscles="muscles" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      muscles: [],
    };
  },
  methods: {
    async searchMuscle() {
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/exercises?muscle=${this.name}`,
          {
            headers: {
              "X-Api-Key": "OVFnughw4k30WFHLcxFSympYiiaTo6Wcbpx9bbv0",
            },
          }
        );
        this.muscles = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
