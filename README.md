<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# struct

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fixed-width composite data type (a.k.a., a `struct`).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import struct from 'https://cdn.jsdelivr.net/gh/stdlib-js/dstructs-struct@v0.1.0-deno/mod.js';
```

#### struct( schema )

Returns a constructor for creating a fixed-width composite data type (a.k.a., a `struct`).

```javascript
var fields = [
    {
        'type': 'union',
        'fields': [
            {
                'name': 'double',
                'description': 'double-precision floating-point number',
                'type': 'float64',
                'enumerable': true,
                'writable': true,
                'castingMode': 'none'
            },
            {
                'name': 'words',
                'description': 'high and low words',
                'type': 'uint32',
                'length': 2,
                'enumerable': true,
                'writable': true,
                'castingMode': 'none'
            }
        ]
    }
];
var Struct = struct( fields );

var data = {
    'double': 3.14
};
var s = new Struct( data );
// returns <Struct>

var v = s.double;
// returns 3.14

var w = s.words;
// e.g., <Uint32Array>[ 1374389535, 1074339512 ]
```

TODO: document schema

TODO: document constructor API

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   While struct instances aim to emulate C `struct` behavior, structs have the following differences:

    -   The struct schema supports default values. In C, uninitialized members are zero-filled.
    -   The struct schema supports "casting modes", which govern member assignment operations and support placing (or relaxing) strict requirements on what types of values may be assigned to struct members. In C, members have no such limitations, with the C compiler performing implicit casting (e.g., a signed integer will be implicitly cast to an unsigned integer when a member has an unsigned integer data type).
    -   Only fixed-width types are supported (e.g., `int8`, `float64`, etc). In C, members can have types which may vary across platforms (e.g., `int`, `enum`, `long double`, etc).
    -   Member types must be serializable to an ArrayBuffer (e.g., no functions, general objects, etc). In C, members have no such limitations (e.g., a member can be a function pointer).
    -   Union types must all have the same byte length. In C, members of union types can have different byte lengths.
    -   struct instances can have "hidden" (i.e., non-enumerable) fields. In C, all members are part of a `struct`'s public API.
    -   struct instances can have read-only fields. In C, one can use a `const` qualifier to prevent assignment after initialization; however, one can circumvent this restriction using pointer tricks.
    -   Member types can have an associated description, which is useful when wanting to inspect struct instances in interactive contexts, such as REPLs.
    -   struct instances support string and JSON serialization.

-   A primary use case for emulating C `struct` behavior is to facilitate interoperation between JavaScript and C. For example, by creating a JavaScript struct instance which has the same alignment and layout as a C `struct`, one can pass a pointer to a struct instance's underlying byte buffer from JavaScript to C and then simply perform a cast to interpret as an equivalent C `struct`. This enables zero-copy interchange when, e.g., calling into Node.js native native add-ons and can greatly reduce overhead when working with heterogeneous composite data types.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import struct from 'https://cdn.jsdelivr.net/gh/stdlib-js/dstructs-struct@v0.1.0-deno/mod.js';

var fields = [
    {
        'name': 'rejected',
        'description': 'boolean indicating whether the null hypothesis was rejected',
        'type': 'bool',
        'enumerable': true,
        'writable': false,
        'castingMode': 'none'
    },
    {
        'name': 'alpha',
        'description': 'significance level',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'pValue',
        'description': 'p-value',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'statistic',
        'description': 'test statistic',
        'type': 'float64',
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'ci',
        'description': 'confidence interval',
        'type': 'float64',
        'length': 2,
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'df',
        'description': 'degrees of freedom',
        'type': 'int32',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'nullValue',
        'description': 'null value',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'mean',
        'description': 'computed mean',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'sd',
        'description': 'standard error of the mean',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    }
];

var Struct = struct( fields );

var s = new Struct({
    'rejected': true,
    'alpha': 0.05,
    'pValue': 0.01,
    'statistic': 3.14,
    'ci': new Float64Array( [ -5.0, 5.0 ] ),
    'df': 10,
    'nullValue': 1.0,
    'mean': 1.01,
    'sd': 0.025
});
// returns <Struct>

var byteLength = Struct.byteLength;
console.log( 'Byte length: %d', byteLength );

var alignment = Struct.alignment;
console.log( 'Alignment: %d', alignment );

var names = Struct.fields;
console.log( 'Field names: %s', names.join( ', ' ) );

var str = s.toString({
    'format': 'linear'
});
console.log( 'String:\n%s', str );

var o = s.toJSON();
console.log( o );

var offset = Struct.byteOffsetOf( 'alpha' );
console.log( 'Offset: %d', offset );

var desc = Struct.descriptionOf( 'alpha' );
console.log( 'Description: %s', desc );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/dstructs-struct.svg
[npm-url]: https://npmjs.org/package/@stdlib/dstructs-struct

[test-image]: https://github.com/stdlib-js/dstructs-struct/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/dstructs-struct/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/dstructs-struct/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/dstructs-struct?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/dstructs-struct.svg
[dependencies-url]: https://david-dm.org/stdlib-js/dstructs-struct/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/dstructs-struct/tree/deno
[deno-readme]: https://github.com/stdlib-js/dstructs-struct/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/dstructs-struct/tree/umd
[umd-readme]: https://github.com/stdlib-js/dstructs-struct/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/dstructs-struct/tree/esm
[esm-readme]: https://github.com/stdlib-js/dstructs-struct/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/dstructs-struct/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/dstructs-struct/main/LICENSE

</section>

<!-- /.links -->
