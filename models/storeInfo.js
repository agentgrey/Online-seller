/** ------------------ IMPORTING MONGOOSE ------------------ **/
const mongoose = require('mongoose');

const storeInfo = new mongoose.Schema({
    address : {
        type : 'String',
        required : true
    },
    userRef : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    gst : {
        type : 'String',
        required : true
    },
    phone : {
        type : 'String'
    },
    website : {
        type: 'String'
    },
    category : {
        type : 'String',
        required : true
    }
},
    {
        timestamps : true
    }
);

/** ------------------ MAKING MODEL ------------------ **/
const Store = mongoose.model('Store', storeInfo);

/** ------------------ EXPORTING MODEL ------------------ **/
module.exports = Store;