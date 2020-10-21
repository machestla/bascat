<template>
  <div>
    <CButton ref="btnRef" @click="isOpen = true" ariaLabel="open menu button"><font-awesome-icon icon="bars" /></CButton>
    <CDrawer placement="left" :on-close="close" :isOpen="isOpen">
      <CDrawerOverlay />
      <CDrawerContent  width="20rem">
        <CDrawerHeader>
          <CFlex width="100%" justify="space-between">
          <CIconButton icon="close" @click="isOpen = false" ariaLabel="close menu button"/>
          <CText>Menu</CText>
          <CIconButton
            mr="3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            :aria-label="
              `Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`
            "
            @click="toggleColorMode"
          />
          </CFlex>
        </CDrawerHeader>
        <CDrawerBody>
          <SearchBar/>
          <MenuAccordion />
        </CDrawerBody>
      </CDrawerContent>
    </CDrawer>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import {
  CIconButton,
  CText,
  CButton,
  CDrawer,
  CDrawerBody,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerHeader,
  CDrawerCloseButton,
  CFlex
} from '@chakra-ui/vue';
import MenuAccordion from "./accordion";
import SearchBar from "./searchbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faBars } from "@fortawesome/free-solid-svg-icons";
import {
	FontAwesomeIcon,
	FontAwesomeLayers,
	FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";

library.add( faBars);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);
export default {
  name: 'MenuDrawer',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CIconButton,
    CText,
    CButton,
    CDrawer,
    CDrawerBody,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
    MenuAccordion,
    SearchBar,
    CFlex
  },
  data () {
      return {
        isOpen: false,
        placement: 'right'
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
    methods: {
      close () {
        this.isOpen = false
      }
    }
}
</script>
