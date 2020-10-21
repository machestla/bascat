<template>
  <div class="container">

    login page
  </div>
</template>

<script lang="js">
export default {
  name: 'LogIn',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
  },
  data () {
    return {
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
}
</script>