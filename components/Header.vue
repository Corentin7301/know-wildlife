<template>
  <div class=" h-screen indexBackground p-12">
    <h1 class=" title uppercase text-3xl font-medium text-center">know wildlife</h1>
    <scroll-to-spaces/>
  </div>
</template>

<script>
  import {
    gsap
  } from "gsap";
  export default {

mounted() {
      let speciesNameAnimation = gsap.timeline()
      speciesNameAnimation
        .from(".title", {
          y: -100,
          duration: 1
        }, "+=0.5")
    },
  }

</script>

<style>
  .indexBackground {
    background: linear-gradient(179.94deg, rgba(196, 196, 196, 0) 70.79%, #373D20 99.95%), url("https://res.cloudinary.com/corentin7301/image/upload/q_auto/c_scale/fl_lossy/v1619880326/wildlife/bouquetin-accueil_d0gfnr");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  }

</style>
