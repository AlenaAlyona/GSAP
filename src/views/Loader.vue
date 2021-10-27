<template>
  <div class="loader-project">
    <div class="loader-container">
      <div class="loader-anim-bloc">
        <div class="loader-images-container">
          <div class="img-flip flip-img2"></div>
          <div class="img-flip flip-img1"></div>
          <div class="flip f2"></div>
        </div>

        <div class="loader-bloc-txt">
          <h2>Adamo.</h2>
        </div>
      </div>
    </div>

    <div class="loader-home">
      <div class="loader-overlay"></div>
      <video muted loop>
        <source src="@/assets/loader/highendcooking.mp4" type="video/mp4" />
      </video>
      <div class="loader-home-content">
        <h1>ADAMO EXPERIENCE.</h1>
        <div class="loader-middle-line"></div>
        <button>EXPLORE THE MENU</button>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Loader",

  methods: {
    loader() {
      const TLLoad = gsap.timeline({
        default: {
          ease: "power2",
        },
        paused: true,
      });

      TLLoad.to(".loader-images-container", {
        height: 400,
        duration: 1.3,
        delay: 0.4,
      })
        .to(".loader-bloc-txt", { height: "auto", duration: 0.6 }, "-=0.8")
        .to(".loader-bloc-txt h2", { y: 0 }, "-=0.6")
        .to(".f2", { y: 0, duration: 0.6 })
        .to(".flip-img1", { display: "none", duration: 0 })
        .to(".f2", { y: "-100%" })
        .to(".loader-container", { autoAlpha: 0, duration: 0.8, delay: 0.7 })
        .add(() => {
          document.querySelector("video").play();
        }, "-=0.8")
        .add(() => {
          document.querySelector(".loader-container").style.display = "none";
        });

      setTimeout(() => {
        TLLoad.restart();
      }, 1500);
    },
  },

  mounted() {
    window.addEventListener("load", this.loader());
  },
};
</script>

<style scoped>
.loader-project {
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
}

.loader-container {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: #e0b289;
  pointer-events: none;
}

.loader-anim-bloc {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  z-index: 3;
}
.loader-bloc-txt {
  background: white;
  position: absolute;
  bottom: -50px;
  left: -50px;
  height: 0;
  z-index: 5;
  overflow: hidden;
}

.loader-bloc-txt h2 {
  padding: 10px 30px;
  color: #222;
  font-family: Playfair Display, serif;
  font-size: 40px;
  text-transform: uppercase;
  transform: translateY(100px);
}

.loader-images-container {
  width: 100%;
  height: 0px;
  position: absolute;
  bottom: 0px;
  z-index: 4;
  overflow: hidden;
}

.img-flip {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  position: absolute;
}

.flip-img1 {
  background-image: url(../assets/loader/image3.png);
}
.flip-img2 {
  background-image: url(../assets/loader/image1.jpg);
}

.flip {
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  position: absolute;
}

.f2 {
  background: #9b1339;
}

@media screen and (max-width: 500px) {
  .loader-anim-bloc {
    width: 300px;
    height: 300px;
  }
  .loader-bloc-txt {
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.loader-home {
  width: 100%;
  height: 100%;
}

.loader-overlay {
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

.loader-home-content {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  top: 150px;
  color: #fff;
  z-index: 2;
}
.loader-home-content h1 {
  font-family: Playfair Display, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-size: clamp(40px, 7vw, 85px);
  /* font-weight: bolder; */
  line-height: 1.1;
}
.loader-home-content .loader-middle-line {
  height: 200px;
  width: 2px;
  background: #fff;
  margin: 40px auto;
  position: relative;
}

.loader-home-content button {
  display: block;
  font-size: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  margin: 50px auto 0;
  padding: 16px 30px;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .loader-home-content button {
    font-size: 14px;
    margin: 30px auto 0;
    padding: 16px 20px;
  }
}
</style>
