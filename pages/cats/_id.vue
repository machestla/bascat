<template>
  <CBox 
      pt="5rem" 
      w="100vw"
      flex-dir="column"
      >
    <CImage :src="cat.imageSrc" :alt="cat.imageDescription" w="100vw"/>
    <CBox overflow="hidden" padding="1rem">
      <CBox d="flex" align-items="baseline">
        <CBadge rounded="full" px="2" variant-color="green">
          {{ cat.tag }}
        </CBadge>
        <CBox
          color="gray.500"
          font-weight="semibold"
          letter-spacing="wide"
          font-size="xs"
          text-transform="uppercase"
          ml="2"
        >
          {{ cat.breed }} | {{ cat.age }} yo |
          {{ cat.fiv == true ? "fiv+" : "fiv-" }} ;
          {{ cat.felv == true ? "felv+" : "felv-" }}
        </CBox>
      </CBox>
      <CBox
        mt="1"
        font-weight="semibold"
        as="h4"
        line-height="tight"
        is-truncated
      >
        {{ cat.name }}
      </CBox>
      <CBox mt="1" as="p" line-height="tight" is-truncated>
        {{ cat.description }}
      </CBox>
      <CFlex flexDirection="column">
        <CBox mt="4" textAlign="right" font-weight="bold" font-size="2xl" mb="2rem">
          {{ cat.price }}
          <CBox as="span" color="gray.600" fontSize="sm"> euros </CBox>
        </CBox>
        <CBox display="flex" justifyContent="flex-end">
          <AddToCartButton :cat="cat" />
          </CBox>
      </CFlex>
    </CBox>
  </CBox>
</template>

<script>
import Vue from "vue";

import {
  CBox,
  CFlex,
  CHeading,
  CImage,
  CBadge,
  CButton,
  CGrid,
} from "@chakra-ui/vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AddToCartButton } from "../../components/product/add-to-cart-button";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
library.add(faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

export default {
  name: "Details",
  components: {
    CBox,
    CGrid,
    CHeading,
    CImage,
    CBadge,
    CButton,
    CFlex,
  },
  computed: {
    cat:function() {
      return this.$store.state.cats.cats.find(
        (cat) => cat.id === this.$route.params.id
      );
    },
  },
};
</script>
