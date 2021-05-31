<template>
  <nuxt-link :to="url" :type="type" style="color:white;" class=" py-2.5 w-52 bg-darkGreen transition-all cursor-pointer border-none rounded-md hover:bg-lightGreen hover:text-lightGreen"><slot/></nuxt-link>
</template>

<script>
export default {
props: {
    type: {
        type: String,
        default: "text"
    },
    url: {
        type: String,
        default: "/"
    }
},
}
</script>