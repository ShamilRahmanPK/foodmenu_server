const express = require('express');
const menuController = require('../controller/menuController')

const router = express.Router();


// add menu controller
router.post('/addMenu',menuController.addMenuController)

// get all menu items
router.get('/getAllMenu',menuController.getAllMenuController)



module.exports = router;
