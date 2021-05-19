<template>
  <div>
    <div class=" h-screen bg-darkGreen text-eggWhite font-montserrat">

      <!-- 1 -->
      <div class=" frame relative h-screen bottomGradient bg-lynxBoreal flex justify-center">
        <h1
          class=" speciesName absolute top-20 xl:top-36 right-5 xl:right-36 font-medium xl:text-5xl text-4xl uppercase"
          x-text="name">{{ spaceDatas.name }}</h1>
        <svg class="w-10 h-10 absolute bottom-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </div>

      <!-- 2 -->
      <div class=" frame bg-darkGreen h-screen pt-14">
        <h2 class=" scientificName uppercase text-center font-medium text-4xl">{{ spaceDatas.scientificName }}</h2>
        <h3 class=" uppercase text-center mt-14">repartition</h3>
        <div class=" xl:flex items-center justify-center mt-4 xl:mt-10">
          <cld-image
          :public-id="`/wildlife/${spaceDatas.mapUrl}`"
          quality="auto"
          loading="lazy"
          class="w-full xl:w-1/2 m-auto xl:m-0"
          alt="carte de répartition"
          />
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
                <p class=" text-sm font-normal">Hauteur : {{ spaceDatas.height }}</span></p>
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
      <div class=" frame relative bottomTopGradient h-screen">
        <div
          class=" animatedSquare1 absolute left-8 xl:left-16 bottom-24 bg-whiteTransparent rounded-xl blur shadow-xl space-y-3 xl:space-y-4 px-5 xl:px-10 py-4 xl:py-8">
          <p class="font-normal xl:text-3xl">Période de rut : {{ spaceDatas.rutPeriod }}</p>
          <p class="font-normal xl:text-3xl">Gestation : {{ spaceDatas.pregnancy }}</p>
          <p class="font-normal xl:text-3xl">Portée : {{ spaceDatas.litter }}</p>
          <p class="font-normal xl:text-3xl">Sevrage : {{ spaceDatas.weaning }}</p>
        </div>
      </div>

      <!-- 4 -->
      <div class=" frame relative h-screen topGradient">
        <div
          class=" animatedSquare2 absolute top-16 right-5 xl:right-28 bg-whiteTransparent text-darkGreen rounded-xl blur shadow-xl xl:space-y-4 px-5 xl:px-10 py-4 xl:py-8">
          <p class="font-normal xl:text-3xl">Traces : {{ spaceDatas.paws }}</p>
          <p class="font-normal xl:text-3xl w-60 xl:w-96">Proies : {{ spaceDatas.preys }}</p>
          <p class="font-normal xl:text-3xl">Prédateurs : {{ spaceDatas.predators }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    async asyncData({
      $content,
      params
    }) {
      const slug = params.slug
      const spaceDatas = await $content('spaces', slug).fetch()
      return {
        spaceDatas
      }
    }
  }

</script>
