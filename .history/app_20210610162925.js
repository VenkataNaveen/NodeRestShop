const express = require( 'express' );
const app = express();

const productsRoutes = require( './apis/routes/products' );
const ordersRoutes = require( './apis/routes/orders' );
const morgan = require( 'morgan' );

app.use( morgan( 'dev' ) );

app.use( '/products', productsRoutes );
app.use( '/orders', ordersRoutes );

app.use( ( req, res, next ) => {
	const error = new Error( 'invalid req' );
	error.status( 404 );
	next( error )
} )

app.use( ( err, req, res, next ) => {
	res.status( err.status || 500 );
	res.json( {
		error: {
			message: error.message
		}
	} )
} )
module.exports = app;