const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require('dotenv').config();
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const braintreeRoutes = require('./routes/braintree');

const app = express();
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('database connected');
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', authRoutes);
app.use('/api', orderRoutes);
app.use('/api', braintreeRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});