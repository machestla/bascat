<template>
  <CBox
    maxW="sm"
    border-width="1px"
    rounded="lg"
    overflow="hidden"
    width="fit-content"
  >
    <CImage :src="cat.imageSrc" :alt="cat.imageDescription" />
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
        <CBox mt="4" textAlign="right" font-weight="bold" font-size="2xl">
          {{ cat.price }}
          <CBox as="span" color="gray.600" fontSize="sm"> euros </CBox>
        </CBox>
        <CGrid
          justify="space-around"
          gap="6"
          template-columns="repeat(2, 1fr)"
          mt="5"
        >
          <CButton variant="ghost" as="nuxt-link" :to="'/cats/' + cat.id"
            >See details</CButton
          >
          <AddToCartButton :cat="cat" />
        </CGrid>
      </CFlex>
    </CBox>
  </CBox>
</template>

<script lang="js">
import Vue from "vue";

import {
  CBox,
  CFlex,
  CHeading,
  CImage,
  CBadge,
  CButton,
  CGrid
} from '@chakra-ui/vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AddToCartButton } from "./add-to-cart-button";
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
  name: 'Card',
  components: {
  CBox,
  CGrid,
  CHeading,
  CImage,
  CBadge,
  CButton,
  CFlex
  },
  	props:
      {
        cat:
          {
            name: String,
            description: String,
            age:String,
            breed:String,
            fiv:Boolean,
            felv:Boolean,
            price:String,
            imageSrc:String
          }
      },

}
</script>
