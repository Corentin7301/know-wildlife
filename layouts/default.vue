<template>
  <div id="layout">
        <install-headband/>
    <Nuxt />
    <Footer />
        <scroll-to-top>
      <svg class="w-6 h-6 top" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7">
        </path>
      </svg>
    </scroll-to-top>
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