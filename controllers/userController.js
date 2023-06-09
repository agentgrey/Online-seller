/** ------------------ IMPORTING PACKAGE/MODELS ------------------ **/
const User = require('../models/user');
const Store = require('../models/storeInfo');
const Product = require('../models/product');


/** ------------------ EXPORTING FUNCTION To create a user ------------------ **/
module.exports.create = async function(req, res){
    if(req.body.password != req.body.confirmPassword){
        console.log("Password mismatch");
        return res.redirect('back');
    }
    let buisness = await User.findOne({email : req.body.email});
    if(!buisness){
        console.log("User created");
        await User.create(req.body);
        return res.redirect('/signIn');
    }
    console.log("User already present")
    return res.redirect('back');
}
/** ------------------ EXPORTING FUNCTION To create session ------------------ **/
module.exports.createSession = async function(req, res){
    const user = await User.findOne({email : req.body.email});
    if(req.body.password !== user.password ){
        return res.redirect('back');
    }
    return res.redirect('/');
}
/** ------------------ EXPORTING FUNCTION To destroy session ------------------ **/
module.exports.destroySession = async function(req, res, done) {
    req.session.destroy(function(err) {
        if (err) {
        console.error('Error destroying session:', err);
        }
    });
    console.log("Logged out!");
    return res.redirect('/signIn');
}
/** ------------------ EXPORTING FUNCTION To go to store Info page ------------------ **/
module.exports.storeInfo = async function (req, res) {
    const storeInfo = await Store.find({userRef: req.user._id});

    return res.render ('storeInfo', {
        title: 'Store Info',
        info: storeInfo
    })
}
/** ------------------ EXPORTING FUNCTION To add storeInfo ------------------ **/
module.exports.addStoreInfo = async function (req, res) {
    const storeData = {
        address: req.body.address,
        userRef: req.user._id,
        gst: req.body.gst,
        phone: req.body.phone,
        website: req.body.website,
        category: req.body.category,
    };
    // Create a new Store record
    const info = await Store.create(storeData);

    if(info) {
        console.log("Info added! ")
        return res.redirect('/');
    } else {
        console.log("Cannot add Info");
        return res.redirect('back');
    }
    
};
  