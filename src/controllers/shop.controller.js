const path = require("path");
const { getAll, getOne, edit } = require('../models/product.model');

module.exports = {
  shop: async (req, res) => {
    
    const data = await getAll();
    
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      title: "Tienda",
      data
    });
  },
  item: async (req, res) => {
    const itemId = req.params.id;

    const [ item ] = await getOne(itemId);
    
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      title: "Item",
      item
    });
  },
  item: async (req, res) => {
    const itemId = req.params.id;

    const [ item ] = await edit(itemId);
    
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      title: "Item",
      item
    });
  },
  addItem: (req, res) => res.send("Esta es la ruta para agregar un nuevo item"),
  cart: (req, res) => res.send("Esta es la vista del carrito"),
  addToCart: (req, res) =>
    res.send("Esta es la ruta para agregar un item al carrito"),
};
