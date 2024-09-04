const express = require('express'); 
const router = express.Router();
const { getAllOrder, getOrder, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

// Import Controller
router.get('/orders', getAllOrder);
router.get('/orders/:product', getOrder);
router.post('/orders', createOrder);
router.put('/orders/:id ', updateOrder);
router.delete('/orders/:id', deleteOrder);

// Export router
module.exports = router;