/** ------------------ IMPORTING PACKAGE/MODELS ------------------ **/
const Product = require('../models/product');



/** ------------------ EXPORTING FUNCTION To add a product ------------------ **/
module.exports.addProductPage = async function(req, res) {
    return res.render('addInventory', {
      title: 'Add Inventory'
    })
}
/** ------------------ EXPORTING FUNCTION To add a product ------------------ **/
module.exports.addProduct = async function(req, res) {
  try {
    const productData = {
        productName: req.body.productName,
        category: req.body.category,
        userRef: req.user._id,
        MRP: req.body.MRP,
        SP: req.body.SP,
        quantity: req.body.quantity,
        image: req.body.image, 
    }
    const product = await Product.create(productData);

    if(product) {
        console.log("Product created");
        return res.redirect('/'); 
    } else {
        console.log("Cannot add Product");
        return res.redirect('back');
    }
  } catch (err) {
    console.error('Error in adding product:', err);
    return res.redirect('back');
  }
};
/** ------------------ EXPORTING FUNCTION To show inventory ------------------ **/
module.exports.showInventory = async function(req, res) {
    const products = await Product.find({userRef: req.params.id});
    return res.render('showInventory', {
      title: 'Inventory',
      products: products
    })
}