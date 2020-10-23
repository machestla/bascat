
import shop from '../api/shop'
export const state = () => ({
  users: [{
    id: "salade",
    name: "Mâche",
    familyName: "AndRoquette",
    password: "IEatSalads",
    age: "23",
    email: "machesartandwork@gmail.com",
    imageSrc: "https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
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
