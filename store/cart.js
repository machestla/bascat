import shop from '../api/shop'
export const state = () => ({
  cats: [],
  checkoutStatus: null
});

// getters
const getters = {
  cartCats: (state) => {
    return state.cats && state.cats.map(({ id }) => {
      return state.cats.find(cat => cat.id === id);
    })
      || []
  },

  cartTotalPrice: (state, getters) => {
    if (getters.cartCats.length === 0) {
      return "0 euros"
    } else {
      return "not your heart because you seem to not have one dummy"
    }
  }
};

// actions
const actions = {
  checkout({ commit, state }, cats) {
    const savedCartCats = [...state.cats]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartCats', { cats: [] })
    shop.buyCats(
      cats,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartCats', { cats: savedCartCats })
      }
    )
  },
  addCatToCart({ state, commit }, cat) {
    if (state.cats.indexOf(cat) === -1) {
      commit('pushCatToCart', cat)
    } else {
      commit('removeCatFromCart', cat)
    }
  },
  manageButtonColor({ state }, cat) {
    if (state.cats.indexOf(cat) === -1) {
      return "gray"
    } else {
      return "green"
    }
  },
  manageButtonText({ state }, cat) {
    if (state.cats.indexOf(cat) === -1) {
      return "Add to cart"
    } else {
      return "Added to your cart"
    }
  }
}

// mutations
const mutations = {
  pushCatToCart(state, cat) {
    state.cats.push(cat)
  },
  removeCatFromCart(state, cat) {
    state.cats.splice(state.cats.indexOf(cat), 1);
  },
  setCartCats(state, { cats }) {
    state.cats = cats
  },
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
