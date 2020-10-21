<template>
    <CInputGroup flex="1" text-align="left">
    <CInput placeholder="Search" />
    <CInputRightElement>
        <font-awesome-icon icon="search" />
    </CInputRightElement>
    </CInputGroup>
</template>

<script lang="js">
import Vue from "vue";

import {
  CInputGroup,
  CInput,
  CIcon,
  CInputRightElement
} from '@chakra-ui/vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import {
	FontAwesomeIcon,
	FontAwesomeLayers,
	FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
library.add( faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);
export default {
  name: 'SearchBar',
  components: {
  CInputGroup,
  CInput,
  CInputRightElement,
  CIcon
  }
}
</script>
