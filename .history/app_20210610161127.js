const express = require( 'express' );
const app = express();
const products = require( './apis/routes/products' );

app.use( '/products', products );

module.exports = app;