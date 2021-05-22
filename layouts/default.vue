<template>
  <div id="layout" class="font-quicksand font-medium tracking-widest no-underline text-lightColor">
    <Nuxt />
  </div>
</template>

<script>
import blogConfig from "@/site.config.json"
export default {
  data() {
    return {
      blogConfig,
    }
  },
}
</script>