# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-09-21)

<section class="features">

### Features

-   [`bf26784`](https://github.com/stdlib-js/stdlib/commit/bf26784b458dee86137cc92cb269719cb6e0799e) - add `isStruct` method
-   [`cd45405`](https://github.com/stdlib-js/stdlib/commit/cd4540545270de354c76083e571c587ac3c59a6e) - add method to resolve a field type
-   [`4242b0c`](https://github.com/stdlib-js/stdlib/commit/4242b0cfa7df434d6b33ca306acfbb24d573cfa5) - add support for serializing a struct layout
-   [`13b4d50`](https://github.com/stdlib-js/stdlib/commit/13b4d50284b4f5ba44c714add98ae8d04606cb86) - add initial implementation of `dstructs/struct`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`4d872c8`](https://github.com/stdlib-js/stdlib/commit/4d872c85075efbb806cae6e16043bd6edc6ab55c) - always limit DataViews to a minimal view of struct memory
-   [`bab3575`](https://github.com/stdlib-js/stdlib/commit/bab35754c3c4269f78c0968bdd09c4e59d435f0c) - revert offset changes for scalars
-   [`7053c83`](https://github.com/stdlib-js/stdlib/commit/7053c83f7aa75b9f9682b355be6d73cf868835ba) - address `byteOffset` bugs
-   [`b8eaf74`](https://github.com/stdlib-js/stdlib/commit/b8eaf74c49f8c0c5b256de4640a10e57bfa7d790) - address missing attribute and relax brand checks

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`35b2ba1`](https://github.com/stdlib-js/stdlib/commit/35b2ba1424e7e89e9cd0f4cb5a199738a3f98747): require nested struct types be struct constructors

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`0aef010`](https://github.com/stdlib-js/stdlib/commit/0aef01041f11f7c706de2e6e2b76c49d80a8ef28) - **refactor:** reorder methods _(by Athan Reines)_
-   [`bf26784`](https://github.com/stdlib-js/stdlib/commit/bf26784b458dee86137cc92cb269719cb6e0799e) - **feat:** add `isStruct` method _(by Athan Reines)_
-   [`76ebd1b`](https://github.com/stdlib-js/stdlib/commit/76ebd1b06c85827a8166579c0a97c6bb20737e24) - **refactor:** use assert utility _(by Athan Reines)_
-   [`5aeb4ef`](https://github.com/stdlib-js/stdlib/commit/5aeb4ef105b90890e89ab138a55316c2d6546f71) - **chore:** update package meta data [(#7442)](https://github.com/stdlib-js/stdlib/pull/7442) _(by stdlib-bot)_
-   [`6d57645`](https://github.com/stdlib-js/stdlib/commit/6d576457c3f4c7ed67481aaf6161d7c1c63874eb) - **docs:** fix descriptions _(by Athan Reines)_
-   [`35b2ba1`](https://github.com/stdlib-js/stdlib/commit/35b2ba1424e7e89e9cd0f4cb5a199738a3f98747) - **refactor:** require nested struct types be struct constructors _(by Athan Reines)_
-   [`cd45405`](https://github.com/stdlib-js/stdlib/commit/cd4540545270de354c76083e571c587ac3c59a6e) - **feat:** add method to resolve a field type _(by Athan Reines)_
-   [`009da93`](https://github.com/stdlib-js/stdlib/commit/009da9301a20e2dedd243ba9b7f747fd962f105e) - **docs:** fix types _(by Athan Reines)_
-   [`4242b0c`](https://github.com/stdlib-js/stdlib/commit/4242b0cfa7df434d6b33ca306acfbb24d573cfa5) - **feat:** add support for serializing a struct layout _(by Athan Reines)_
-   [`1d86748`](https://github.com/stdlib-js/stdlib/commit/1d867483b41d6624413b5e7e2f50610158a5fe92) - **docs:** update parameter description _(by Athan Reines)_
-   [`4d872c8`](https://github.com/stdlib-js/stdlib/commit/4d872c85075efbb806cae6e16043bd6edc6ab55c) - **fix:** always limit DataViews to a minimal view of struct memory _(by Athan Reines)_
-   [`4ecf9ad`](https://github.com/stdlib-js/stdlib/commit/4ecf9ad5376fd7362fa915b9a9308b3d9cb271b8) - **refactor:** create a minimal view _(by Athan Reines)_
-   [`bab3575`](https://github.com/stdlib-js/stdlib/commit/bab35754c3c4269f78c0968bdd09c4e59d435f0c) - **fix:** revert offset changes for scalars _(by Athan Reines)_
-   [`7053c83`](https://github.com/stdlib-js/stdlib/commit/7053c83f7aa75b9f9682b355be6d73cf868835ba) - **fix:** address `byteOffset` bugs _(by Athan Reines)_
-   [`578606d`](https://github.com/stdlib-js/stdlib/commit/578606d017a4b5422da0f7e7cab73d80c97271e1) - **docs:** add note _(by Athan Reines)_
-   [`b8eaf74`](https://github.com/stdlib-js/stdlib/commit/b8eaf74c49f8c0c5b256de4640a10e57bfa7d790) - **fix:** address missing attribute and relax brand checks _(by Athan Reines)_
-   [`f4a90b1`](https://github.com/stdlib-js/stdlib/commit/f4a90b18816acbb01c3c5afd7fba965c8a617ec1) - **chore:** add test and benchmark stubs _(by Athan Reines)_
-   [`24a79a0`](https://github.com/stdlib-js/stdlib/commit/24a79a0b97e2191aa52abe3fe336505472060d35) - **docs:** add note _(by Athan Reines)_
-   [`195071c`](https://github.com/stdlib-js/stdlib/commit/195071c47d1088fc1b024023c9b9b693fc6282cb) - **style:** disable lint rule _(by Athan Reines)_
-   [`13b4d50`](https://github.com/stdlib-js/stdlib/commit/13b4d50284b4f5ba44c714add98ae8d04606cb86) - **feat:** add initial implementation of `dstructs/struct` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

