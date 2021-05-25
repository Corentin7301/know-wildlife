<template>
  <div>
    <Header />
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 py-11 px-2 lg:px-10">
      <nuxt-link :to=" { name: 'spaces-slug', params: { slug: space.slug }} "
        class=" relative flex justify-center rounded-full" v-for="space of spaces" :key="space.name">
        <cld-image :public-id="`/wildlife/${space.miniatureUrl}`" quality="auto" aspectRatio="1:1" crop="fill"
          gravity="center" radius="50" background="#373D20" loading="lazy" class=" w-1:2 cursor-pointer" />
        <h2 class="absolute bottom-3 uppercase font-bold text-sm text-eggWhite">{{ space.name }}</h2>
      </nuxt-link>
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
      const spaces = await $content('spaces').fetch()
      return {
        spaces
      }
    }



  }

</script>
