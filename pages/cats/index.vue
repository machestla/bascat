<template>
  <div class="container">
    <CFlex pt="6rem">
      <CFlex
        flexDirection="column"
        width="15rem"
        position="fixed"
        bg="white"
        alignItems="center"
      >
        <CAccordion :allow-toggle="true">
          <CAccordionItem>
            <CAccordionHeader> Tags </CAccordionHeader>
            <CAccordionPanel pb="4">
              <CFlex flexDirection="column">
                <CBox v-for="(tag, index) in onlyTags" v-bind:key="index">
                  <input
                    type="checkbox"
                    v-model="selectedTags"
                    :value="tag"
                  /><label>{{ tag }}</label>
                </CBox>
              </CFlex>
            </CAccordionPanel>
          </CAccordionItem>
          <CAccordionItem>
            <CAccordionHeader> Ages </CAccordionHeader>
            <CAccordionPanel pb="4">
              <CFlex flexDirection="column">
                <CBox v-for="(age, index) in onlyAges" v-bind:key="index">
                  <input
                    type="checkbox"
                    v-model="selectedAges"
                    :value="age"
                  /><label>{{ age }}</label>
                </CBox>
              </CFlex>
            </CAccordionPanel>
          </CAccordionItem>
          <CAccordionItem>
            <CAccordionHeader> Breeds </CAccordionHeader>
            <CAccordionPanel pb="4">
              <CFlex flexDirection="column">
                <CCheckbox
                  v-for="(breed, index) in onlyBreeds"
                  v-bind:key="index"
                  :value="breed"
                  >{{ breed }}</CCheckbox
                >
              </CFlex>
            </CAccordionPanel>
          </CAccordionItem>
        </CAccordion>
      </CFlex>
      <CFlex flexDirection="column" alignItems="center" ml="15rem">
        <SimpleGallery v-bind:catsArray="filteredCatsArray" />
      </CFlex>
    </CFlex>
  </div>
</template>

<script lang="js">
import {
  CSelect,
  CFlex,
  CBox,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionPanel,
  CAccordionIcon,
  CCheckbox,
  CPseudoBox
  } from '@chakra-ui/vue';
import SimpleGallery from "../../components/gallery/simple";

export default {
  name: 'Preview',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    SimpleGallery,
    CSelect,
    CFlex,
    CBox,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionPanel,
    CAccordionIcon,
    CCheckbox,
    CPseudoBox
  },
  data () {
    return {
      selectedTags: this.$route.query.tag ? [this.$route.query.tag]:[],
      selectedAges: this.$route.query.age ? [this.$route.query.age]:[],
      cats: [],
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
    },
     onlyTags(){
      let tags = [];
      //do foreach
      return this.$store.state.cats.cats.reduce((tags, cat)=> {
        //if I already have the tag in my array
        if(tags.indexOf(cat.tag)>=0){
          return tags.sort()
        }else{
          return [...tags, cat.tag].sort()
        }

      }, [])
    },
    onlyAges(){
      let ages = [];
      //do foreach
      return this.$store.state.cats.cats.reduce((ages, cat)=> {
        //if I already have the tag in my array
        if(ages.indexOf(cat.age)>=0){
          return ages.sort()
        }else{
          return [...ages, cat.age].sort()
        }

      }, [])
     },
    onlyBreeds(){
      let breeds = [];
      //do foreach
      return this.$store.state.cats.cats.reduce((breeds, cat)=> {
        //if I already have the tag in my array
        if(breeds.indexOf(cat.breed)>=0){
          return breeds.sort()
        }else{
          return [...breeds, cat.breed].sort()
        }

      }, [])
    },
    filteredCatsArray(){
      return this.$store.state.cats.cats.filter(cat => (this.selectedTags.indexOf(cat.tag)>=0 || this.selectedTags.length === 0) && (this.selectedAges.indexOf(cat.age)>=0 || this.selectedAges.length === 0));
    },
  }
}
</script>
