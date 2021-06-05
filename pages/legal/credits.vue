<template>
  <div class="relative py-20 px-5 h-screen">
    <return-button />
    <nuxt-content :document="credits"/>
  </div>
</template>


<script>
export default {
  name: "credits-photos",
    head() {
      return {
        title: this.$global.creditsTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.$global.creditsMetaDescription
        }],
      }
    },
    async asyncData({
      $content
    }) {
      const credits = await $content('legal/credits').fetch()
      return {
        credits
      }
    },
}
</script>

<style>
.nuxt-content h1 {
  @apply text-2xl mb-8;
}

.nuxt-content h2 {
  @apply text-xl mb-8;
}

.nuxt-content ul {
  @apply space-y-2;
}




</style>