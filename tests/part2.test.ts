import {describe, expect, test} from 'vitest'
import {
	eulerProblem1,
	eulerProblem6,
	generalEulerProblem,
	isDivisibleBy,
	multiplesOf3Or5UpTo,
	multiplesOfUpTo,
	sumSquareDifference,
} from '../src/part2'

describe('Euler Problem 1', () => {
	describe('isDivisibleBy', () =>
		test.each([
			[3, 10, false],
			[5, 10, true],
			[10, 10, true],
		])('isDivisibleBy(%d)(%d)', (n, x, expected) =>
			expect(isDivisibleBy(n)(x)).toBe(expected),
		))

	describe('multiplesOf3Or5UpTo', () =>
		test.each([
			[15, [3, 5, 6, 9, 10, 12]],
			[4, [3]],
			[2, []],
			[0, []],
		])('multiplesOf3Or5UpTo(%d)', (n, expected) =>
			expect(multiplesOf3Or5UpTo(n)).toStrictEqual(expected),
		))

	test('eulerProblem1', () => expect(eulerProblem1).toBe(233168))
})

describe('Euler Problem 6', () => {
	describe('sumSquareDifference', () =>
		test.each([
			[3, 22],
			[1, 0],
			[0, 0],
			[10, 2640],
			[100, 25164150],
		])('sumSquareDifference(%d)', (n, expected) =>
			expect(sumSquareDifference(n)).toBe(expected),
		))

	test('eulerProblem6', () => expect(eulerProblem6).toBe(25164150))
})

describe('Bonus', () => {
	describe('multiplesOfUpTo', () =>
		test.each([
			[[3, 5], 20, [3, 5, 6, 9, 10, 12, 15, 18]],
			[[2], 7, [2, 4, 6]],
			[[2, 4], 5, [2, 4]],
			[[3, 4], 10, [3, 4, 6, 8, 9]],
			[[], 20, []],
		])('multiplesOfUpTo(%s)(%d)', (ds, n, expected) =>
			expect(multiplesOfUpTo(ds)(n)).toStrictEqual(expected),
		))

	describe('generalEulerProblem', () =>
		test.each([
			[[2, 3, 5], 20, 122],
			[[], 20, 0],
			[[1], 11, 55],
			[[3, 5, 7], 1000, 271066],
			[[3, 5], 1000, 233168],
		])('generalEulerProblem(%d)(%d)', (ds, x, expected) =>
			expect(generalEulerProblem(ds)(x)).toBe(expected),
		))
})
