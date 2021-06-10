<template>
  <div class="relative py-20 px-5 min-h-screen">
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
  @apply text-3xl font-bold mb-8;
}

.nuxt-content h2 {
  @apply text-2xl font-bold mb-8;
}

.nuxt-content h3 {
  @apply text-xl mt-8 mb-3;
}

.nuxt-content ul {
  @apply text-lg space-y-2;
}




</style>