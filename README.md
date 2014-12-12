# broccoli-iife

Broccoli filter to wrap files inside an
[Immediately-invoked function expression][IIFE] (IIFE).

## Installation

```sh
npm install --save broccoli-iife
```

## Usage

```js
var iife = require('broccoli-iife');
var iifeTree = iife(sourceTree);
```

[IIFE]: http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
