<template>
  <div class="relative">
    <return-button />
    <div class=" h-screen bg-darkGreen text-eggWhite font-montserrat">

      <!-- 1 -->
      <div class=" frame relative h-screen flex justify-center" :style="`background: linear-gradient(179.94deg, rgba(196, 196, 196, 0) 70.79%, #373D20 99.95%), url(${spaceDatas.firstImageUrlFull});
        background-position: center;
    background-size: cover;
    background-repeat: no-repeat;`">
        <h1
          class=" specieName absolute top-20 xl:top-36 right-5 xl:right-36 font-medium xl:text-5xl text-4xl uppercase ">
          {{ spaceDatas.name }}</h1>
        <scroll-to-spaces />
      </div>

      <!-- 2 -->
      <div class=" frame bg-darkGreen h-screen pt-14">
        <h2 class=" scientificName uppercase text-center font-medium text-4xl">{{ spaceDatas.scientificName }}</h2>
        <h3 class=" uppercase text-center mt-14">repartition</h3>
        <div class=" xl:flex items-center justify-center xl:space-x-24 mt-4 xl:mt-10">
          <cld-image :public-id="`/wildlife/${spaceDatas.mapUrl}`" quality="auto" loading="lazy"
            class="w-1/2 xl:w-1/4 mx-auto xl:m-0 flex items-center justify-center" alt="carte de répartition" />
          <div class=" xl:w-1/3 px-12 space-y-10">
            <h3 class=" uppercase mt-12">caractéristiques</h3>

            <!-- weight -->
            <div class=" flex text-xl space-x-5">
              <i class="fas fa-weight"></i>
              <p class=" text-sm font-normal">Mâle : {{ spaceDatas.maleWeight }}</p>
              <p class=" text-sm font-normal">Femelle : {{ spaceDatas.femaleWeight }}</p>
            </div>

            <!-- width -->
            <div class=" flex text-xl items-center space-x-5">
              <i class="fas fa-ruler-combined"></i>
              <div class=" space-y-2">
                <p class=" text-sm font-normal">Longueur : {{ spaceDatas.width }}</p>
                <p class=" text-sm font-normal">Hauteur : {{ spaceDatas.height }}</p>
              </div>
            </div>

            <!-- age -->
            <div class=" flex text-xl space-x-5">
              <i class="fas fa-hourglass-half"></i>
              <p class=" text-sm font-normal">{{ spaceDatas.age }}</p>
            </div>

            <!-- territory -->
            <div class=" flex text-xl space-x-5">
              <i class="fas fa-map-marked-alt"></i>
              <p class=" text-sm font-normal">{{ spaceDatas.territory }}</p>
            </div>

            <!-- paw -->
            <div class=" flex text-xl space-x-5">
              <i class="fas fa-paw"></i>
              <p class=" text-sm font-normal">Status : {{ spaceDatas.statusOfProtection }}</p>
            </div>
          </div>

        </div>
      </div>

      <!-- 3 -->
      <div class=" frame relative h-screen" :style="`background: linear-gradient(180deg, #373D20 0%, rgba(55, 61, 32, 0) 9.43%, rgba(55, 61, 32, 0) 87.14%, #373D20 100%), url(${spaceDatas.secondImageUrlFull});
        background-position: center;
    background-size: cover;
    background-repeat: no-repeat;`">
        <div
          class=" animatedSquare1 absolute left-8 xl:left-16 bottom-24 rounded-xl blur shadow-xl space-y-3 xl:space-y-4 px-5 xl:px-10 py-4 xl:py-8">
          <p class="font-normal xl:text-3xl">Période de rut : {{ spaceDatas.rutPeriod }}</p>
          <p class="font-normal xl:text-3xl">Gestation : {{ spaceDatas.pregnancy }}</p>
          <p class="font-normal xl:text-3xl">Portée : {{ spaceDatas.litter }}</p>
          <p class="font-normal xl:text-3xl">Sevrage : {{ spaceDatas.weaning }}</p>
        </div>
      </div>

      <!-- 4 -->
      <div class=" frame relative h-screen" :style="`background: linear-gradient(180deg, rgba(55, 61, 32, 0.31) 0%, rgba(55, 61, 32, 0) 12.66%, rgba(55, 61, 32, 0) 83.28%, rgba(55, 61, 32, 0.27) 100%), url(${spaceDatas.thirdImageUrlFull});
        background-position: center;
    background-size: cover;
    background-repeat: no-repeat;`">
        <div
          class=" animatedSquare2 absolute top-16 right-5 xl:right-28 text-darkGreen rounded-xl blur shadow-xl xl:space-y-4 px-5 xl:px-10 py-4 xl:py-8">
          <p class="font-normal xl:text-3xl">Traces : {{ spaceDatas.paws }}</p>
          <p class="font-normal xl:text-3xl w-60 xl:w-96">Proies : {{ spaceDatas.preys }}</p>
          <p class="font-normal xl:text-3xl">Prédateurs : {{ spaceDatas.predators }}</p>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>



<script>
  import {
    gsap
  } from "gsap";
  import {
    ScrollTrigger
  } from "gsap/ScrollTrigger";

  export default {
    layout: 'spaces',
    async asyncData({
      $content,
      params
    }) {
      const slug = params.slug
      const spaceDatas = await $content('spaces', slug).fetch()
      return {
        spaceDatas
      }
    },

    mounted() {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh()

      let speciesNameAnimation = gsap.timeline()
      speciesNameAnimation
        .from(".specieName", {
          x: 400,
          duration: 1
        }, "+=0.5")


      gsap.utils.toArray(".frame").forEach(function (e) {
        let scientificName = e.querySelectorAll(".scientificName");
        let animatedSquare1 = e.querySelectorAll(".animatedSquare1");
        let animatedSquare2 = e.querySelectorAll(".animatedSquare2");
        let firstScrollBottom = e.querySelector(".firstScrollBottom");


        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: e,
              pin: e,
              scrub: 0.5,
              start: "top top",
              end: "+=50%",
              // markers:true
            }
          })
          .from(scientificName, {
            scale: 0.7,
            duration: 2,
            ease: 'power2.out',
            stagger: 0.6
          }, 0)
          .from(animatedSquare1, {
            x: -750,
            duration: 2,
            ease: 'power2.out',
            stagger: 0.6
          }, 0)
          .from(animatedSquare2, {
            x: 750,
            duration: 2,
            ease: 'power2.out',
            stagger: 0.6
          }, 0)
          .from(firstScrollBottom, {
            xPercent: 150,
            duration: 5,
            ease: 'power2.out',
            stagger: 0.6
          }, 0)
          .to({}, {
            duration: 0.3
          })
      })
    },

  }

</script>

<style scoped>
  .blur {
    backdrop-filter: blur(20px);
    box-shadow: inset -3px -3px 24px -2px rgba(0, 0, 0, 0.25);
  }

  .frame {
    overflow: hidden;
  }

</style>
