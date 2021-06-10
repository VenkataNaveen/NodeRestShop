const express = require( 'express' );
const app = express();
const productsRoutes = require( './apis/routes/products' );
const ordersRoutes = require( './apis/routes/orders' );

app.use( '/products', productsRoutes );
app.use( '/orderss', ordersRoutes );

module.exports = app;