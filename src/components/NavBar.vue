<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/"
        ><img src="../assets/imgs/NavLogo.png" class="img-fluid" alt="R2D2" />
        The Last Astromech Droid
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            The Last Astromech Droid
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/R2D2App"
                >R2-D2 Star App</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/ExerciseApp"
                >R2-D2 Exercise App</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/about"
                >About</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<style scoped>
.navbar {
  background-color: transparent;
}
.offcanvas-header {
  background-color: rgb(28, 4, 29);
}
.offcanvas-title {
  color: white;
}
.navbar-brand {
  color: white;
  font-family: monospace;
}

.navbar-toggler {
  background-color: white;
}
.btn-close {
  color: white;
  background-color: white;
}
.offcanvas-body {
  background-color: rgb(47, 10, 48);
  background-image: url(../assets/imgs/R2D2OffCanvas.png);
  background-position: center;
  background-repeat: no-repeat;
}

.nav-link {
  color: white;
}
</style>
