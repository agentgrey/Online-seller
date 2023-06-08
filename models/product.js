/** ------------------ IMPORTING MONGOOSE ------------------ **/
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    userRef : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User'
    },
    category: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    MRP: {
      type: Number,
      required: true,
    },
    SP: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

/** ------------------ MAKING MODEL ------------------ **/
const Product = mongoose.model('Product', productSchema);

/** ------------------ EXPORTING MODEL ------------------ **/
module.exports = Product;