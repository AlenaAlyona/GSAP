<template>
  <div class="image-box b1">
    <img src="@/assets/scroll/image/img1.jpg" alt="mug on a book" />
  </div>

  <div class="image-box b2">
    <img src="@/assets/scroll/image/img2.jpg" alt="red forest" />
  </div>
</template>

<style scoped>
.image-box {
  position: relative;
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  object-fit: cover;
  height: 600px;
  width: 400px;
}

.b1 {
  background-color: #e27d60;
}

.b2 {
  background-color: #85cdca;
}
</style>
