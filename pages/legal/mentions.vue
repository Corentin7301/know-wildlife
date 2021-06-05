<template>
  <div class="relative py-20 px-5">
      <return-button/>
      <nuxt-content :document="mentions"/>
  </div>
</template>

<script>
export default {
  name: "mentions-legales",
    head() {
      return {
        title: this.$global.mentionsTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.$global.mentionsMetaDescription
        }],
      }
    },
    async asyncData({
      $content
    }) {
      const mentions = await $content('legal/mentions').fetch()
      return {
        mentions
      }
    },
}
</script>


<style>
  .nuxt-content h1 {
    @apply text-2xl mb-8;
  }

  .nuxt-content h2 {
    @apply text-xl mt-6 mb-4;
  }

</style>
