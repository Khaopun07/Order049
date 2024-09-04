const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer_name: {type: String, required: true, maxlength: 255},
    product: {type: String, required: true, maxlength: 100},
    quantity: {type: Number, required: true, maxlength: 100},
    order_date: {type: String, required: true, maxlength: 30},
    status: {type: String, required: true, maxlength: 100},
}, {timestamps: true, versionKey: false});

module.exports = mongoose.model('order', orderSchema);
