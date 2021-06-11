const express = require( 'express' );
const router = express.Router();
const mongoose = require( 'mongoose' );
const multer = require( 'multer' );



const fileFilter = ( req, file, cb ) => {
	if ( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ) {
		console.log( "images" )
		cb( null, true )
	} else {
		console.log( "imagef" )
		cb( null, false )
	}
}
const storage = multer.diskStorage( {
	destination: function ( req, file, cb ) {
		console.log( "Dest" );
		cb( null, './uploads/' )
	},
	filename: function ( req, file, cb ) {

		cb( null, new Date().toISOString() + file.originalname )
	}
} )
const upload = multer( {
	storage: storage, limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: fileFilter
} );

const Product = require( './../models/product' );

router.get( '/', ( req, res, next ) => {

	Product
		.find()
		.select( "name" )
		.exec()
		.then( ( result ) => {
			res.status( 200 ).json( {
				result: result
			} )
		} )
		.catch( error =>
			res.status( 500 ).json( {
				error
			} ) );
} );

router.post( '/', upload.single( 'productImage' ), ( req, res, next ) => {
	console.log( req.file.path );
	const product = new Product( {
		_id: mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price,
		productImage: req.file.path
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

router.get( '/:productId', ( req, res, next ) => {
	const productId = req.params.productId;

	Product
		.findById( productId )
		.exec()
		.then( ( result ) => {
			res.status( 200 ).json( {
				result: result
			} )
		} )
		.catch( error =>
			res.status( 500 ).json( {
				error
			} ) );
} );

router.patch( '/:productId', ( req, res, next ) => {
	const id = req.params.productId;
	const updatedOpes = {};

	Product
		.updateOne( { _id: id }, { $set: { name: req.body.name } } )
		.exec()
		.then( ( result ) => {
			res.status( 200 ).json( {
				result: result
			} )
		} )
		.catch( error =>
			res.status( 500 ).json( {
				error
			} ) );
} );

router.delete( '/:productId', ( req, res, next ) => {
	const productId = req.params.productId;
	Product
		.deleteOne( { _id: productId } )
		.exec()
		.then( ( result ) => {
			res.status( 200 ).json( {
				result: result
			} )
		} )
		.catch( error =>
			res.status( 500 ).json( {
				error: error
			} ) );
} );

module.exports = router;
