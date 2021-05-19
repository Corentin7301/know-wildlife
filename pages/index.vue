<template>
  <div class="grid grid-cols-2 gap-x-5 gap-y-6 py-11 px-2">
    <nuxt-link to="#" class=" relative flex justify-center rounded-full">
      <cld-image
      public-id="/wildlife/lynx-label_wzeuem"
      quality="auto"
      aspectRatio="1:1"
      crop="fill"
      gravity="center"
      loading="lazy"
      class=" w-1:2 cursor-pointer"
      />
      <h2 class="absolute bottom-3 uppercase font-bold text-sm text-eggWhite">lynx boreal</h2>
    </nuxt-link>
  </div>
</template>

<script>
  export default {

    head() { 
      return {
        title: this.$global.siteName,
        meta: [{
        hid: 'description',
        name: 'description',
        content: this.$global.siteMetaDescription
      }],
     }
    },
  }

</script>