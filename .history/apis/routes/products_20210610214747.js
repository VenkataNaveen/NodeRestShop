const express = require( 'express' );
const router = express.Router();
const mongoose = require( 'mongoose' );

const Product = require( './../models/product' );

router.get( '/', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

router.post( '/', ( req, res, next ) => {
	const product = new Product( {
		_id: mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price
	} );

	product.save()
		.then( ( result ) => {
			console.log( result );
		} )
		.catch( error => console.log( error ) );
	res.status( 200 ).json( {
		message: 'Product created succesfully',
		product: product
	} );
} );

router.get( '/:productid', ( req, res, next ) => {
	const productId = req.params.productId;
	Product
		.findById( productId )
		.then( ( result ) => {
			console.log( result );
		} )
		.catch( error => console.log( error ) );

} );

router.patch( '/:productid', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

router.delete( '/:productid', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

module.exports = router;
