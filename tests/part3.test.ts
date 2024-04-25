import {describe, expect, test, type Assertion} from 'vitest'
import {
	average,
	calculateUnitMark,
	csAverageUnitMark,
	csStudents,
	gradeDistribution,
	failRate,
	itAverageUnitMark,
	isStudyingCourseIn,
	itStudents,
	markToGrade,
	overallAverageUnitMark,
	students,
	type Student,
} from '../src/part3.js'

describe('parseStudentsCSV', () => {
	test('parses correct number of students', () =>
		expect(students).toHaveLength(1000))

	test('parses correctly', () =>
		students.forEach((student, i) => {
			const e = <T>(actual: T): Assertion<T> =>
				expect(actual, `student ${i + 1}`)
			e(student.id).toBe(i + 1)
			e(student.givenName).not.toBe('')
			e(student.familyName).not.toBe('')
			e(student.course).not.toBe('')
			;(
				[
					['assignments', 50],
					['tests', 10],
				] as const
			).forEach(([k, n]) => {
				e(student[k]).toHaveLength(3)
				e(student[k]).toSatisfy(
					(xs: readonly number[]) => xs.every(x => x >= 0 && x <= n),
					`student ${i + 1}: ${k} are not in range [0, ${n}]`,
				)
			})
		}))
})

describe('average', () =>
	test.each([
		[[1, 2, 3], 2],
		[[1], 1],
		[[5, 3, 2, 6, 3], 3.8],
	])('average(%s)', (xs, expected) =>
		expect(average(xs)).toBeCloseTo(expected, 4),
	))

const testStudent: Student = {
	id: 0,
	givenName: 'Test',
	familyName: 'Test',
	course: 'C2001',
	assignments: [50, 50, 50],
	tests: [10, 10, 10],
}

describe('calculateUnitMark', () => {
	const s = (
		assignments: readonly number[],
		tests: readonly number[],
	): Student => ({
		...testStudent,
		assignments,
		tests,
	})
	test.each([
		[s([45, 35, 40], [9, 8, 10]), 82.5],
		[s([50, 50, 50], [10, 10, 10]), 100],
		[s([0, 0, 0], [0, 0, 0]), 0],
		[s([50, 50, 50], [0, 0, 0]), 70],
		[s([0, 0, 0], [10, 10, 10]), 30],
	])(
		'calculateUnitMark({assignments: $assignments, tests: $tests})',
		(student, expected) =>
			expect(calculateUnitMark(student)).toBeCloseTo(expected, 4),
	)
})

describe('Filtering by course', () => {
	describe('isStudyingCourseIn', () => {
		test.each([
			[['C2001', 'S2004'], 'C2001', true],
			[['C2001', 'S2004'], 'S2004', true],
			[['C2001', 'S2004'], 'C2000', false],
			[['C2001'], 'C2001', true],
			[[], 'C2000', false],
		])('isStudyingCourseIn(%s)', (courses, course, expected) =>
			expect(
				isStudyingCourseIn(new Set(courses))({...testStudent, course}),
			).toBe(expected),
		)
	})

	test('itStudents', () => expect(itStudents).toHaveLength(597))
	test('csStudents', () => expect(csStudents).toHaveLength(403))
})

describe('averageUnitMark', () => {
	test('overall', () => expect(overallAverageUnitMark).toBeCloseTo(69.9596, 6))
	test('IT students', () => expect(itAverageUnitMark).toBeCloseTo(69.862814, 6))
	test('CS students', () => expect(csAverageUnitMark).toBeCloseTo(70.102978, 6))
})

describe('markToGrade', () => {
	test.each([
		[100, 'HD'],
		[90, 'HD'],
		[80, 'HD'],
		[79.5, 'HD'],
		[79.4, 'D'],
		[70, 'D'],
		[65, 'C'],
		[60.1, 'C'],
		[60, 'C'],
		[59, 'P'],
		[55, 'P'],
		[49.5, 'P'],
		[49.45, 'N'],
		[40, 'N'],
	])('markToGrade(%d)', (mark, expected) =>
		expect(markToGrade(mark)).toBe(expected),
	)
})

test('failRate', () => expect(failRate).toBe(0.097))

test('gradeDistribution', () =>
	expect(gradeDistribution).toStrictEqual({
		HD: 0.272,
		D: 0.254,
		C: 0.225,
		P: 0.152,
		N: 0.097,
	}))
