<template>

  <div class="relative">
    <return-button />
    <div class=" h-screen relative indexBackground">
      <h1 class=" title uppercase text-3xl font-medium text-center p-12">know wildlife</h1>
      <scroll-to-spaces />
    </div>
    <div class="mt-10">
    <h1 class="mb-11 font-bold text-xl text-center">Soumettez-nous une nouvelle espèce !</h1>
    <h2 class="my-5 text-center">Vous ne trouvez pas l'espèce qui vous intéresse ?</h2>
    <h2 class="mb-11 text-center">Vous voulez contribuer à faire grandir notre plateforme ?</h2>
    </div>
    <div class=" lg:flex lg:justify-between lg:items-center lg:w-full">

      <form method="post" name="contact" action="/thanks.html" id="contactForm" netlify netlify-honeypot="bot-field"
        ref="formTag" class="flex flex-col items-center">
        <label class="hidden">Champs anti robots : <input name="bot-field" /></label>
        <label for="spaceName"><input type="text" name="spaceName" id="spaceName" placeholder="Nom commun de l'espèce" v-model="spaceName"
            class="inputsContact" required></label>
        <p v-if="this.submitStatus === 'ERROR' && $v.spaceName.$invalid" class=" text-red-300 text-xs">Remplir le nom commun de l'espèce.</p>
        <label for="name"><input type="text" name="name" id="name" placeholder="Votre nom" v-model="name"
            class="inputsContact" required></label>
        <p v-if="this.submitStatus === 'ERROR' && $v.email.$invalid" class=" text-red-300 text-xs">Rentrez votre nom.</p>
        <label for="email"><input type="email" name="email" id="email" placeholder="Votre email" v-model="email"
            class="inputsContact" required></label>
        <p v-if="this.submitStatus === 'ERROR' && $v.email.$invalid" class=" text-red-300 text-xs">Remplir l'email.</p>
        <label for="content"><textarea name="content" id="formContent" placeholder="Vous avez des informations à propos de l'espèce ?"
            v-model="content" class="inputsContact h-52 w-80 font-quicksand lg:w-1/3"></textarea></label>
        <!-- <p v-if="this.submitStatus === 'ERROR' && $v.content.$invalid" class=" text-red-300 text-xs">Remplir le contenu.
        </p> -->
        <!-- <p v-if="$v.email.$invalid" class=" text-red-300 text-xs">Remplir le contenu.</p> -->
        <input type="submit" @click.prevent="sendForm"
          class=" py-2.5 w-52 mt-5 ml-12 self-start bg-lightGreen text-lightColor transition-all cursor-pointer border-none rounded-md hover:bg-lightColor hover:text-lightGreen">

      </form>

      <img :src="this.$global.mainImage" :alt="this.$global.siteName" class=" hidden rounded-xl w-3/5 lg:block">
    </div>
  </div>
</template>

<script>
  import {
    required,
    email
  } from 'vuelidate/lib/validators'
  import {
    gsap
  } from "gsap";
  export default {
    name: "newSpaceSubmission",
    head() {
      return {
        title: this.$global.contactTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.$global.contactMetaDescription
        }],
      }
    },
    data() {
      return {
        name: "",
        spaceName:"",
        email: "",
        content: "",
        submitStatus: null,
      }
    },
    validations: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      spaceName: {
        required,
      },
    },
    methods: {

      async sendForm() {
        let formName = this.$refs.formTag.getAttribute('name');
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          let formData = new FormData();
          formData.append('name', this.name);
          formData.append('email', this.email);
          formData.append('spaceName', this.spaceName);
          formData.append('form-name', formName);
          let resp = await fetch('/', {
            method: 'POST',
            body: formData
          });

          this.$router.push('thanks');

        }
      },
    },
    mounted() {
      let speciesNameAnimation = gsap.timeline()
      speciesNameAnimation
        .from(".title", {
          y: -100,
          duration: 1
        }, "+=0.5")
    },
  }

</script>

<style scoped>
  .indexBackground {
    background: linear-gradient(179.94deg, rgba(196, 196, 196, 0) 70.79%, #373D20 99.95%), url("https://res.cloudinary.com/corentin7301/image/upload/q_auto/c_scale/fl_lossy/v1622447954/wildlife/Dent-de-Crolles_29.05.21_s-9_rbv5pz.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .inputsContact {
    @apply p-2 w-72 mt-5 mb-1 rounded-md text-lightGreen border-solid border-2 border-lightGreen;
  }

  .inputsContact:focus {
    @apply outline-lightGreen;
  }

</style>
