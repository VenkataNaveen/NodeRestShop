const express = require( 'express' );
const router = express.Router();


router.get( '/', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

router.post( '/', ( req, res, next ) => {
	const product = {
		name: req.body.name,
		price: req.body.price
	};
	res.status( 200 ).json( {
		message: 'Product create succesfully',
		product: product
	} );
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
