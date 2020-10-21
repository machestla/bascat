<template>
  <CButton :variant-color="buttonColor" @click="addToCart(cat)">
    {{ buttonText }}
  </CButton>
</template>

<script lang="js">
import Vue from "vue";

import {
  CButton
} from '@chakra-ui/vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AddToCartButton',
  components: {
  CButton,
  },
  props:{
    cat:Object
  },
  computed: {
    ...mapState({
      catsInCart: state => state.cart.cats
    }),
    buttonColor: function() {
       if (this.catsInCart.indexOf(this.cat) === -1) {
      return "gray"
    } else {
      return "green"
    }
    },
    buttonText: function () {
      if (this.catsInCart.indexOf(this.cat) === -1) {
      return "Add to cart"
    } else {
      return "Added to your cart"
    }
  }
  },
   methods: {
     ...mapActions('cart', [
    'addCatToCart',
    'manageButtonColor',
    'manageButtonText'
  ]),
    addToCart: function (cat) {
      this.addCatToCart(cat);
    }
  }
}
</script>
