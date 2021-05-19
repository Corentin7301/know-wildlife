<template>
  <div id="footer" class=" relative bg-lightGreen h-24 rounded-tl-md rounded-tr-md uppercase p-3">
    <div class=" flex justify-evenly">

      <nuxt-link to="#" class=" ">
        accueil
      </nuxt-link>
      <nuxt-link to="#" class=" ">
        droits photos
      </nuxt-link>
      <nuxt-link to="#" class=" ">
        rgpd
      </nuxt-link>
    </div>
      <p class=" text-xxs absolute bottom-3 right-3">© Copyright <a href="https://portfolio.corentinperroux.fr" target="_blank"
          class="transition-all hover:opacity-70">CORENTIN PERROUX </a><span>{{ copyrightDate() }}</span></p>
  </div>
</template>

<script>
  export default {
    name: "component-footer",

    methods: {
      copyrightDate() {
        const copyrightDateParsed = new Date().getFullYear()
        return copyrightDateParsed
      }
    },
  };

</script>
