import {IMPLEMENT_THIS} from './utils.js'

// Replace all the IMPLEMENT_THIS below with your implementation.

// ***********
// map/filter
// ***********

/** Multiplies a number by 2. */
const double = (x: number): number => IMPLEMENT_THIS
// See if you can reimplement double without using any return statements!

/** Adds 2 numbers. */
const add =
	(x: number) =>
	(y: number): number =>
		IMPLEMENT_THIS

const numbers = [3, 6, 6, 2, 5, 8]

/** `numbers` multiplied by 2. */
const doubledNumbers: readonly number[] = IMPLEMENT_THIS
/** `numbers` with 1 added to them. */
const add1Numbers: readonly number[] = IMPLEMENT_THIS

/** The even `numbers`. */
const evenNumbers: readonly number[] = IMPLEMENT_THIS

// *******
// reduce
// *******

// Use reduce to implement sum and product:

/** Calculates the sum of an array of numbers.  */
const sum = (xs: readonly number[]): number => IMPLEMENT_THIS

/** Calculates the product of an array of numbers.  */
const product = (xs: readonly number[]): number => IMPLEMENT_THIS

// Challenge: Reimplement map and filter using reduce!
// Try to do this without mutating any arrays. (don't worry about efficiency)

// Tip: you can add an element `x` to the end of an array `xs` with `[...xs, x]`
// (this doesn't mutate `xs` but creates a new array)

const myMap = <T, U>(xs: readonly T[], fn: (x: T) => U): readonly U[] =>
	IMPLEMENT_THIS

const myFilter = <T>(xs: readonly T[], fn: (x: T) => boolean): readonly T[] =>
	IMPLEMENT_THIS

// ********
// compose
// ********

/*
You might be familiar with composing functions in maths:
given functions f and g, composing them together would give
(f ∘ g)(x) = f(g(x))
For this to work, the types must match up.
For example, if g : A -> B and f : B -> C, then f ∘ g : A -> C

We can do the same in code!

Implement the `compose` function below:
*/
const compose =
	<A, B, C>(f: (b: B) => C, g: (a: A) => B): ((x: A) => C) =>
	(x: A): C =>
		IMPLEMENT_THIS

/*
`compose` is an example of a higher-order function: it takes functions as
parameters and returns a new function.

Let's try using it:
*/

/** Adds an exclamation mark to the end of a string. */
const exclaim = (string: string): string => IMPLEMENT_THIS

/** Converts something to a string. */
// the `unknown` type means 'anything'
const toString: (x: unknown) => string = String

/**
 * Converts an array of numbers into an array of strings with an exclamation
 * mark after each number.
 * For example:
 * - `exclaimNumbers([1, 2, 3])` => `['1!', '2!', '3!']`
 */
const exclaimNumbers = (xs: readonly number[]): readonly string[] =>
	IMPLEMENT_THIS

/** Returns whether a number is even. */
const isEven = (x: number): boolean => IMPLEMENT_THIS

/**
 * Given an array of arrays of numbers, return the arrays that have an even sum.
 * For example:
 * - `evenSums([[1, 2], [3, 4], [2, 2], [-1, 3, 2], [5, 6, 4], [0]]])` => `[[2, 2], [-1, 3, 2], [1, 3], [0]]`
 */
const evenSums = (
	xs: readonly (readonly number[])[],
): readonly (readonly number[])[] => IMPLEMENT_THIS

// Don't change anything below this line! (needed for the tests to work)
export {
	add,
	add1Numbers,
	compose,
	double,
	doubledNumbers,
	evenNumbers,
	evenSums,
	exclaimNumbers,
	isEven,
	myFilter,
	myMap,
	numbers,
	product,
	sum,
}
