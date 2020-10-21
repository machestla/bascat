
import shop from '../api/shop'
export const state = () => ({
  cats: [{
    id: "second",
    name: "Lulu",
    age: "2.5",
    breed: "street cat",
    color: "black",
    description: "bite you when you don't give him food, love to play, eat and cuddle. Accept some hugs but not everytime.",
    fiv: true,
    felv: false,
    price: "0,000",
    imageSrc: "https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    imageDescription: "black cat face",
    tag: "new"
  },
  {
    id: "first",
    name: "Rex",
    age: "3",
    breed: "street cat",
    color: "black & white",
    description: "scared by everything but very loving cat! He like having a whole discussion with someone to talk about his life, his food and his sleep time!",
    fiv: false,
    felv: false,
    price: "0,000",
    imageSrc: "https://images.unsplash.com/photo-1584126421198-72ac27b386b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    imageDescription: "black and white cat",
    tag: "new"
  },
  {
    id: "sister-cat",
    name: "Ninou",
    age: "6",
    breed: "street cat",
    color: "toast colors",
    description: "Here Ninou, a big cat (6kg) in his middle life. He loooooooooves eating, playing and cuddling and is mostly at the center of attention.",
    fiv: true,
    felv: false,
    price: "0,000",
    imageSrc: "https://images.unsplash.com/photo-1511693753178-6083470565c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    imageDescription: "toasted cat",
    tag: "favorite"
  },
  {
    id: "kitten1",
    name: "Kit",
    age: "0.5",
    breed: "street cat",
    color: "toast colors",
    description: "Here Ninou, a big cat (6kg) in his middle life. He loooooooooves eating, playing and cuddling and is mostly at the center of attention.",
    fiv: false,
    felv: false,
    price: "0,000",
    imageSrc: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    imageDescription: "toasted cat",
    tag: "new"
  },
  {
    id: "kitten2",
    name: "Kat",
    age: "0.5",
    breed: "street cat",
    color: "toast colors",
    description: "Here Ninou, a big cat (6kg) in his middle life. He loooooooooves eating, playing and cuddling and is mostly at the center of attention.",
    fiv: false,
    felv: true,
    price: "0,000",
    imageSrc: "https://images.unsplash.com/photo-1513977055326-8ae6272d90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    imageDescription: "toasted cat",
    tag: "favorite"
  },
  {
    id: "granpa1",
    name: "Grumpy",
    age: "9",
    breed: "street cat",
    color: "toast colors",
    description: "Here Ninou, a big cat (6kg) in his middle life. He loooooooooves eating, playing and cuddling and is mostly at the center of attention.",
    fiv: false,
    felv: false,
    price: "0,000",
    imageSrc: "https://images.unsplash.com/photo-1599541244727-05544c8e6419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    imageDescription: "toasted cat",
    tag: "hello"
  },
  {
    id: "cat",
    name: "Tigrou",
    age: "8",
    breed: "street cat",
    color: "toast colors",
    description: "Here Ninou, a big cat (6kg) in his middle life. He loooooooooves eating, playing and cuddling and is mostly at the center of attention.",
    fiv: false,
    felv: false,
    price: "0,000",
    imageSrc: "https://images.unsplash.com/photo-1598813432539-e0f02827fd87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    imageDescription: "toasted cat",
    tag: "hello"
  }
  ]
});

// getters
const getters = {}

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(cats => {
      commit('setProducts', cats)
    })
  }
}

// mutations
const mutations = {
  setProducts(state, cats) {
    state.all = cats
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
