<template>
  <div class="basics">
    <div class="container-images">
      <img class="img1" src="../assets/images/cat.svg" alt="chat" />
      <img class="img2" src="../assets/images/fuji.svg" alt="mount fuji" />
      <img class="img3" src="../assets/images/ice-cream.svg" alt="ice cream" />
    </div>

    <h1 class="title">Welcome to the sandbox.</h1>
    <p class="txt">Let's play with Greensock.</p>

    <!-- Stagger -->

    <!-- <div class="container-btns">
    <button class="btn">CONFIRM</button>
    <button class="btn">CONFIRM</button>
    <button class="btn">CONFIRM</button>
    <button class="btn">CONFIRM</button>
    <button class="btn">CONFIRM</button>
    <button class="btn">CONFIRM</button>
    </div>  -->
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Basics",

  mounted() {
    const img1 = document.querySelector(".img1");
    gsap.from(img1, {
      autoAlpha: 0,
      y: -100,
      rotation: 90,
      ease: "back.out(1.7)",
      duration: 2,
    });
  },
};
</script>

<style scoped>
.basics {
  background: #222;
  overflow: hidden;
  height: 90vh;
  padding-top: 10vh;
}

.container-images {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
}

img {
  width: 20%;
  height: auto;
  flex-shrink: 1;
  margin: 20px;
}

.img1 {
  visibility: hidden;
}

h1,
p {
  text-align: center;
  color: #f1f1f1;
  line-height: 1.2;
}
h1 {
  margin-top: 50px;
  font-size: clamp(25px, 7vw, 45px);
  padding: 0 10px;
  font-family: Martel Sans, sans-serif;
}
p {
  margin-top: 10px;
  font-size: clamp(18px, 5vw, 30px);
  padding: 0 10px;
  font-family: Montserrat, sans-serif;
}

.container-btns {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container-btns button {
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 20px;
  background: transparent;
  border: 1px solid #f1f1f1;
  color: #f1f1f1;
  cursor: pointer;
}

@media screen and (max-width: 910px) {
  .container-images {
    margin-top: 20px;
  }
  img {
    width: 30%;
    margin: 0px;
  }
  h1 {
    margin-top: 50px;
  }
}
</style>
