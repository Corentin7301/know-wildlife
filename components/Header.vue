<template>
  <div class=" h-screen indexBackground p-12">
    <h1 class=" title uppercase text-3xl font-medium text-center">know wildlife</h1>
    <scroll-to-spaces/>


    <scroll-to-top>
      <svg class="w-6 h-6 top" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7">
        </path>
      </svg>
    </scroll-to-top>
  </div>
</template>

<script>
  import {
    gsap
  } from "gsap";
import ScrollToSpaces from './ScrollToSpaces.vue';
  export default {
  components: { ScrollToSpaces },

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
