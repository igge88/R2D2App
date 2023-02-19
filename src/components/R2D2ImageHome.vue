<script setup></script>

<template>
  <div class="title">
    <h5>
      Hi, how nice of you to come by! My name is R2-D2 I'm a astromech droid,
      probably the best one out there! If not, I'm surely the most handsome..
      <br /><br />
      Anyways.. lets count the stars!
    </h5>
  </div>
  <div class="R2D2-image">
    <img src="../assets/imgs/R2D2Image.png" alt="R2D2" />
  </div>
</template>

<style scoped>
.R2D2-image {
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 864px) {
  .R2D2-image {
    position: absolute;
    top: 70%;
    left: 35%;
    transform: translate(-50%, -50%);
  }
}

.title {
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: "Courier New", Courier, monospace;
}
@media only screen and (max-width: 601px) {
  .title {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Courier New", Courier, monospace;
  }
}
</style>
