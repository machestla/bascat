/**
 * Mocking client-server processing
 */
const _cats = [];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_cats), 100)
  },

  buyProducts(cats, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}
