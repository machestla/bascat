<template>
  <div class="container">
    <CFlex
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      flex-dir="column"
      padding="5rem"
    >
      <Preview
        title="Our new cats"
        v-bind:catsArray="onlyNewCats"
        :customGalleryLink="{ path: 'cats', query: { tag: 'new' } }"
      />
      <Preview
        title="Our kittens"
        v-bind:catsArray="onlyKittens"
        :customGalleryLink="{ path: 'cats', query: { age: '0.5' } }"
      />
      <Preview
        title="Our old cats"
        v-bind:catsArray="onlyOldCats"
        :customGalleryLink="{ path: 'cats', query: { age: 'age>=8' } }"
      />
    </CFlex>
  </div>
</template>

<script lang="js">
import {
  CFlex,
  CBox,
  CImage,
  CHeading,
  CIconButton,
  CButton
} from '@chakra-ui/vue';
import Card from "../components/product/card";
import Preview from "../components/gallery/preview";
export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CFlex,
    CImage,
    CBox,
    Card,
    CHeading,
    CIconButton,
    CButton
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
    },
    onlyNewCats(){
      return this.$store.state.cats.cats.filter(cat => cat.tag === "new").slice(0,4);
    },
    onlyKittens(){
      return this.$store.state.cats.cats.filter(cat => cat.age === "0.5").slice(0,4);
     },
    onlyOldCats(){
      return this.$store.state.cats.cats.filter(cat => cat.age === "8").slice(0,4);
    }
  }
}
</script>
