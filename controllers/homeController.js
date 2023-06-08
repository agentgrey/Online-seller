/** ------------------ IMPORTING PACKAGE/MODELS ------------------ **/
const User = require('../models/user');
const Product = require('../models/product');

/** ------------------ EXPORTING FUNCTION To open home page ------------------ **/
module.exports.home = async function(req, res){
    try {
        const products = await Product.find();

        if(req.user) {
            return res.render('home', {
                title : 'Online Seller',
                products: products
            })
        } else {
            return res.render('signUp', {
                title : 'Sign Up',
                products : []
            })
        }
    } catch (error) {
        console.log("Error in homeController/home", error);
        return;
    }
}
/** ------------------ EXPORTING FUNCTION To open sign In page ------------------ **/
module.exports.signIn = function(req, res){
    try {
        return res.render('signIn', {
            title : 'Sign In'
        })
    } catch (error) {
        console.log("Error in homeController/signIn", error);
        return;
    }
}
/** ------------------ EXPORTING FUNCTION To open sign Up page ------------------ **/
module.exports.signUp = function(req, res){
    try {
        return res.render('signUp', {
            title : 'Sign Up',
        })
    } catch (error) {
        console.log("Error in homeController/signUp", error);
        return;
    }
}