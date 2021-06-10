const express = require( 'express' );
const router = express.router();


router.get( '/', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

router.post( '/', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );
router.get( '/:productid', ( req, res, next ) => {
	res.status( 200 ).json( {
		message: 'it works'
	} );
} );

module.exports = router;