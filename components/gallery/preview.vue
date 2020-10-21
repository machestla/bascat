<template>
  <div class="container">
    <CHeading
      mt="5"
      as="h2"
      font-weight="bold"
      letter-spacing="wide"
      font-size="2xl"
    >
      {{ title }}
      <CIconButton
        variant="ghost"
        aria-label="go to gallery page"
        icon="chevron-right"
        as="nuxt-link"
        :to="customGalleryLink"
      />
    </CHeading>
    <SimpleGallery v-bind:catsArray="catsArray" />
    <CFlex justifyContent="flex-end" mr="5rem" mt="2rem">
      <CButton
        as="nuxt-link"
        :to="customGalleryLink"
        size="lg"
        width="fit-content"
        right="0px"
        >See more</CButton
      >
    </CFlex>
  </div>
</template>

<script lang="js">
import {
  CFlex,
  CBox,
  CHeading,
  CIconButton,
  CButton
} from '@chakra-ui/vue';
import SimpleGallery from "./simple";
export default {
  name: 'Preview',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CFlex,
    CBox,
    CHeading,
    CIconButton,
    CButton,
    SimpleGallery
  },
	props: { title: String, catsArray: Array, customGalleryLink:Object },
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
