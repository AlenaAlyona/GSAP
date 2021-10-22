<template>
  <div class="menu-open">menu</div>
  <div class="nav-container">
    <div class="menu-close">close</div>
    <nav class="menu">
      <div class="menu__item">
        <a class="menu__item-link">Home</a>
        <img class="menu__item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee__inner">
            <span>{{ marqueeInnerText("Home") }}</span>
          </div>
        </div>
      </div>
      <div class="menu__item">
        <a class="menu__item-link">Showcase One</a>
        <img class="menu__item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee__inner">
            <span>{{ marqueeInnerText("Showcase One") }}</span>
          </div>
        </div>
      </div>
      <div class="menu__item">
        <a class="menu__item-link">Showcase Two</a>
        <img class="menu__item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee__inner">
            <span>{{ marqueeInnerText("Showcase Two") }}</span>
          </div>
        </div>
      </div>
      <div class="menu__item">
        <a class="menu__item-link">Showcase Three</a>
        <img class="menu__item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee__inner">
            <span>{{ marqueeInnerText("Showcase Three") }}</span>
          </div>
        </div>
      </div>
      <div class="menu__item">
        <a class="menu__item-link">Showcase Four</a>
        <img class="menu__item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee__inner">
            <span>{{ marqueeInnerText("Showcase Four") }}</span>
          </div>
        </div>
      </div>
      <div class="menu__item">
        <a class="menu__item-link">Showcase Five</a>
        <img class="menu__item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee__inner">
            <span>{{ marqueeInnerText("Showcase Five") }}</span>
          </div>
        </div>
      </div>
      <div class="menu__item">
        <a class="menu__item-link">Showcase Six</a>
        <img class="menu__item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee__inner">
            <span>{{ marqueeInnerText("Showcase Six") }}</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  computed: {
    marqueeInnerText() {
      return (title) => new Array(50).fill(title).join(" — ");
    },
  },
};
</script>

<style scoped>
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
}

.menu__item {
  position: relative;
  padding: 0 6vw;
}

.menu__item-link {
  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: opacity 0.4s;
  margin: 10px;
}

.menu__item-link::before {
  all: initial;
  counter-increment: menu;
  position: absolute;
  bottom: 60%;
  left: 0;
  pointer-events: none;
}

.menu__item-link:hover {
  transition-duration: 0.1s;
  opacity: 0;
}

.menu__item-img {
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

.menu__item-link:hover + .menu__item-img {
  opacity: 1;
  transform: scale(1);
  transition: all 0.4s;
}

.menu {
  padding: 10vh 0 25vh;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  font-size: 7vw;
  overflow: scroll;
}

.marquee {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  color: rgb(214, 214, 214);
  pointer-events: none;
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  opacity: 0;
  transition: all 0.1s;
  transform: translateX(60px);
}

.menu__item-link:hover ~ .marquee .marquee__inner {
  opacity: 1;
  transform: translateX(0px);
  transition-duration: 0.4s;
}

.menu__item-link,
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
