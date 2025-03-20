const mongoose = require('mongoose');



const menuItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

const menuSchema = new mongoose.Schema({
  menuName: {
    type: String,
    required: true,
  },
  menuItems: [menuItemSchema],
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;