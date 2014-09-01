/**
*
*	VALIDATE: interval
*
*
*	DESCRIPTION:
*		- Validates if a value exists on a specified interval.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: interval( value, lower, upper )
	*	Validates if a value resides on a specified interval (inclusive).
	*
	* @param {Number} value - value to be validated
	* @param {Number} lower - interval lower bound (inclusive)
	* @param {Number} upper - interval upper bound (inclusive)
	* @returns {Boolean} boolean indicating whether value is within a specified interval
	*/
	function interval( value, lower, upper ) {
		if ( typeof value !== 'number' || value !== value ) {
			return false;
		}
		return ( lower <= value && value <= upper );
	} // end FUNCTION interval()


	// EXPORTS //

	module.exports = interval;

})();