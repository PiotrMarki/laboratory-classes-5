const Cart = require("../models/cart");
const { MENU_LINKS } = require("../constants/navigation");

exports.getHomeView = (request, response) => {
  const cartCount = Cart.getProductsQuantity();

  response.render("home.ejs", {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
    cartCount,
  });
};
