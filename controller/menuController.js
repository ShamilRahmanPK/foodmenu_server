const Menu = require('../models/menuModel');
const mongoose = require('mongoose');

// menu Controller
exports.addMenuController = async (req, res) => {
    try {
      const { menuName, description, menuItems } = req.body;
  
      // Validate required fields
      if (!menuName || !menuItems || !Array.isArray(menuItems)) {
        return res.status(400).json({ message: 'Menu name and menu items are required.' });
      }
  
      // Validate menu items
      for (const item of menuItems) {
        if (!item.itemName || !item.price) {
          return res.status(400).json({ message: 'Item name and price are required for each menu item.' });
        }
      }
  
      const newMenu = new Menu({
        menuName,
        description,
        menuItems,
      });
  
      const savedMenu = await newMenu.save();
  
      res.status(200).json({ message: 'Menu added successfully', menu: savedMenu });
    } catch (err) {
      console.error('Error adding menu:', err);
  
      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Validation error', errors: err.errors });
      }
  
      res.status(500).json({ message: 'Failed to add menu', error: err.message || 'Internal Server Error' });
    }
  };


//   get all menu items

exports.getAllMenuController = async (req, res) => {
  try {
    console.log("🔥 API Called: get-all-menus");  // Log when API is hit
    const menuItems = await Menu.find();  // Fetch from MongoDB
    console.log("✅ Fetched Menu Items:", menuItems);  // Log fetched data
    res.status(200).json(menuItems);
} catch (error) {
    console.error("❌ Backend Error in get-all-menus:", error);  // Log error details
    res.status(500).json({ message: "Internal Server Error", error: error.message });
}
}