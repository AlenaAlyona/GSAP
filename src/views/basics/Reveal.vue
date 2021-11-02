<template>
  <div class="reveal-project">
    <nav>
      <img
        src="@/assets/basics/reveal/barrel.svg"
        alt="logo château"
        class="logo barrel nav-img"
      />
      <div class="container-nav">
        <a href="#">HOME</a>
        <a href="#">WINES</a>
        <a href="#">CONTACT</a>
      </div>
      <img
        class="nav-img"
        src="@/assets/basics/reveal/leaf.svg"
        alt="logo feuille"
      />
    </nav>

    <div class="home">
      <div class="overlay"></div>
      <video
        id="backVideo"
        autoplay
        loop
        playsinline
        src="@/assets/basics/reveal/grappe-video.mp4"
      ></video>
      <div class="home-content">
        <h1 class="home-title">Exceptional vineyards.</h1>
        <div class="middle-line"></div>
        <img
          class="home-content-img"
          src="@/assets/basics/reveal/grape.svg"
          alt=""
        />
        <button>DISCOVER</button>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Reveal",

  data() {
    return {
      navLinks: null,
      imgsNav: null,
      title: null,
      verticalLine: null,
      grapesLogo: null,
      homeBtn: null,
    };
  },

  methods: {
    revealAnimation(
      title,
      verticalLine,
      grapesLogo,
      homeBtn,
      navLinks,
      imgsNav
    ) {
      const TLFade = gsap.timeline({ paused: true });
      TLFade.from(title, { autoAlpha: 0, y: -50, delay: 0.2 })
        .from(verticalLine, { autoAlpha: 0 }, "-=0.2")
        .from(grapesLogo, { autoAlpha: 0, y: -50 }, "-=0.2")
        .from(homeBtn, { autoAlpha: 0, y: -50 }, "-=0.2")
        .from(
          navLinks,
          { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 },
          "-=0.2"
        )
        .from(imgsNav, { autoAlpha: 0, y: -50 });

      setTimeout(() => {
        TLFade.restart();
      }, 1500);
    },
  },

  mounted() {
    this.navLinks = document.querySelectorAll(".container-nav a");
    this.imgsNav = document.querySelectorAll(".nav-img");
    this.title = document.querySelector(".home-title");
    this.verticalLine = document.querySelector(".middle-line");
    this.grapesLogo = document.querySelector(".home-content-img");
    this.homeBtn = document.querySelector(".home-content button");
    window.addEventListener(
      "load",
      this.revealAnimation(
        this.title,
        this.verticalLine,
        this.grapesLogo,
        this.homeBtn,
        this.navLinks,
        this.imgsNav
      )
    );
  },
  beforeUnmount() {
    window.removeEventListener(
      "load",
      this.revealAnimation(
        this.title,
        this.verticalLine,
        this.grapesLogo,
        this.homeBtn,
        this.navLinks,
        this.imgsNav
      )
    );
  },
};
</script>

<style scoped>
.reveal-project {
  font-family: Antic Slab, sans-serif;
  background: #f1f1f1;
}

nav {
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgb(80, 13, 80),
    rgba(238, 130, 238, 0)
  );
}
.container-nav {
  display: flex;
}
nav a {
  color: #fff;
  display: block;
  text-decoration: none;
  font-size: 24px;
  margin: 0 15px;
  visibility: hidden;
}
nav img:nth-child(1) {
  margin-right: auto;
  margin-left: 20px;
}
nav img:nth-child(3) {
  margin-left: auto;
  margin-right: 20px;
}
nav img {
  width: 30px;
  visibility: hidden;
}
.home {
  width: 100%;
  height: 100%;
  position: fixed;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.603);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}

#backVideo {
  object-fit: cover;
  width: 100%;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

@media (min-aspect-ratio: 16/9) {
  #backVideo {
    width: 100%;
    height: auto;
  }
}

@media (max-aspect-ratio: 16/9) {
  #backVideo {
    width: auto;
    height: 100%;
  }
}

.home-content {
  margin: auto;
  position: relative;
  color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
}
.home-content h1 {
  font-family: Playfair Display, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-size: 50px;
  line-height: 1.1;
  visibility: hidden;
}
.middle-line {
  height: 150px;
  width: 2px;
  background: #fff;
  margin: 40px auto;
  position: relative;
  visibility: hidden;
}

.home-content img {
  width: 75px;
  fill: white;
  display: block;
  margin: 0 auto;
  visibility: hidden;
}
.home-content button {
  display: block;
  font-size: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  margin: 50px auto 0;
  padding: 16px 30px;
  cursor: pointer;
  visibility: hidden;
}
</style>
