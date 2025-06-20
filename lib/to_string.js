/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var contains = require( '@stdlib/array-base-assert-contains' ).factory;
var join = require( '@stdlib/array-base-join' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );
var linearFormat = require( './format_linear.js' );
var layoutFormat = require( './format_layout.js' );


// VARIABLES //

var FORMATS = [
	'none',
	'linear',
	'layout'
];
var isFormat = contains( FORMATS );


// MAIN //

/**
* Serializes a `struct` instance to a string.
*
* @private
* @param {Struct} struct - struct instance
* @param {Array<Object>} fields - list of normalized fields
* @param {Options} options - function options
* @param {string} [options.format] - serialization format
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} string representation
*/
function toString( struct, fields, options ) { // eslint-disable-line stdlib/no-redeclare
	var opts;
	if ( !isPlainObject( options ) ) {
		throw new TypeError( format( 'null2V', options ) );
	}
	opts = {
		'format': 'none'
	};
	if ( hasOwnProp( options, 'format' ) ) {
		opts.format = options.format;
		if ( !isFormat( opts.format ) ) {
			throw new TypeError( format( 'null4S', 'format', join( FORMATS, ', ' ), options.format ) );
		}
	}
	if ( opts.format === 'linear' ) {
		return linearFormat( struct.constructor, fields );
	}
	if ( opts.format === 'layout' ) {
		return layoutFormat( fields );
	}
	// Case: opts.format === 'none'
	return '<Struct>';
}


// EXPORTS //

module.exports = toString;
