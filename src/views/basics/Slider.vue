<template>
  <div class="slider-project">
    <div class="slider-wrapper">
      <div class="slider-counter">
        <span>1</span> /
        <span>3</span>
      </div>
      <div class="slider-container">
        <div class="slider-container-btns">
          <button class="slider-btn-prev">
            <img
              src="@/assets/basics/slider/left-chevron.svg"
              alt="left chevron"
            />
          </button>
          <button class="slider-btn-next">
            <img
              src="@/assets/basics/slider/right-chevron.svg"
              alt="right chevron"
            />
          </button>
        </div>
        <div class="slider-slide s1">
          <h2>EXPLORE</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            iusto!
          </p>
        </div>
        <div class="slider-slide s2">
          <h2>FIND FREEDOM</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            iusto!
          </p>
        </div>
        <div class="slider-slide s3">
          <h2>ENJOY NATURE</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            iusto!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Slider",
  data() {
    return {
      btnRight: null,
      btnLeft: null,
      slides: null,
      indexIndication: null,
      container: null,
      index: 0,
    };
  },

  methods: {
    animRight() {
      const TLRight = gsap.timeline();

      TLRight.set(this.indexIndication, {
        innerText: this.index + 1,
      }).to(this.slides[this.index], { duration: 0.6, x: 0 });
    },
    animLeft() {
      const TLLEFT = gsap.timeline();

      TLLEFT.set(this.indexIndication, {
        innerText: this.index,
      }).to(this.slides[this.index], { duration: 0.6, x: "-100%" });
    },

    negation() {
      gsap.to(this.container, {
        keyframes: [
          { duration: 0.1, x: -4 },
          { duration: 0.1, x: 4 },
          { duration: 0.1, x: -4 },
          { duration: 0.1, x: 0 },
        ],
      });
    },

    handleDirection(direction) {
      if (direction === "next") {
        if (this.index === this.slides.length - 1) {
          this.negation();
          return;
        }

        this.index++;
        this.animRight();
      } else if (direction === "prev") {
        if (this.index === 0) {
          this.negation();
          return;
        }

        this.animLeft();
        this.index--;
      }
    },
  },

  mounted() {
    this.btnRight = document.querySelector(".slider-btn-next");
    this.btnLeft = document.querySelector(".slider-btn-prev");
    this.container = document.querySelector(".slider-wrapper");
    this.slides = Array.from(document.querySelectorAll(".slider-slide"));
    this.indexIndication = document.querySelector(
      ".slider-counter span:nth-child(1)"
    );
    this.btnRight.addEventListener("click", () => {
      this.handleDirection("next");
    });

    this.btnLeft.addEventListener("click", () => {
      this.handleDirection("prev");
    });
  },
  beforeUnmount() {
    this.btnRight.removeEventListener("click", () => {
      this.handleDirection("next");
    });
    this.btnLeft.removeEventListener("click", () => {
      this.handleDirection("prev");
    });
  },
};
</script>

<style scoped>
.slider-project {
  font-family: Arial, Helvetica, sans-serif;
  background: #222;
  height: 100vh;
  overflow: hidden;
  padding: 0 20px;
}

.slider-wrapper {
  position: relative;
  height: 500px;
  max-width: 900px;
  margin: 15vh auto 0;
}

.slider-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.slider-counter {
  position: absolute;
  z-index: 2;
  right: 0;
  width: 45px;
  height: 45px;
  background: rgba(253, 249, 246, 0.2);
  color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.slider-counter span:nth-child(1) {
  font-size: 26px;
}
.slider-counter span:nth-child(2) {
  font-size: 16px;
}

.slider-container-btns {
  position: absolute;
  display: flex;
  padding-bottom: 5vh;
  bottom: 0;
  z-index: 1;
  padding-left: 20px;
}
.slider-container-btns button {
  padding: 10px 12px;
  border-radius: 3px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  outline: none;
  cursor: pointer;
}
.slider-container-btns button:active {
  transform: scale(1.05);
}
.slider-container-btns button img {
  width: 20px;
}
.slider-container-btns button:nth-child(1) {
  margin-right: 5px;
}

.slider-slide {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  color: #fff;
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.s1 {
  transform: translateX(0%);
}
.slider-slide h2 {
  font-size: 45px;
  text-transform: uppercase;
  padding-left: 20px;
  padding-bottom: 2vh;
  margin: 0;
}

.slider-slide hr {
  border: none;
  width: 200px;
  height: 1px;
  background: #fff;
  margin: 0 0 0 21px;
  display: block;
}

.slider-slide p {
  padding-bottom: 12vh;
  padding-left: 20px;
}
.s1 {
  background-image: url(../../assets/basics/slider/forest1.jpg);
}
.s2 {
  background-image: url(../../assets/basics/slider/forest2.jpg);
}
.s3 {
  background-image: url(../../assets/basics/slider/forest3.jpg);
}
</style>
