const express = require( 'express' );
const router = express.Router();
const mongoose = require( 'mongoose' );

const Order = require( './../models/order' );
const Product = require( './../models/product' );

router.get( '/', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

router.post( '/', ( req, res, next ) => {
	const order = new Order( {
		_id: mongoose.Types.ObjectId(),
		product: req.body.productId,
		quantity: req.body.quantity
	} )
	Product
		.findById( req.body.productId )
		.exec()
		.then( ( result ) => {
			if ( !result ) {
				return res.status( 404 ).json( {
					message: 'product not found'
				} );
			}
			return order.save()
		} )
		.then( ( result ) => {
			res.status( 200 ).json( {
				result: result
			} )
		} )
		.catch( error => {
			console.log( 'hi', error );
			res.status( 500 ).json( {
				error
			} )
		} );
} );
router.get( '/:productid', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

module.exports = router;