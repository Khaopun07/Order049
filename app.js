const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json())

// MongoDB Config
mongoose.connect(process.env.MONGO_URL,{
}).then(() => console.log('Mongo DB Connect'))
.catch(err => console.log(err));
// Routing Config
const order = require('./routes/orders');
app.use('/api',order);
// Server Running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} `));