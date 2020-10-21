<template>
  <div class="container">
    <CFlex flexDirection="row" flexWrap="wrap" mt="2">
    <CBox v-for="(cat, index) in catsArray" v-bind:key="index" m="2">
        <Card v-bind:cat="cat"/>
    </CBox>
    </CFlex>
  </div>
</template>

<script lang="js">
import {
  CFlex,
  CBox
} from '@chakra-ui/vue';
import Card from "../product/card"
export default {
  name: 'SimpleGallery',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CFlex,
    CBox
  },
	props: {catsArray: Array},
  data () {
    return {
      cats: [],
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
  }
}
</script>
