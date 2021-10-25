<template>
  <div class="basics">
    <div class="container-images">
      <img class="img one" src="../assets/images/cat.svg" alt="chat" />
      <img class="img two" src="../assets/images/fuji.svg" alt="mount fuji" />
      <img
        class="img three"
        src="../assets/images/ice-cream.svg"
        alt="ice cream"
      />
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
    const imgOne = document.querySelector(".one");
    const tween = gsap.to(".two", { y: 200, duration: 5, paused: true });

    setTimeout(() => {
      // tween.resume();
      // tween.kill();
      // tween.delay(1);
      // tween.duration(2);
      tween.seek(2.5);
      tween.play();
    }, 2000);

    gsap.registerEffect({
      name: "imgAnimation",
      effect: (targets, config) => {
        return gsap.to(targets, {
          duration: config.duration,
          y: 200,
          scale: 1.4,
          rotation: 360,
        });
      },
      defaults: { duration: 2 },
    });
    gsap.effects.imgAnimation(imgOne, { duration: 5 });
    gsap.effects.imgAnimation(".three");
    gsap.to(".btn", {
      duration: 0.5,
      stagger: 0.2,
      x: "random(-100, 100, 10)", // <- or you can add an arrays of values like so random([20, 80, -10, 50, -70])"
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
  /* visibility: hidden; */
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
