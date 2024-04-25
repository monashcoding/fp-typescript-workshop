import {compose, sum} from './part1.js'
import {IMPLEMENT_THIS} from './utils.js'

// Replace all the IMPLEMENT_THIS below with your implementation.

// ****************
// Euler Problem 1
// ****************

/**
 * Returns whether the second argument is divisible by the first argument.
 * For example:
 * - `isDivisibleBy(3)(10)` => `false`
 * - `isDivisibleBy(5)(10)` => `true`
 * - `isDivisibleBy(10)(5)` => `false`
 */
const isDivisibleBy =
	(d: number) =>
	(x: number): boolean =>
		IMPLEMENT_THIS

/** Returns an array of numbers [start, start+1, …, end-1]. */
const range = (start: number, end: number): readonly number[] =>
	Array.from({length: end - start}, (_, i) => start + i)

/**
 * Gets the multiples of 3 or 5 from 1 up to but not including the first argument.
 * For example:
 * - `multiplesOf3Or5UpTo(15)` => `[3, 5, 6, 9, 10, 12]`
 */
const multiplesOf3Or5UpTo = (n: number): readonly number[] => IMPLEMENT_THIS

/**
 * The solution to the Euler Problem 1: the sum of all the multiples of 3 or 5
 * below 1000.
 * @see https://projecteuler.net/problem=1
 */
const eulerProblem1: number = IMPLEMENT_THIS

// ****************
// Euler Problem 6
// ****************

/**
 * Returns the difference between the sum of the squares of the `n` natural
 * numbers and the square of the sum.
 * For example:
 * - `sumSquareDifference(3)` => `22`
 *   - The sum of the squares of the first three natural numbers is 1² + 2² + 3² = 14.
 *   - The square of the sum of the first three natural numbers is (1 + 2 + 3)² = 36.
 *   - The difference is 36 - 14 = 22.
 */
const sumSquareDifference = (n: number): number => IMPLEMENT_THIS

/**
 * The solution to the Euler problem 6: the difference between the sum of the
 * squares of the first one hundred natural numbers and the square of the sum.
 * @see https://projecteuler.net/problem=6
 */
const eulerProblem6: number = IMPLEMENT_THIS

// ******
// Bonus
// ******
// The stuff here is a little bit more tricky!

/**
 * Like multiplesOf3Or5UpTo but for any arbitrary list of divisors.
 * `multiplesOf3Or5UpTo` should be equivalent to `multiplesOfUpTo([3, 5])`.
 * For example:
 * - `multiplesOfUpTo([3, 5])(20)` => `[3, 5, 6, 9, 10, 12, 15, 18]`
 * - `multiplesOfUpTo([])(20)` => `[]`
 */
const multiplesOfUpTo =
	(ds: readonly number[]) =>
	(n: number): readonly number[] =>
		IMPLEMENT_THIS

/**
 * Generalised Euler problem 1. `generalEulerProblem1(divisors)(n)` is the sum
 * of all the numbers divisible by at least one of the `divisors` up to but not
 * including `n`. `eulerProblem1` should be equivalent to
 * `generalEulerProblem1([3, 5])(1000)`.
 */
const generalEulerProblem = (ds: readonly number[]): ((n: number) => number) =>
	IMPLEMENT_THIS

// Don't change anything below this line! (needed for the tests to work)
export {
	eulerProblem1,
	eulerProblem6,
	generalEulerProblem,
	isDivisibleBy,
	multiplesOfUpTo,
	multiplesOf3Or5UpTo,
	sumSquareDifference,
}
