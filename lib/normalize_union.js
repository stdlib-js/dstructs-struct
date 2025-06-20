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

var isObject = require( '@stdlib/assert-is-object' );
var hasProp = require( '@stdlib/assert-has-property' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );
var isUnionType = require( './is_union_type.js' );
var FIELD_PROPERTIES = require( './field_properties.js' );
var normalizeField = require( './normalize_field.js' );
var resolveAlignment = require( './resolve_alignment.js' );


// MAIN //

/**
* Normalizes a field object representing a union type.
*
* @private
* @param {Object} obj - input field object
* @returns {(Object|null|Error)} normalized field object or error object
*/
function normalizeUnion( obj ) {
	var fields;
	var dflg;
	var out;
	var tmp;
	var len;
	var o;
	var i;

	fields = obj.fields;
	if ( fields.length === 0 ) {
		return null;
	}
	out = [];
	for ( i = 0; i < fields.length; i++ ) {
		o = fields[ i ];
		if ( !isObject( o ) ) {
			return null;
		}
		if ( isUnionType( o ) ) {
			return new TypeError( format( 'invalid argument. Union types cannot contain nested union types. Value: `%s`.', JSON.stringify( fields ) ) );
		}
		if ( dflg === void 0 && hasProp( o, 'default' ) ) {
			dflg = true;
		} else if ( dflg === true && hasProp( o, 'default' ) ) {
			return new TypeError( format( 'invalid argument. Union types can only contain one field with a default value. Value: `%s`.', JSON.stringify( fields ) ) );
		}
		tmp = normalizeField( o, FIELD_PROPERTIES );
		if ( tmp instanceof Error ) {
			return tmp;
		}
		if ( i === 0 ) {
			len = tmp.byteLength;
		} else if ( tmp.byteLength !== len ) {
			return new RangeError( format( 'invalid argument. Union types must contain fields having the same byte length. Value: `%s`.', JSON.stringify( fields ) ) );
		}
		out.push( tmp );
	}
	return {
		'type': 'union',
		'fields': out,
		'byteLength': len,
		'byteOffset': 0,
		'alignment': resolveAlignment( out ),
		'padding': 0
	};
}


// EXPORTS //

module.exports = normalizeUnion;
