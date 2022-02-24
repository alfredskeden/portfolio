<script lang="ts">
export default {
    name: 'AsLink',
    props: {
      href: String,
      linkText: String
    },
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<template>
  <a class="link-fancy" :href="href" target="_blank">{{linkText}}</a>
</template>