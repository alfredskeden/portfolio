<script lang="ts">
  import AsLink from './components/as-link.vue';
  export default {
    components: {
      AsLink
    },
    data: function () {
      return {
        reactLink: import.meta.env.VITE_REACTLINK,
        vueLink: import.meta.env.VITE_VUELINK,
        angularLink: import.meta.env.VITE_ANGULARLINK
      }
    }
  }
</script>

<template>
  <header>
    <a class="mr-2 link-fancy" :href="reactLink">React</a>
    <a class="mr-2 link-fancy" :href="vueLink">Vue</a>
    <a class="link-fancy" :href="angularLink">Angular</a>
  </header>
  <main class="leading-[1.4] max-w-[40em]">
    <h1 class="leading-[1] mb-0">Hello.</h1>
    <h2 class="my-[25px]">My name is Alfred Skedebäck.</h2>
    <p class="my-[25px]">I'm an independent software developer. I've worked as an programming consultant for 3+ years and currently work at <AsLink href="https://umain.com/" linkText="UMAIN" /> as Web developer. You can find some of my work, including this portfolio, over at <AsLink href="https://github.com/alfredskeden/" linkText="Github" />. Add me on <AsLink href="https://se.linkedin.com/in/alfred-skedeb%C3%A4ck-09650970" linkText="LinkedIn" />.</p>
    <p class="my-[25px]">This page is created using <AsLink href="https://vuejs.org/" linkText="Vue" /> with <AsLink href="https://vitejs.dev/" linkText="Vite" />. This shows some of the technologies that I use, on this page:</p>
    <ul class="my-[25px] list-disc">
      <li class="ml-4">Vue</li>
      <li class="ml-4">TypeScript</li>
      <li class="ml-4">TailwindCSS</li>
      <li class="ml-4">Node.js</li>
      <li class="ml-4">Linux</li>
      <li class="ml-4">Nginx</li>
    </ul>
    <p class="my-[25px]">Outside of programming and helping my girlfriend take care of our dog, I enjoy computer games, sushi and solving Rubik's cubes.</p>
  </main>
  <footer></footer>
</template>

<style>

</style>
