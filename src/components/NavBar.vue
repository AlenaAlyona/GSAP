<template>
  <div class="navbar">
    <div class="menu-open">menu</div>
    <div class="nav-container">
      <div class="menu-close">close</div>
      <nav class="menu">
        <div class="menu-item">
          <router-link
            id="home-nav-link"
            to="/"
            class="menu-item-link"
            @click="closeAll"
            >Home</router-link
          >
          <img class="menu-item-img" src="@/assets/navigation/home.png" />
          <div class="marquee">
            <div class="marquee-inner">
              <span>{{ marqueeInnerText("Home") }}</span>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <a
            @click="switchBasicsVisibility"
            class="menu-item-link-non-closing"
            :class="[basicsLinkActive ? 'active-section-link' : '']"
            >The Basics of Greensock</a
          >
          <img class="menu-item-img" src="@/assets/navigation/greensock.png" />
          <div class="marquee">
            <div class="marquee-inner">
              <span>{{ marqueeInnerText("The Basics of Greensock") }}</span>
            </div>
          </div>
          <ul v-show="basicsVisible" class="greensock-projects-list">
            <li class="menu-item">
              <router-link
                to="/reveal"
                class="basics menu-item-link"
                id="listed-item"
                >Reveal animation</router-link
              >
              <img class="menu-item-img" src="@/assets/navigation/reveal.png" />
              <div class="marquee">
                <div class="marquee-inner">
                  <span>{{ marqueeInnerText("Reveal animation") }}</span>
                </div>
              </div>
            </li>
            <li class="menu-item">
              <router-link
                to="/loader"
                class="basics menu-item-link"
                id="listed-item"
                >Loading animation</router-link
              >
              <img class="menu-item-img" src="@/assets/navigation/loader.png" />
              <div class="marquee">
                <div class="marquee-inner">
                  <span>{{ marqueeInnerText("Loading animation") }}</span>
                </div>
              </div>
            </li>
            <li class="menu-item">
              <router-link
                to="/countdown"
                class="basics menu-item-link"
                id="listed-item"
                >Countdown animation</router-link
              >
              <img
                class="menu-item-img"
                src="@/assets/navigation/countdown.png"
              />
              <div class="marquee">
                <div class="marquee-inner">
                  <span>{{ marqueeInnerText("Countdown animation") }}</span>
                </div>
              </div>
            </li>
            <li class="menu-item">
              <router-link
                to="/slider"
                class="basics menu-item-link"
                id="listed-item"
                >Horizontal slider animation</router-link
              >
              <img class="menu-item-img" src="@/assets/navigation/slider.png" />
              <div class="marquee">
                <div class="marquee-inner">
                  <span>{{
                    marqueeInnerText("Horizontal slider animation")
                  }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="menu-item">
          <a
            to="/"
            @click="switchScrollVisibility"
            class="menu-item-link-non-closing"
            :class="[scrollLinkActive ? 'active-section-link' : '']"
            >Scroll Animation</a
          >
          <img
            class="menu-item-img"
            src="@/assets/navigation/scrolltrigger.png"
          />
          <div class="marquee">
            <div class="marquee-inner">
              <span>{{ marqueeInnerText("Scroll Animation") }}</span>
            </div>
          </div>
          <ul v-show="scrollVisible" class="greensock-projects-list">
            <li class="menu-item">
              <router-link
                to="/multiple"
                class="scroll menu-item-link"
                id="listed-item"
                >Multiple scroll animation</router-link
              >
              <img
                class="menu-item-img"
                src="@/assets/navigation/multiple.png"
              />
              <div class="marquee">
                <div class="marquee-inner">
                  <span>{{
                    marqueeInnerText("Multiple scroll animation")
                  }}</span>
                </div>
              </div>
            </li>
            <li v-if="false" class="menu-item">
              <router-link
                to="/pin"
                class="scroll menu-item-link"
                id="listed-item"
                >Scroll with pin animation</router-link
              >
              <img class="menu-item-img" src="@/assets/navigation/pin.png" />
              <div class="marquee">
                <div class="marquee-inner">
                  <span>{{
                    marqueeInnerText("Scroll with pin animation")
                  }}</span>
                </div>
              </div>
            </li>
            <li class="menu-item">
              <router-link
                to="/rocket"
                class="scroll menu-item-link"
                id="listed-item"
                >Scroll Rocket</router-link
              >
              <img class="menu-item-img" src="@/assets/navigation/rocket.png" />
              <div class="marquee">
                <div class="marquee-inner">
                  <span>{{ marqueeInnerText("Scroll Rocket") }}</span>
                </div>
              </div>
            </li>
            <li class="menu-item">
              <router-link
                to="/image"
                class="scroll menu-item-link"
                id="listed-item"
                >CSS scrollable image</router-link
              >
              <img class="menu-item-img" src="@/assets/navigation/image.png" />
              <div class="marquee">
                <div class="marquee-inner">
                  <span>{{ marqueeInnerText("CSS scrollable image") }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "NavBar",

  data() {
    return {
      basicsVisible: false,
      scrollVisible: false,
      basicsLinkActive: false,
      scrollLinkActive: false,
    };
  },

  computed: {
    marqueeInnerText() {
      return (title) => new Array(50).fill(title).join(" — ");
    },
  },

  methods: {
    switchBasicsVisibility() {
      return (this.basicsVisible = !this.basicsVisible);
    },
    switchScrollVisibility() {
      return (this.scrollVisible = !this.scrollVisible);
    },
    closeAll() {
      this.basicsVisible = false;
      this.scrollVisible = false;
    },
    isBasicsLinkActive() {
      this.basicsLinkActive = Array.from(
        document.getElementsByClassName("basics")
      ).some((el) => el.classList.contains("router-link-active"));
    },
    isScrollLinkActive() {
      this.scrollLinkActive = Array.from(
        document.getElementsByClassName("scroll")
      ).some((el) => el.classList.contains("router-link-active"));
    },
    onClick(e, TL) {
      this.isBasicsLinkActive();
      this.isScrollLinkActive();
      TL.reversed(!TL.reversed());
      this.$emit("click", e);
    },
  },

  mounted() {
    const TL = gsap.timeline({ paused: true });

    TL.to(".nav-container", 1, {
      left: 0,
      ease: "Power2.easeInOut",
    });

    TL.staggerFrom(
      ".menu > div",
      0.8,
      { y: 100, opacity: 0, ease: "Power2.easeOut" },
      "0.1",
      "-=0.4"
    );

    TL.reverse();
    document
      .getElementsByClassName("menu-open")[0]
      .addEventListener("click", (e) => this.onClick(e, TL));

    document
      .getElementsByClassName("menu-close")[0]
      .addEventListener("click", (e) => this.onClick(e, TL));

    Array.from(document.getElementsByClassName("menu-item-link")).forEach(
      (el) => {
        el.addEventListener("click", (e) => this.onClick(e, TL));
      }
    );
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  z-index: 5;
  top: 0;
}

a#home-nav-link.router-link-active.router-link-exact-active {
  text-decoration: underline !important;
  text-decoration-style: solid;
}

.router-link-active,
.active-section-link {
  text-decoration: underline !important;
}

.router-link-active {
  text-decoration-style: dashed !important;
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

.menu-item-link,
.menu-item-link-non-closing {
  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: opacity 0.4s;
  margin: 10px;
  text-decoration: none;
  color: #161616;
}

#listed-item {
  font-size: 4vw;
}

.menu-item-link::before,
.menu-item-link-non-closing::before {
  all: initial;
  counter-increment: menu;
  position: absolute;
  bottom: 60%;
  left: 0;
  pointer-events: none;
}

.menu-item-link:hover,
.menu-item-link-non-closing:hover {
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
  transform: scale(0);
}

.menu-item-link:hover + .menu-item-img,
.menu-item-link-non-closing:hover + .menu-item-img {
  opacity: 1;
  transform: scale(1);
  transition: all 0.4s;
}

.greensock-projects-list {
  margin: 0;
  list-style-type: none;
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

.menu-item-link:hover ~ .marquee .marquee-inner,
.menu-item-link-non-closing:hover ~ .marquee .marquee-inner {
  opacity: 1;
  transform: translateX(0px);
  transition-duration: 0.4s;
}

.menu-item-link,
.menu-item-link-non-closing,
.marquee span {
  white-space: nowrap;
  font-size: 7vw;
  padding: 0 1vw;
  line-height: 1.15;
}

.marquee span {
  font-style: italic;
}

@media (max-width: 1024px) {
  .menu-item-img {
    height: 8vh;
  }
}

@media (max-width: 500px) {
  .menu-item-img {
    height: 8vh;
  }
}

@media (max-width: 411px) {
  .menu-item-img {
    height: 4vh;
  }
}
</style>
