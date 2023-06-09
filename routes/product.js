/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();

/** ------------------ IMPORTING CONTROLLERS ------------------ **/
const productController = require('../controllers/productController');


/** ------------------ MAKING ROUTES ------------------ **/
router.get('/', productController.addProductPage);
router.post('/add', productController.addProduct);
router.get('/:id/inventory', productController.showInventory);

/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;