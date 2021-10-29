<template>
  <div class="home">
    <a
      href="https://github.com/AlenaAlyona"
      target="_blank"
      class="home-link github"
      ><span>github</span><span class="home-link-underline"></span
    ></a>
    <img
      src="@/assets/home/github.jpeg"
      class="home-img"
      alt="github profile picture"
    />
    <a
      href="https://www.linkedin.com/in/alena-izakson/"
      target="_blank"
      class="home-link"
      ><span>linkedin</span><span class="home-link-underline"></span
    ></a>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Home",

  mounted() {
    const workLinks = document.querySelectorAll(".home-link");

    workLinks.forEach((link) => {
      const underline = link.querySelector(".home-link-underline");
      link.TL = gsap.timeline({ paused: true });

      link.TL.fromTo(
        underline,
        {
          width: "0%",
          left: "0%",
        },
        {
          width: "100%",
          duration: 1,
        }
      );

      link.TL.add("midway");

      link.TL.fromTo(
        underline,
        {
          width: "100%",
          left: "0%",
        },
        {
          width: "0%",
          left: "100%",
          duration: 1,
          immediateRender: false,
        }
      );

      link.addEventListener("mouseenter", () => {
        link.TL.tweenFromTo(0, "midway");
      });

      link.addEventListener("mouseleave", () => {
        link.TL.play();
      });
    });
  },
};
</script>

<style scoped>
.home {
  background: #161616;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.home-link {
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  color: #fff;
  font-size: 50px;
  padding: 10px;
  z-index: 2;
}

.home-link-underline {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: calc(1px + 0.6vw);
  background-color: #fff;
}

.home-img {
  z-index: 1;
  height: 150px;
  width: 150px;
  display: none;
  position: fixed;
  opacity: 0.5;
  padding-bottom: 150px;
  padding-left: 150px;
}

.github:hover + .home-img {
  display: block;
}
</style>
>
