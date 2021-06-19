<template>
  <div>
    <Header />
    <install-headband/>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-8 gap-y-6 py-11 px-2 lg:px-16">
      <nuxt-link :to=" { name: 'spaces-slug', params: { slug: space.slug }} " class=" relative flex justify-center"
        v-for="space of spaces" :key="space.name">
        <cld-image :public-id="`/wildlife/${space.miniatureUrl}`" quality="auto" aspectRatio="1:1" crop="fill"
          gravity="center" radius="50" background="#373D20" loading="lazy"
          class=" w-1:2 cursor-pointer transition lg:hover:transform lg:hover:scale-105" />
        <h2 class="absolute bottom-3 uppercase font-bold text-sm text-eggWhite text-center px-1">{{ space.name }}</h2>
      </nuxt-link>
      <new-space-card />
    </div>
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

    async asyncData({
      $content,
    }) {
      const spaces = await $content('spaces').sortBy('slug').fetch()
      return {
        spaces
      }
    }



  }

</script>
