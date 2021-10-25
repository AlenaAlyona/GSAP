<template>
  <div class="basics">
    <div class="container-images">
      <img class="img" src="../assets/images/cat.svg" alt="chat" />
      <img class="img" src="../assets/images/fuji.svg" alt="mount fuji" />
      <img class="img" src="../assets/images/ice-cream.svg" alt="ice cream" />
    </div>

    <h1 class="title">Welcome to the sandbox.</h1>
    <p class="txt">Let's play with Greensock.</p>

    <!-- Stagger -->

    <div class="container-btns">
      <button class="btn">CONFIRM</button>
      <button class="btn">CONFIRM</button>
      <button class="btn">CONFIRM</button>
      <button class="btn">CONFIRM</button>
      <button class="btn">CONFIRM</button>
      <button class="btn">CONFIRM</button>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Basics",

  mounted() {
    // const img1 = document.querySelector(".img1");
    gsap.from(".img", {
      autoAlpha: 0,
      y: -100,
      ease: "power4",
      duration: 2,
      stagger: {
        each: 0.5,
        from: "center",
      },
    });
  },
};
</script>

<style scoped>
.basics {
  background: #222;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.container-images {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-top: 5vh;
}

.img {
  width: 20%;
  height: auto;
  flex-shrink: 1;
  margin: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5vh;
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
  img {
    width: 30%;
    margin: 0px;
  }
  h1 {
    margin-top: 50px;
  }
}
</style>
