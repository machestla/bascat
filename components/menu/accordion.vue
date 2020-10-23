<template>
    <CAccordion :allow-toggle="true" paddingTop="1.5em">
      <CAccordionItem>
        <CAccordionHeader>
          <nuxt-link to="/shopping-cart">
            <CBox flex="1" text-align="left"> Shopping Cart</CBox>
          </nuxt-link>
        </CAccordionHeader>
      </CAccordionItem>
      <CAccordionItem>
        <CAccordionHeader>
          <CBox flex="1" text-align="left"> Account</CBox>
          <CAccordionIcon />
        </CAccordionHeader>
        <CAccordionPanel pb="4">
          <nuxt-link to="/log-in">
            Log In / Sign In
          </nuxt-link>
          <p>View Profil</p>
          <nuxt-link to="/settings">Settings</nuxt-link>
          <CBox flex="1" text-align="left"> Log Out</CBox>
        </CAccordionPanel>
      </CAccordionItem>
      <CAccordionItem>
        <CAccordionHeader>
          <nuxt-link to="/about">
            <CBox flex="1" text-align="left"> About Us</CBox>
          </nuxt-link>
        </CAccordionHeader>
      </CAccordionItem>
    </CAccordion>
</template>

<script lang="js">
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionPanel,
  CAccordionIcon,
  CBox,
  CIconButton,
} from '@chakra-ui/vue'

export default {
  name: 'MenuAccordion',
  components: {
    CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionPanel,
  CAccordionIcon,
  CBox,
  CIconButton,
  }
}
</script>
