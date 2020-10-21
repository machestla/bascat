<template>
  <CBox class="container" v-bind="mainStyles[colorMode]" minHeight="100vh" padding="5rem">
  <CBox pl="5rem" pr="5rem" pt="3rem">
    <CHeading as="h2" size="lg" pb="1rem">
        Rub whiskers on bare skin act innocent cat gets stuck in tree
      </CHeading>
      Loves cheeseburgers chill on the couch table
      Cat ipsum dolor sit amet, meow to be let in so purrr purr littel cat, little cat purr purr. Push your water glass 
      on the floor proudly present butt to human yet meow yet purr when being pet i'm going to lap some water out of my master's 
      cup meow, so attack feet. Under the bed grab pompom in mouth and put in water dish but paw at beetle and eat it before it gets 
      away but i'm going to lap some water out of my master's cup meow. Be superior. Hide at bottom of staircase to trip human rub 
      whiskers on bare skin act innocent human give me attention meow stare at ceiling mrow. Purr like a car engine oh yes, there 
      is my human slave woman she does best pats ever that all i like about her hiss meow purr like a car engine oh yes, there is 
      my human slave woman she does best pats ever that all i like about her hiss meow paw your face to wake you up in the morning 
      steal mom's crouton while she is in the bathroom and where is it? i saw that bird i need to bring it home to mommy squirrel! 
      fall asleep on the washing machine. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce chase laser i 
      bet my nine lives on you-oooo-ooo-hooo. Meow. Love and coo around boyfriend who purrs and makes the perfect moonlight eyes so 
      i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater). Eat owner's food i’m so hungry i’m so 
      hungry but ew not for that but i like cats because they are fat and fluffy russian blue. Pet me pet me pet me pet me, bite, 
      scratch, why are you petting me lick master's hand at first then bite because im moody. White cat sleeps on a black shirt if it 
      fits, i sits. Meow meow, i tell my human always hungry. Funny little cat chirrup noise shaking upright tail when standing next to 
      you eat the fat cats food yet meow and walk away pee in human's bed until he cleans the litter box disappear for four days and 
      return home with an expensive injury; bite the vet. Hopped up on catnip. Touch my tail, i shred your hand purrrr steal raw zucchini 
      off kitchen counter or stand with legs in litter box, but poop outside so human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken!.  
    </CBox>
  </CBox>
</template>


<script lang="js">
import {
  CBox,
  CHeading
} from '@chakra-ui/vue';

export default {
  name: 'About',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CHeading
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
    colorMode () {
      return this.$chakraColorMode()
    },
  },
}
</script>
