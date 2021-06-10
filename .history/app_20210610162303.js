const express = require( 'express' );
const app = express();

const productsRoutes = require( './apis/routes/products' );
const ordersRoutes = require( './apis/routes/orders' );
const morgan = require( 'morgan' );

app.use( morgan( dev ) );

app.use( '/products', productsRoutes );
app.use( '/orders', ordersRoutes );

module.exports = app;