# pristine‑fp

A tree‑shakable collection of functional utilities for JavaScript/TypeScript, designed to be modular, pragmatic, and deeply inspired by the functional programming discipline.

## Purpose

This package extracts the functional utilities originally developed inside [`@cyril2day2/pristine‑ui`](https://github.com/cyril2day/pristine‑ui) into a standalone, dependency‑managed library. The goal is to provide a clean, focused set of functions that can be used in any JavaScript project while keeping the UI component library free from utility “pollution”.

## Features

- **Tree‑shakable** – every function can be imported individually; unused code is eliminated by modern bundlers.
- **Modular** – organized into logical categories (`core`, `collections`, `objects`, `higher‑order`, `validation`, `vue` helpers, etc.).
- **TypeScript‑ready** – full type definitions included.
- **Underscore integration** – leverages [`underscore`](https://underscorejs.org) for foundational operations (e.g., `isObject`, `has`, `every`) while adding higher‑level functional patterns.
- **Zero side‑effects** – the package declares `"sideEffects": false` for optimal bundling.

## Installation

```bash
npm install pristine-fp
# or
pnpm add pristine-fp
# or
yarn add pristine-fp
```

## Usage

Import only the functions you need:

```js
import { deepClone, compose, curry, partial } from 'pristine-fp';
```

Or import from a sub‑category (even finer‑grained tree‑shaking):

```js
import { deepClone } from 'pristine-fp/objects';
import { compose } from 'pristine-fp/core';
import { classIf } from 'pristine-fp/vue';
```

## Categories

| Category       | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `core`         | Fundamental functional combinators (`compose`, `curry`, `identity`, etc.)   |
| `collections`  | Utilities for arrays and iterable data (`mapcat`, `repeat`, `freq`, etc.)   |
| `objects`      | Object‑specific helpers (`deepClone`, `deepFreeze`, `hasKeys`, `merge`, …)  |
| `higher‑order` | Functions that create or transform other functions (`partial`, `dispatch`, …) |
| `validation`   | Predicate builders and validators (`checker`, `validator`)                  |
| `vue`          | Vue‑specific helpers (`classIf`, `presenceAttr`)                            |
| `underscore`   | Re‑exports of selected underscore functions for convenience                 |

## Credits & Inspiration

- **Underscore.js** – many low‑level object/collection utilities are direct re‑exports or thin wrappers around underscore’s battle‑tested functions.
- **Functional JavaScript** – ideas drawn from the book *“Functional JavaScript: Introducing Functional Programming with Underscore.js”* by Michael Fogus (O’Reilly, ISBN‑10: 1449360726). In particular, the patterns for function‑building functions, invokers, pluckers, and dispatchers follow the style presented in that work.
- **JavaScript Allongé, the “Six” Edition** – concepts and patterns inspired by Reg “raganwald” Braithwaite’s book *JavaScript Allongé* (LeanPub, https://leanpub.com/read/javascriptallongesix), especially its treatment of function composition, closures, and functional combinators.
- **Real‑world refactoring** – the library emerged from the practical need to keep the `pristine‑ui` component library lean and focused, demonstrating how functional utilities can be cleanly separated from UI concerns.


## License

MIT – see [LICENSE](LICENSE) file.