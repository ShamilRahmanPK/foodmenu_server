const mongoose = require('mongoose');

const MONGO_URI = process.env.CONNECTION_STRING || 'your-default-mongodb-uri';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
});

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