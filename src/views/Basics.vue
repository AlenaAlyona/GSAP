<template>
  <div class="basics">
    <div class="container-images">
      <img class="img one" src="../assets/basics/cat.svg" alt="chat" />
      <img class="img two" src="../assets/basics/fuji.svg" alt="mount fuji" />
      <img
        class="img three"
        src="../assets/basics/ice-cream.svg"
        alt="ice cream"
      />
    </div>

    <h1 class="title">Welcome to the sandbox.</h1>
    <p class="txt">Let's play with Greensock.</p>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Basics",

  mounted() {
    const TL = gsap.timeline({
      defaults: { duration: 1, ease: "power4.out" },
      repeat: -1,
      yoyo: true,
      paused: true,
    });

    TL.from(".one", { autoAlpha: 0, y: -50 });
    TL.from(".two", { autoAlpha: 0, y: -50 });
    TL.from(".three", { autoAlpha: 0, y: -50 });
    TL.from(".title", { autoAlpha: 0, y: -50 }).add(() =>
      console.log("END OF TIMELINE")
    );
    TL.from(".txt", { autoAlpha: 0, y: -50 });

    //  TL.from(".two", { autoAlpha: 0, duration: 1, y: -50 }, "-=0.75");
    // parameters can be:
    // "-=0.75" or "+=0.75" - position parameter
    // 3 - absolute parameter
    // ">" or "<" signs

    setTimeout(() => {
      TL.restart();
    }, 2000);
  },
};
</script>

<style scoped>
.basics {
  height: 100vh;
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
  visibility: hidden;
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
