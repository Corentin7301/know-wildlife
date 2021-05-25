<template>
  <div class="flex items-center justify-center transition lg:hover:opacity-80 ">
    <nuxt-link to="/new" :style="`background: url(${this.$global.content.images.newSpaceImg});
        background-position: center;
    background-size: cover;
    background-repeat: no-repeat;`"
      class=" blur h-full w-full flex flex-col justify-center items-center rounded-xl text-center space-y-8">

      <div
        class="h-full w-full flex flex-col items-center justify-center xl:right-28 text-lightColor rounded-xl blur shadow-xl space-y-2 lg:space-y-4 px-5 xl:px-10 py-4 xl:py-8">
        <h2 class="uppercase font-bold text-xs lg-text-xl text-eggWhite">Il manque l'espèce qui vous intéresse ?</h2>
        <h3 class="uppercase font-bold text-xs lg-text-lg text-eggWhite">Vous voulez contribuer ?</h3>
        <p class="uppercase font-bold text-xs lg-text-sm text-eggWhite">Proposez une espèce ici !</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      </div>
    </nuxt-link>


  </div>
</template>

<style scoped>
  .blur {
    backdrop-filter: blur(3px);
    box-shadow: inset -3px -3px 24px -2px rgba(0, 0, 0, 0.25);
  }

</style>
