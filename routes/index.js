/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();

/** ------------------ IMPORTING CONTROLLERS ------------------ **/
const homeController = require('../controllers/homeController');



console.log('Router is loaded');

/** ------------------ MAKING ROUTES ------------------ **/
router.get('/' , homeController.home );
router.use('/users' , require('./user'));

/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;