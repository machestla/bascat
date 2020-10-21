<template>
  <CFlex
    width="100%"
    justify="space-between"
    align="center"
    paddingTop="1rem"
    paddingLeft="1.5rem"
    paddingBottom="1rem"
    paddingRight="1.5rem"
    position="fixed"
    v-bind="mainStyles[colorMode]"
  >
    <MenuDrawer />
    <nuxt-link to="/">
      <CHeading as="h1" size="xl">BASCAT.COM</CHeading>
    </nuxt-link>
    <CFlex>
      <!-- <SearchBar/> -->
      <nuxt-link to="/shopping-cart">
        <CButton ariaLabel="shopping cart button" marginLeft="1em">
          <font-awesome-icon icon="shopping-cart" />
        </CButton>
      </nuxt-link>
    </CFlex>
  </CFlex>
</template>

<script lang="js">
import Vue from "vue";
import {
  CIconButton,
  CButton,
  CFlex,
  CHeading,
  CBox
} from '@chakra-ui/vue';
import SearchBar from "./searchbar";
import MenuDrawer from "./drawer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
	FontAwesomeIcon,
	FontAwesomeLayers,
	FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);
export default {
  name: 'MenuNav',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CIconButton,
    CButton,
    CFlex,
    CHeading,
    MenuDrawer,
    SearchBar
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
