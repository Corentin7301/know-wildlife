<template>
  <div class=" h-screen p-12"
    :style="`background: linear-gradient(179.94deg, rgba(196, 196, 196, 0) 70.79%, #373D20 99.95%), url('${imgIndexUrl}');background-position: center;
    background-size: cover;
    background-repeat: no-repeat;`">
    <h1 class=" title uppercase text-3xl font-medium text-center">know wildlife</h1>
    <scroll-to-spaces />
  </div>
</template>

<script>
  import {
    gsap
  } from "gsap";
  import imgIndex from "~/imagesIndex.config.json";
  export default {
    data() {
      return {
        imgIndexUrl: "",
        imgIndexPosition: "",
      }
    },

    mounted() {
      debugger
      let randomUrl = imgIndex[Math.floor(Math.random() * imgIndex.length)];
      this.imgIndexUrl = randomUrl.imgUrl
      this.imgIndexPosition = randomUrl.position
      debugger



      let speciesNameAnimation = gsap.timeline()
      speciesNameAnimation
        .from(".title", {
          y: -100,
          duration: 1
        }, "+=0.5")
    },
  }

</script>
