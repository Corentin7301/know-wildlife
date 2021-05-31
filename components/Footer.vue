<template>

  <footer class="bg-backgroundColor dark:bg-gray-800 w-full py-8">
    <div class="max-w-screen-xl mx-auto px-4 space-y-5">
      <!-- top -->
      <ul class="max-w-screen-md mx-auto text-lg font-lightColor flex flex-wrap justify-center">
        <!-- spacer -->
        <li class="w-6"></li>
        <li class="my-2">
          <a class=" dark:text-gray-300 dark:hover:text-white" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 transition lg:hover:opacity-80" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
        </li>
        <!-- <li class="my-2">
          <a class=" transition lg:hover:opacity-80 dark:text-gray-300 dark:hover:text-white" href="#">
            Nouvelle espèce
          </a>
        </li> -->
      </ul>

      <!-- bottom -->
      <ul class="max-w-screen-md mx-auto text-lg font-lightColor flex flex-col justify-between">
        <li class="my-2">
          <a class=" transition lg:hover:opacity-80 dark:text-gray-300 dark:hover:text-white" href="/legal/credits">
            Crédits photos
          </a>
        </li>
        <li class="my-2">
          <a class=" transition lg:hover:opacity-80 dark:text-gray-300 dark:hover:text-white" href="/legal/mentions">
            Mentions légales
          </a>
        </li>
        <li class="my-2">
          <a class=" transition lg:hover:opacity-80 dark:text-gray-300 dark:hover:text-white"
            href="https://github.com/Corentin7301/know-wildlife">
            <i class="fab fa-github text-2xl"></i>
          </a>
        </li>
      </ul>

      <!-- copyright -->
      <p class=" text-center text-xs">© Copyright <a href="https://portfolio.corentinperroux.fr" target="_blank"
          class="transition-all hover:opacity-70">CORENTIN PERROUX </a><span>{{ copyrightDate() }}</span></p>
    </div>
  </footer>

</template>

<script>
  export default {
    name: "component-footer",

    methods: {
      copyrightDate() {
        const copyrightDateParsed = new Date().getFullYear()
        return copyrightDateParsed
      }
    },
  };

</script>
