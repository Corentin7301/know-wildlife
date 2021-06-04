<template>
  <div class="relative py-20 px-5 h-screen">
    <return-button />
    <h1 class="text-2xl mb-8">Crédits photos</h1>
    <h2 class="text-xl mb-8">Toutes les photos visibles sur le site sont la stricte propriété du photographe en étant l'auteur. Aucune image n'est libre de droit.</h2>
    <ul class="space-y-2">
        <li>Corentin PERROUX</li>
        <li>Tristan MARY</li>
    </ul>
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
}
</script>