<a name="0.3.0"></a>
# 0.3.0 (2018-05-17)


### Bug Fixes

* remove default type attribute from `button()` ([c7905c3](https://github.com/localvoid/ivx/commit/c7905c3))


### Code Refactoring

* add a more flexible API for component factories ([fcd9555](https://github.com/localvoid/ivx/commit/fcd9555))
* remove specialized `<button>` and `<input>` factories ([1e20cdc](https://github.com/localvoid/ivx/commit/1e20cdc))
* use conditional types to improve connector API ([9dac7b1](https://github.com/localvoid/ivx/commit/9dac7b1))


### BREAKING CHANGES

* Specialized factories for `<button>` and `<input>` elements were removed.
* Order of type parameters is changed for `connect()` function. Type parameters are now always in a strict order:
 selector state, factory props, context.
* `options` argument were removed from `component()` function. New `withShouldUpdate()` function should be used to add
 `shouldUpdate` hook to components.
