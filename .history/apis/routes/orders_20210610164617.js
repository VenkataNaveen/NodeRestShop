const express = require( 'express' );
const router = express.Router();


router.get( '/', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

router.post( '/', ( req, res, next ) => {
	const order = {
		productId: req.body.productId,
		quantity: req.body.quantity
	};
	res.status( 200 ).json( {
		message: 'orders placed succesfully',
		order: order
	} );
} );
router.get( '/:productid', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

module.exports = router;