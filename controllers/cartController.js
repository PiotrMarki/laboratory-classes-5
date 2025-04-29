const Product = require("../models/Product");
const Cart = require("../models/cart");
const { STATUS_CODE } = require("../constants/statusCode");

console.log(STATUS_CODE);

exports.addProductToCart = (request, response) => {
  const { name, description, price, quantity } = request.body;

  const product = new Product(name, description, price);
  Product.add(product);

  try {
    Cart.add(name, quantity);
    response.status(201).redirect("/products/new"); 
  } catch (error) {
    response.status(400).json({ error: error.message }); 
  }
};

exports.getProductsCount = (request, response) => {
  const totalQuantity = Cart.getProductsQuantity();
  response.status(STATUS_CODE.OK).json({ totalQuantity });
};