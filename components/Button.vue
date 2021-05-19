<template>
  <nuxt-link :to="url" :type="type" class=" py-2.5 w-52 bg-lightGreen text-lightColor transition-all cursor-pointer border-none rounded-md hover:bg-lightColor hover:text-lightGreen"><slot/></nuxt-link>
</template>

<script>
export default {
props: {
    type: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    }
},
}
</script>