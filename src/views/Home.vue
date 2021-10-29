<template>
  <div class="home">
    <a
      href="https://github.com/AlenaAlyona"
      target="_blank"
      class="home-link github"
      >github</a
    >
    <img
      src="@/assets/home/github.jpeg"
      class="home-img"
      alt="github profile picture"
    />
    <a
      href="https://www.linkedin.com/in/alena-izakson/"
      target="_blank"
      class="home-link"
      >linkedin</a
    >
  </div>
</template>

<script>
export default {
  name: "Home",
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
  color: #fff;
  font-size: 50px;
  padding: 10px;
  z-index: 2;
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
