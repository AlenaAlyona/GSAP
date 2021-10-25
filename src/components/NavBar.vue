<template>
  <div class="navbar">
    <div class="menu-open">menu</div>
    <div class="nav-container">
      <div class="menu-close">close</div>
      <nav class="menu">
        <div class="menu-item">
          <router-link to="/" class="menu-item-link">Home</router-link>
          <img class="menu-item-img" src="@/assets/images/lain.jpeg" />
          <div class="marquee">
            <div class="marquee-inner">
              <span>{{ marqueeInnerText("Home") }}</span>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <router-link to="/basics" class="menu-item-link"
            >The Basics of GreenSock</router-link
          >
          <img class="menu-item-img" src="@/assets/images/lain.jpeg" />
          <div class="marquee">
            <div class="marquee-inner">
              <span>{{ marqueeInnerText("The Basics of GreenSock") }}</span>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <router-link to="/" class="menu-item-link">Showcase Two</router-link>
          <img class="menu-item-img" src="@/assets/images/lain.jpeg" />
          <div class="marquee">
            <div class="marquee-inner">
              <span>{{ marqueeInnerText("Showcase Two") }}</span>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <router-link to="/" class="menu-item-link"
            >Showcase Three</router-link
          >
          <img class="menu-item-img" src="@/assets/images/lain.jpeg" />
          <div class="marquee">
            <div class="marquee-inner">
              <span>{{ marqueeInnerText("Showcase Three") }}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Expo } from "gsap";

export default {
  name: "NavBar",

  computed: {
    marqueeInnerText() {
      return (title) => new Array(50).fill(title).join(" — ");
    },
  },

  mounted() {
    const t1 = new TimelineMax({ paused: true });

    t1.to(".nav-container", 1, {
      left: 0,
      ease: Expo.easeInOut,
    });

    t1.staggerFrom(
      ".menu > div",
      0.8,
      { y: 100, opacity: 0, ease: Expo.easeOut },
      "0.1",
      "-=0.4"
    );

    t1.reverse();
    document
      .getElementsByClassName("menu-open")[0]
      .addEventListener("click", (e) => {
        t1.reversed(!t1.reversed());
        this.$emit("click", e);
      });

    document
      .getElementsByClassName("menu-close")[0]
      .addEventListener("click", (e) => {
        t1.reversed(!t1.reversed());
        this.$emit("click", e);
      });

    Array.from(document.getElementsByClassName("menu-item-link")).forEach(
      (el) => {
        el.addEventListener("click", (e) => {
          t1.reversed(!t1.reversed());
          this.$emit("click", e);
        });
      }
    );
  },
};
</script>

<style scoped>
.navbar {
  position: relative;
  z-index: 1;
}

.menu-open {
  color: #fff;
}

.menu-open,
.menu-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 40px;
  font-size: 20px;
  cursor: pointer;
}

.socials {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 40px 100px;
}

.socials span {
  text-transform: uppercase;
  margin: 0 20px;
  letter-spacing: 0px;
}

.nav-container {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow: scroll;
}

.menu-item {
  position: relative;
  padding: 0 6vw;
}

.menu-item-link {
  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: opacity 0.4s;
  margin: 10px;
  text-decoration: none;
  color: #161616;
}

.menu-item-link::before {
  all: initial;
  counter-increment: menu;
  position: absolute;
  bottom: 60%;
  left: 0;
  pointer-events: none;
}

.menu-item-link:hover {
  transition-duration: 0.1s;
  opacity: 0;
}

.menu-item-img {
  z-index: 2;
  pointer-events: none;
  position: absolute;
  height: 12vh;
  max-height: 600px;
  opacity: 0;
  left: 8%;
  top: 10%;
  transform: scale(0);
}

.menu-item-link:hover + .menu-item-img {
  opacity: 1;
  transform: scale(1);
  transition: all 0.4s;
}

.menu {
  padding-top: 10vh;
  padding-bottom: 5vh;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  font-size: 7vw;
}

.marquee {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  color: rgb(214, 214, 214);
  pointer-events: none;
}

.marquee-inner {
  width: fit-content;
  display: flex;
  position: relative;
  opacity: 0;
  transition: all 0.1s;
  transform: translateX(60px);
}

.menu-item-link:hover ~ .marquee .marquee-inner {
  opacity: 1;
  transform: translateX(0px);
  transition-duration: 0.4s;
}

.menu-item-link,
.marquee span {
  white-space: nowrap;
  font-size: 7vw;
  padding: 0 1vw;
  line-height: 1.15;
}

.marquee span {
  font-style: italic;
}
</style>
