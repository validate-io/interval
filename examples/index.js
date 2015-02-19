'use strict';

var onInterval = require( './../lib' );

console.log( onInterval( 3, 0, 6 ) );
// returns true

console.log( onInterval( 3, 4, 10 ) );
// returns false

console.log( onInterval( 11, 4, 10 ) );
// returns false
