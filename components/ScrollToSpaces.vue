<template>
  <div class=" flex justify-center">
    <svg class="w-10 h-10 absolute bottom-8 animate-bounce cursor-pointer" fill="none" stroke="currentColor"
      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" @click="scrollspaces">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" class="lg:origin-center lg:transform lg:rotate-180"></path>
    </svg>
  </div>
</template>


<script>
  export default {
    methods: {
      scrollspaces() {
        window.scrollTo(0, 700)
      },
    },
  }

</script>
