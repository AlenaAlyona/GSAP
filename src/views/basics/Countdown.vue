<template>
  <div class="countdown-project">
    <div class="vertical-slider">
      <p>3 ✌️</p>
      <p>2 🍓</p>
      <p>1 💥</p>
      <p>GO ⚽</p>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Countdown",

  methods: {
    countdownAnimation() {
      const TL = gsap.timeline({ repeat: -1, paused: true });

      TL.from(".vertical-slider p", {
        y: 100,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.75,
      }).to(
        ".vertical-slider p",
        { y: -100, autoAlpha: 0, duration: 0.75, stagger: 0.75 },
        0.75
      );

      setTimeout(() => {
        TL.restart();
      }, 1500);
    },
  },

  mounted() {
    window.addEventListener("load", this.countdownAnimation());
  },
  beforeUnmount() {
    window.removeEventListener("load", this.countdownAnimation());
  },
};
</script>

<style scoped>
.countdown-project {
  font-family: Arial, Helvetica, sans-serif;
  background: #222;
  height: 100vh;
}

.vertical-slider {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.vertical-slider p {
  position: absolute;
  visibility: hidden;
  font-size: 70px;
  text-align: center;
  width: 100%;
  color: #f1f1f1;
}
</style>
