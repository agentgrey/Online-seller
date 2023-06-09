/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();
const passport = require('passport');
/** ------------------ IMPORTING CONTROLLERS ------------------ **/
const userController = require('../controllers/userController');



/** ------------------ MAKING ROUTES ------------------ **/
router.post('/create', userController.create);
router.post('/createSession',passport.authenticate(
    'local', {failureRedirect: '/users/singIn'},)
, userController.createSession);
router.get('/destroySession', userController.destroySession);

router.post('/addStoreInfo' , userController.addStoreInfo);
router.get('/storeInfo', userController.storeInfo);

router.use('/products', require('./product'));

/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;