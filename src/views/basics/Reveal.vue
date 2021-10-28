<template>
  <div class="reveal-project">
    <nav>
      <img
        src="../assets/reveal/barrel.svg"
        alt="logo château"
        class="logo barrel nav-img"
      />
      <div class="container-nav">
        <a href="#">HOME</a>
        <a href="#">WINES</a>
        <a href="#">CONTACT</a>
      </div>
      <img class="nav-img" src="../assets/reveal/leaf.svg" alt="logo feuille" />
    </nav>

    <div class="home">
      <div class="overlay"></div>
      <video autoplay muted loop>
        <source src="../assets/reveal/grappe-video.mp4" type="video/mp4" />
      </video>
      <div class="home-content">
        <h1 class="home-title">Exceptional vineyards.</h1>
        <div class="middle-line"></div>
        <img class="home-content-img" src="../assets/reveal/grape.svg" alt="" />
        <button>DISCOVER</button>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Reveal",

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
        .to(verticalLine, { height: 150 }, "-=0.2")
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
    const navLinks = document.querySelectorAll(".container-nav a");
    const imgsNav = document.querySelectorAll(".nav-img");
    const title = document.querySelector(".home-title");
    const verticalLine = document.querySelector(".middle-line");
    const grapesLogo = document.querySelector(".home-content-img");
    const homeBtn = document.querySelector(".home-content button");
    window.addEventListener(
      "load",
      this.revealAnimation(
        title,
        verticalLine,
        grapesLogo,
        homeBtn,
        navLinks,
        imgsNav
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
  width: 40px;
  visibility: hidden;
}
.home {
  width: 100%;
  height: 100%;
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

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.home-content {
  width: 600px;
  margin: auto;
  position: relative;
  top: 10vh;
  color: #fff;
  z-index: 2;
}
.home-content h1 {
  font-family: Playfair Display, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-size: 50px;
  line-height: 1.1;
  visibility: hidden;
}
.home-content .middle-line {
  height: 0px;
  width: 2px;
  background: #fff;
  margin: 40px auto;
  position: relative;
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
