import {describe, expect, test} from 'vitest'
import {
	add,
	add1Numbers,
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
} from '../src/part1.js'

describe('map/filter', () => {
	describe('double', () => {
		test.each([
			[3, 6],
			[5, 10],
			[0, 0],
			[-1, -2],
			[0.5, 1],
		])('double(%d)', (x, expected) => expect(double(x)).toBe(expected))
	})

	describe('add', () => {
		test.each([
			[1, 2, 3],
			[0, 1, 1],
			[1, 0, 1],
			[5, -3, 2],
			[1, 0.5, 1.5],
		])('add(%d)(%d)', (x, y, expected) => expect(add(x)(y)).toBe(expected))
	})

	describe('numbers', () => {
		test('numbers shouldn’t change', () =>
			expect(numbers).toStrictEqual([3, 6, 6, 2, 5, 8]))

		test('doubledNumbers', () =>
			expect(doubledNumbers).toStrictEqual([6, 12, 12, 4, 10, 16]))

		test('add1Numbers', () =>
			expect(add1Numbers).toStrictEqual([4, 7, 7, 3, 6, 9]))

		test('evenNumbers', () => expect(evenNumbers).toStrictEqual([6, 6, 2, 8]))
	})
})

describe('reduce', () => {
	describe('sum', () => {
		test.each([
			[[1, 2, 3], 6],
			[[-2, 1, 5, 3], 7],
			[[], 0],
		])('sum(%s)', (x, expected) => expect(sum(x)).toBe(expected))
	})

	describe('product', () => {
		test.each([
			[[1, 2, 3], 6],
			[[-2, 1, 5, 3], -30],
			[[], 1],
		])('product(%s)', (xs, expected) => expect(product(xs)).toBe(expected))
	})

	describe('myMap', () => {
		test('empty', () => expect(myMap([], x => x)).toStrictEqual([]))

		test('identity', () =>
			expect(myMap([1, 4, 3, 'a'], x => x)).toStrictEqual([1, 4, 3, 'a']))

		test('double', () =>
			expect(myMap([-1, 5, 3], x => 2 * x)).toStrictEqual([-2, 10, 6]))

		test('strings', () =>
			expect(myMap(['abc', '', 'hello'], x => `${x.length}.`)).toStrictEqual([
				'3.',
				'0.',
				'5.',
			]))
	})

	describe('myFilter', () => {
		test('empty', () => expect(myFilter([], () => true)).toStrictEqual([]))

		test('true', () =>
			expect(myFilter([1, 4, 3, 'a'], () => true)).toStrictEqual([
				1,
				4,
				3,
				'a',
			]))

		test('false', () =>
			expect(myFilter([1, 4, 3, 'a'], () => false)).toStrictEqual([]))

		test('numbers', () =>
			expect(
				myFilter([5, 3, -1, 3, 7, -4, 2, 5, 4, -2, 7], x => x % 3 === 1),
			).toStrictEqual([7, 4, 7]))
	})
})

describe('compose', () => {
	describe('isEven', () => {
		test.each([
			[1, false],
			[2, true],
			[0, true],
			[-1, false],
			[0.5, false],
			[15, false],
			[64, true],
		])('isEven(%d)', (x, expected) => expect(isEven(x)).toBe(expected))
	})

	describe('exclaimNumbers', () => {
		test.each([
			[
				[1, 2, 3],
				['1!', '2!', '3!'],
			],
			[[], []],
			[
				[4, -5, 1.5],
				['4!', '-5!', '1.5!'],
			],
		])('exclaimNumbers(%s)', (xs, expected) =>
			expect(exclaimNumbers(xs)).toStrictEqual(expected),
		)
	})

	describe('evenSums', () => {
		test.each([
			[
				[[1, 2], [3, 4], [2, 2], [-1, 3, 2], [5, 6, 4], [0]],
				[[2, 2], [-1, 3, 2], [0]],
			],
			[
				[[9, -7, -2], [7, 3, 1, 3], [-34, 3, 22], [0], [-1, 1]],
				[[9, -7, -2], [7, 3, 1, 3], [0], [-1, 1]],
			],
			[
				[[], [1], [2]],
				[[], [2]],
			],
			[[], []],
		])('evenSums(%s)', (xs, expected) =>
			expect(evenSums(xs)).toStrictEqual(expected),
		)
	})
})
