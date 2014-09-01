
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	validate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-interval', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( validate ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( validate( 0.5, 0, 1 ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				-1,
				2,
				true,
				[],
				'5',
				function(){},
				null,
				NaN,
				{'foo':'bar'},
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !validate( values[i], 0, 1 ) );
		}
	});

	it( 'should negatively validate if the interval bounds are not numeric', function test() {
		var values = [
				true,
				[],
				'5',
				function(){},
				null,
				NaN,
				{'foo':'bar'},
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !validate( 1, values[i], 1 ) );
			assert.ok( !validate( 1, 0, values[i] ) );
		}
	});

});