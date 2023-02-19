<template>
  <div class="footer-container">
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col item social">
              <a href="#"><i class="bi bi-twitter"></i></a
              ><a href="#"><i class="bi bi-facebook"></i></a
              ><a href="#"><i class="bi bi-linkedin"></i></a
              ><a href="#"><i class="bi bi-github"></i></a>
            </div>
          </div>
          <p class="copyright">
            Made with <i class="bi bi-heart-fill"></i> by Ignacio Tapia
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

.footer-container {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.footer-dark {
  padding: 20px 0;
  color: #f0f9ff;
  background-color: rgb(47, 10, 48), transparent;
}

.footer-dark .item.social {
  text-align: center;
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #f0f9ff;
  margin: 0 8px;
  color: #f0f9ff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.4;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
