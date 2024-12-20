# Unexpected Arithmetic Results in JavaScript

This repository demonstrates a common, yet often surprising, behavior in JavaScript related to loose typing and arithmetic operations. Specifically, it highlights the unexpected results obtained when using `undefined`, `null`, and `NaN` in arithmetic expressions.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides solutions to mitigate this issue.

## Understanding the Problem

JavaScript's dynamic typing can be a source of both flexibility and confusion. When performing arithmetic operations, the language attempts to implicitly convert values to numbers. However, the conversion of `undefined`, `null`, and `NaN` leads to unexpected behavior:

* **`undefined`**: When used in an arithmetic expression, `undefined` is converted to `NaN` (Not a Number), resulting in `NaN` as the outcome of the entire expression.
* **`null`**:  Interestingly, `null` is treated as 0 in arithmetic expressions.
* **`NaN`**: Any arithmetic operation involving `NaN` will always result in `NaN`. 

## Solutions

The `bugSolution.js` file presents several approaches to handle these cases gracefully and avoid unexpected results.

This issue is particularly relevant when working with user inputs or data from external sources, where the possibility of encountering `undefined`, `null`, or `NaN` values is high.