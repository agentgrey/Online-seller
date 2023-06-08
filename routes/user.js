/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();
/** ------------------ IMPORTING CONTROLLERS ------------------ **/
const userController = require('../controllers/userController');



/** ------------------ MAKING ROUTES ------------------ **/
router.get('/signIn', userController.signIn);
router.get('/signUp', userController.signUp);

/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;