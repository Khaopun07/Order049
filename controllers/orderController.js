// Import Model
const orders = require('../models/orders');



// Function get all data and export
exports.getAllOrder = async (req, res) => {
    try {
        const order = await orders.find();
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Function get data by genre and export
exports.getOrder = async (req, res) => {
    try {
        const { product } = req.params;
        const Order = await orders.findById(product);
        if (!Order) return res.status(404).json({ message: "order not found" });
        res.status(200).json(Order);
    } catch (err) {
        res.status(500).json({ message: err.message });
      }
};
// Function add and export
exports.createOrder = async (req, res) => {
    const { customer_name, product, quantity, order_date, status } = req.body;

    const order = new orders({ 
        customer_name, 
        product, 
        quantity, 
        order_date, 
        status
    });
    try {
        const neworder = await order.save();
        res.status(201).json(neworder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Function update and export
exports.updateOrder = async (req,res) => {
    try{
        const {product} = req.params;
        const order = await orders.findById(product);

        if(!order) return res.status(404).json({message : 'order not found'});
        const data = {$set : req.body};

        await order.findByIdAndUpdate(product,data);

        res.status(200).json({ message: 'order updated successfully' });
    }catch (err) { 

        res.status(400).json({ message: err.message }); 

    }
}

// Function delete and export
exports.deleteOrder = async(req,res) =>{
    try{
        const { product } = req.params;
        const order = await orders.findById(product);
        if(!order) return res.status(404).json({message: 'order not found'});
        await order.findByIdAndDelete(product);
        res.status(200).json({ message: 'order deleted successfully' });
    }catch(err){
        res.status(404).json({message : err.message});
    }
}
