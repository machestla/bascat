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
    <CBox mt="4" textAlign="right" font-weight="bold" font-size="2xl">
      Total: {{ total }}
    </CBox>
    <CBox mt="4" textAlign="right" font-weight="bold" font-size="2xl" :display="total ==='0 euros' ? 'none' : 'block'">
      <CButton variant-color="red" @click="showModal = true">Still want to buy it</CButton>
      <CModal :is-open="showModal" :closeOnOverlayClick="false">
        <CModalOverlay/>
        <CModalContent>
          <CModalHeader>Hell No!</CModalHeader>
          <CModalBody><strong>I . SAID . NO!</strong><br/> Don't be obstinate!</CModalBody>
          <CModalFooter>
            <CButton @click="showModal = false">Cancel</CButton>
            <CButton margin-left="3" variant-color="red" @click="showToast"> Still want to buy this fucking cats</CButton>
          </CModalFooter>
          <CModalCloseButton @click="showModal = false"/>
        </CModalContent>
      </CModal>
    </CBox>

  </CBox>
</template>

<script lang="js">
import { mapGetters, mapState } from 'vuex'
import SimpleGallery from "../components/gallery/simple";
import {
  CBox,
  CButton,
  CModal,
  CModalOverlay,
  CModalContent,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton
} from '@chakra-ui/vue';
export default {
    name: 'ShoppingCart',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CButton,
    SimpleGallery,
    CModal,
    CModalOverlay,
    CModalContent,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton
  },
  data () {
    return {
      showModal: false,
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
    },
    showToast() {
      this.$toast({
        title: 'Hummmm, read one more time the message:',
        description: "NO NO NO NO NO NO NO NO NO NO NO NO NO",
        status: 'error',
        duration: 10000
      })
    }
  }
}
</script>
