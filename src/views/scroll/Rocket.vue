<template>
  <div class="rocket-project">
    <div class="rocket-home">
      <h1>The Falcon Rocket 3</h1>
    </div>

    <div class="rocket-section">
      <div class="rocket-container-scroll">
        <div class="rocket-block rocket-block1">
          <h2>COCKPIT -</h2>
          <img
            src="@/assets/scroll/rocket/toprocket.png"
            alt="top rocket"
            class="top-rocket"
          />
          <p>Placement of astronauts.</p>
        </div>
        <div class="rocket-block rocket-block2">
          <h2>MACHINERY -</h2>
          <img
            src="@/assets/scroll/rocket/midrocket.png"
            alt="mid rocket"
            class="mid-rocket"
          />
          <p>Embedded electronics.</p>
        </div>
        <div class="rocket-block rocket-block3">
          <h2>REACTOR I -</h2>
          <img
            src="@/assets/scroll/rocket/botrocket.png"
            alt="bot rocket"
            class="bottom-rocket"
          />
          <p>Main reactor.</p>
        </div>
        <div class="rocket-block rocket-block4">
          <h2>REACTOR II / III -</h2>
          <img
            src="@/assets/scroll/rocket/supply.png"
            alt="supply rocket"
            class="supply-rocket"
          />
          <p>Reusable reactors.</p>
        </div>
      </div>
    </div>
    <div class="rocket-last-section"></div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Rocket",

  mounted() {
    const allBlocs = document.querySelectorAll(".rocket-block");

    const offsets = [105, 206, 1200];

    gsap.utils
      .toArray([".rocket-block2", ".rocket-block3", ".rocket-block4"])
      .forEach((block, index) => {
        gsap.to(block, {
          y: 0,
          ease: "linear",
          scrollTrigger: {
            trigger: ".rocket-container-scroll",
            start: "top bottom-=50%",
            end: `+=${offsets[index]}`,
            scrub: true,
          },
        });
      });

    allBlocs.forEach((block, index) => {
      if (index === 3) {
        ScrollTrigger.create({
          trigger: block,
          start: "top+=150 center",
          onEnter: () => {
            block.classList.add("active");
          },
          onLeaveBack: () => {
            block.classList.remove("active");
          },
        });
        return;
      }

      ScrollTrigger.create({
        trigger: block,
        start: "top center+=10%",
        onEnter: () => {
          block.classList.add("active");
        },
        onLeaveBack: () => {
          block.classList.remove("active");
        },
      });
    });
  },
};
</script>

<style scoped>
.rocket-project {
  font-family: Open Sans, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

.rocket-home {
  min-height: 100vh;
  background: lightsteelblue;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rocket-home h1 {
  font-size: clamp(35px, 3vw, 75px);
  text-align: center;
  padding-bottom: 50px;
}

.rocket-section {
  background: #333;
  color: #f1f1f1;
  padding-top: 100px;
}

.rocket-block {
  display: flex;
  margin: 0 auto;
  width: auto;
  max-width: 800px;
  padding-bottom: 100px;
}
.rocket-block2 {
  transform: translateY(-105px);
}
.rocket-block3 {
  transform: translateY(-206px);
}
.rocket-block4 {
  transform: translateY(-848px);
}

.rocket-block img {
  display: block;
  margin: 0 auto;
  height: auto;
  width: 150px;
}

.rocket-block h2,
.rocket-block p {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  width: 50%;
}

.rocket-block p {
  font-size: 18px;
}

.rocket-block h2 {
  font-family: Quicksand, sans-serif;
  font-weight: 300;
  text-align: right;
  font-size: 30px;
}
.rocket-block4 h2 {
  padding-right: 10px;
}

.rocket-bloc4k p {
  padding-left: 10px;
}

.rocket-block.active h2,
.rocket-block.active p {
  opacity: 1;
}

.rocket-last-section {
  min-height: 10vh;
  background: lightsteelblue;
}

@media screen and (max-width: 600px) {
  .rocket-block p {
    font-size: 12px;
  }

  .rocket-block h2 {
    font-size: 13px;
  }
}
</style>
