<template>
  <div class="menu-open">menu</div>
  <div class="nav-container">
    <div class="menu-close">close</div>
    <div class="socials">
      <span>github</span>
      <span>linkedin</span>
    </div>
    <nav class="menu">
      <div class="menu-item">
        <a class="menu-item-link">Home</a>
        <img class="menu-item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee-inner">
            <span>{{ marqueeInnerText("Home") }}</span>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <a class="menu-item-link">Showcase One</a>
        <img class="menu-item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee-inner">
            <span>{{ marqueeInnerText("Showcase One") }}</span>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <a class="menu-item-link">Showcase Two</a>
        <img class="menu-item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee-inner">
            <span>{{ marqueeInnerText("Showcase Two") }}</span>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <a class="menu-item-link">Showcase Three</a>
        <img class="menu-item-img" src="@/assets/images/lain.jpeg" />
        <div class="marquee">
          <div class="marquee-inner">
            <span>{{ marqueeInnerText("Showcase Three") }}</span>
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

<style scoped></style>
