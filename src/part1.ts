import {IMPLEMENT_THIS} from './utils.js'

// Replace all the IMPLEMENT_THIS below with your implementation.

// ***********
// map/filter
// ***********

/** Multiplies a number by 2. */
const double = (x: number): number => x * 2
// See if you can reimplement double without using any return statements!

/** Adds 2 numbers. */
const add =
	(x: number) =>
	(y: number): number =>
		x + y

const numbers = [3, 6, 6, 2, 5, 8]

/** `numbers` multiplied by 2. */
const doubledNumbers: readonly number[] = numbers.map(double)
/** `numbers` with 1 added to them. */
const add1Numbers: readonly number[] = numbers.map(add(1))

/** The even `numbers`. */
const evenNumbers: readonly number[] = numbers.filter(x => x % 2 === 0)

// *******
// reduce
// *******

// Use reduce to implement sum and product:

/** Calculates the sum of an array of numbers.  */
const sum = (xs: readonly number[]): number => xs.reduce((x, y) => x + y, 0)

/** Calculates the product of an array of numbers.  */
const product = (xs: readonly number[]): number => xs.reduce((x, y) => x * y, 1)

// Challenge: Reimplement map and filter using reduce!
// Try to do this without mutating any arrays. (don't worry about efficiency)

// Tip: you can add an element `x` to the end of an array `xs` with `[...xs, x]`
// (this doesn't mutate `xs` but creates a new array)

const myMap = <T, U>(xs: readonly T[], fn: (x: T) => U): readonly U[] =>
	xs.reduce<readonly U[]>((acc, x) => [...acc, fn(x)], [])

const myFilter = <T>(xs: readonly T[], fn: (x: T) => boolean): readonly T[] =>
	xs.reduce<readonly T[]>((acc, x) => (fn(x) ? [...acc, x] : acc), [])

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
		f(g(x))

/*
`compose` is an example of a higher-order function: it takes functions as
parameters and returns a new function.

Let's try using it:
*/

/** Adds an exclamation mark to a string. */
const exclaim = (string: string): string => string + '!'

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
	xs.map(compose(exclaim, toString))

/** Returns whether a number is even. */
const isEven = (x: number): boolean => x % 2 === 0

/**
 * Given an array of arrays of numbers, return the arrays that have an even sum.
 * For example:
 * - `evenSums([[1, 2], [3, 4], [2, 2], [-1, 3, 2], [5, 6, 4], [0]]])` => `[[2, 2], [-1, 3, 2], [1, 3], [0]]`
 */
const evenSums = (
	xs: readonly (readonly number[])[],
): readonly (readonly number[])[] => xs.filter(compose(isEven, sum))

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
