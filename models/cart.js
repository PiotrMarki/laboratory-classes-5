const Product = require('./Product');

class Cart {
  static #items = [];

  static add(productName, quantity = 1) {
    const product = Product.findByName(productName);

    if (!product) {
      throw new Error(`Product with name "${productName}" does not exist.`);
    }

    const existingItem = this.#items.find(item => item.product.name === productName);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.#items.push({ product, quantity });
    }
  }

  static getItems() {
    return this.#items;
  }

  static getTotalPrice() {
    return this.#items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  static getProductsQuantity() {
    return this.#items.reduce((total, item) => total + item.quantity, 0);
  }

  static clearCart() {
    this.#items = [];
  }
}

module.exports = Cart;