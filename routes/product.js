/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();

/** ------------------ IMPORTING CONTROLLERS ------------------ **/
const productController = require('../controllers/productController');


/** ------------------ MAKING ROUTES ------------------ **/
router.post('/add', productController.addProduct);

/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;