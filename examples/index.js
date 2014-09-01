var isInterval = require( './../lib' );

console.log( isInterval( 3, 0, 6 ) );
// Returns true

console.log( isInterval( 3, 4, 10 ) );
// Returns false