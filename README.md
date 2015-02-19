Interval
========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value exists on a specified interval.


## Installation

``` bash
$ npm install validate.io-interval
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var onInterval = require( 'validate.io-interval' );
```

#### onInterval( value, lower, upper )

Validates if a `value` exists on a specified interval `[lower, upper]`, where `lower` is the lower interval bound (inclusive) and `upper` is the upper interval bound (inclusive).


``` javascript
var value = 5,
	lower = 0,
	upper = 10;

var bool = onInterval( value, lower, upper );
// returns true
```


__Note__: all `arguments` must be `numeric`. If provided non-numeric arguments, the method returns `false`.


## Examples

``` javascript
console.log( onInterval( 3, 0, 6 ) );
// returns true

console.log( onInterval( 3, 4, 10 ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-interval.svg
[npm-url]: https://npmjs.org/package/validate.io-interval

[travis-image]: http://img.shields.io/travis/validate-io/interval/master.svg
[travis-url]: https://travis-ci.org/validate-io/interval

[coveralls-image]: https://img.shields.io/coveralls/validate-io/interval/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/interval?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/interval.svg
[dependencies-url]: https://david-dm.org/validate-io/interval

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/interval.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/interval

[github-issues-image]: http://img.shields.io/github/issues/validate-io/interval.svg
[github-issues-url]: https://github.com/validate-io/interval/issues
