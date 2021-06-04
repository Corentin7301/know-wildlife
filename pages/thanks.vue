<template>
  <div class="indexBackground flex flex-col h-screen items-center justify-around text-center p-4">
    <h1 class=" my-16 text-2xl text-lightGreen">{{ this.$global.newSubmissionRedirectMessage }}</h1>
    <Button url="/">Retour à l'accueil</Button>
  </div>
</template>

<script>
  export default {
    name: "Thanks page",
    head() {
      return {
        title: this.$global.thanksSubmissionTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.$global.thanksSubmissionMetaDescription
        }],
      }
    },
  }

</script>

<style scoped>
  .indexBackground {
    background: linear-gradient(179.94deg, rgba(196, 196, 196, 0) 70.79%, #717744 99.95%), url("https://res.cloudinary.com/corentin7301/image/upload/q_auto/c_scale/fl_lossy/v1622461020/wildlife/Dent-de-Crolles_02.05.21_s-4_urxha3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  }

</style>
