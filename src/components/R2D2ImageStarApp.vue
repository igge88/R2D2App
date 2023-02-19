<script setup></script>

<template>
  <div class="title">
    <h5>
      Want to know more about the stars?<br />
      <br />
      Let's have a look!
    </h5>
  </div>
  <div class="R2D2-image">
    <img src="../assets/imgs/R2D2Image.png" alt="R2D2" />
  </div>
</template>

<style scoped>
@media only screen and (max-width: 864px) {
  .R2D2-image {
    position: absolute;
    top: 60%;
    left: 35%;
    transform: translate(-50%, -50%);
  }
}
.R2D2-image {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
}
.title {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: "Courier New", Courier, monospace;
}
</style>
