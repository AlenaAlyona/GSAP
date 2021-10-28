<template>
  <div class="multiple-project">
    <div class="multiple-home-mountains">
      <img src="@/assets/scroll/multiple/long-mountains.png" alt="mountains" />
      <h1 class="multiple-title"><span>The </span>ALPS</h1>
    </div>
    <div class="multiple-content">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        illo provident eaque praesentium mollitia atque cum cumque nihil et odit
        quae dolor fuga voluptate pariatur, tenetur quisquam deserunt sapiente
        consequatur aperiam repudiandae amet quasi nemo totam. At eligendi
        deleniti, quam maxime distinctio dolore, facere eius libero eveniet
        aperiam quisquam rerum alias iusto earum aliquam expedita, ducimus
        obcaecati nisi saepe sed sit architecto perspiciatis eum doloremque.
        Doloribus quo minima facilis maxime consequuntur molestias hic, dolor
        voluptas iste officiis, voluptatibus iusto praesentium cum, sit
        architecto ducimus ratione nihil maiores explicabo exercitationem omnis.
        Deleniti cumque deserunt id, optio veniam dolor vel, quibusdam eligendi
        excepturi illum corrupti minima! Quibusdam officiis minus perspiciatis
        accusamus nulla veritatis sunt tempora alias, corporis cupiditate
        reiciendis qui tenetur eum doloribus sed vero accusantium, mollitia enim
        omnis eveniet non? Enim hic eligendi similique nesciunt nam! Minima
        officiis provident, excepturi nam ut eius dignissimos quisquam veritatis
        in quis laudantium? Ipsam, modi, accusantium rem autem aspernatur
        laboriosam ullam suscipit quos commodi impedit quam culpa ratione qui
        perspiciatis sapiente tempora. Doloremque deserunt sint quo vel soluta
        explicabo ullam amet magnam itaque, reprehenderit dolor suscipit ad id
        quia tenetur nemo quos quidem veritatis quaerat. Cumque natus rem porro
        quisquam sequi, sed obcaecati recusandae. Delectus quae, expedita,
        obcaecati ipsa libero vel tempore distinctio neque eos, eum fugiat quis
        quo corporis repudiandae? Assumenda nisi natus rerum voluptas, ad
        eveniet error eligendi corporis cumque dolor corrupti pariatur suscipit,
        provident culpa ducimus perferendis velit officiis facilis amet
        quibusdam exercitationem veniam veritatis! Consectetur eius quibusdam
        sunt magnam placeat laborum ut possimus quasi eum quae, repudiandae
        architecto amet quidem id ducimus alias ipsa dignissimos a eligendi
        impedit! Fugit hic perferendis eligendi nemo ullam consectetur quae
        labore quos ab unde neque odit commodi nostrum, inventore magni facere
        saepe minus magnam dolore sed ducimus aliquam maiores. Consectetur neque
        assumenda expedita cupiditate, autem quisquam ab, provident eius aut
        beatae excepturi distinctio necessitatibus dolore obcaecati pariatur.
        Error, quod assumenda cum voluptatibus praesentium eos ipsa. Alias
        cupiditate esse autem dolor ipsam labore repellendus perspiciatis
        corrupti repellat ullam exercitationem nihil sapiente, deserunt cum
        expedita sed quidem molestias, aut dolores quam molestiae quo. Dicta
        iusto quod accusamus consequuntur. Vitae, veritatis sunt! Ea,
        voluptatibus! Ut nemo necessitatibus est eius totam aliquam praesentium
        velit sed ab laudantium veritatis cupiditate autem, sequi itaque a animi
        possimus dolore neque blanditiis! Consectetur quos a voluptatibus quo,
        veniam esse, sit fugit delectus, doloremque facilis quas sed? Facilis
        necessitatibus quasi, illum ullam porro minus.
      </p>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Multiple",

  mounted() {
    const mountainRange = document.querySelector(
      ".multiple-home-mountains img"
    );
    const title = document.querySelector(".multiple-title");

    if (mountainRange) {
      gsap.to(mountainRange, {
        y: 100,
        scrollTrigger: {
          trigger: "multiple-home-mountains",
          scrub: true,
        },
      });
    }

    if (title) {
      gsap.to(title, {
        y: 500,
        scrollTrigger: {
          trigger: "multiple-home-mountains",
          scrub: true,
        },
      });
    }
  },
};
</script>

<style scoped>
.multiple-project {
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.multiple-home-mountains {
  height: 100vh;
  background: #222;
  position: relative;
  background: url(../../assets/scroll/multiple/background-moutain.png);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  overflow: hidden;
}
.multiple-home-mountains img {
  object-fit: cover;
  object-position: center;
  position: absolute;
}
.multiple-title {
  font-family: Martel Sans;
  font-weight: 200;
  font-size: 150px;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  z-index: 1;
}
.multiple-title span {
  font-size: 40px;
  font-family: Montserrat;
}
@media screen and (max-width: 950px) {
  .multiple-title {
    line-height: 1;
    text-align: center;
  }
}
.multiple-home-mountains img:nth-child(1) {
  width: 2000px;
  height: 1000px;
  top: 45%;
  left: 0;
  z-index: 2;
}

.multiple-content {
  text-align: left;
  padding: 50px 10px 20px;
  max-width: 800px;
  margin: 0 auto;
}
.multiple-content h2 {
  font-size: 50px;
  padding-bottom: 30px;
}
.multiple-content p {
  font-size: 20px;
}
</style>
