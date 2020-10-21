<template>
  <CBox class="cart" padding="5rem">
    <CBox
      mt="1"
      font-weight="bold"
      as="h1"
      line-height="tight"
      is-truncated
      fontSize="2xl"
      >Your Cart</CBox
    >
    <CBox v-show="!cats.length"><i>Please add some cats to cart.</i></CBox>
    <SimpleGallery v-bind:catsArray="cats" />
    <CBox mt="4" textAlign="right" font-weight="bold" font-size="2xl"
      >Total: {{ total }}</CBox
    >
  </CBox>
</template>

<script lang="js">
import { mapGetters, mapState } from 'vuex'
import SimpleGallery from "../components/gallery/simple";
import {
  CBox,
  CButton
} from '@chakra-ui/vue';
export default {
    name: 'ShoppingCart',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CButton,
    SimpleGallery
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
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      cats: 'cartCats',
      total: 'cartTotalPrice'
    }),
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
  methods: {
    checkout (cats) {
      this.$store.dispatch('cart/checkout', cats)
    }
  }
}
</script>
