import * as fs from 'node:fs'
import {compose, sum} from './part1.js'
import {IMPLEMENT_THIS} from './utils.js'

// Replace all the IMPLEMENT_THIS below with your implementation.

/*
In this file, we'll be looking at a bunch of (fake) FIT1045 students and their
grades. (All data has been randomly generated.)
*/

/** The contents of the `students.csv` file as a string. */
const studentsCSV = fs.readFileSync(
	new URL('../students.csv', import.meta.url),
	'utf-8',
)

interface Student {
	// The `readonly` means you can't modify these properties on an object
	readonly id: number
	readonly givenName: string
	readonly familyName: string
	readonly course: string
	readonly assignments: readonly number[]
	// readonly assignments: readonly [number, number, number]
	readonly tests: readonly number[]
	// readonly tests: readonly [number, number, number]
}

/**
 * Parses a CSV string into an array of student objects. The assignments and
 * tests are represented as numbers joined by `|` characters (see the
 * `students.csv` file).
 *
 * You can assume:
 * - There will always be a header row at the beginning
 * - There will be no escaping or newlines in the fields
 * - The headers will be in the same order as the keys in the `Student`
 *   interface above (feel free to not assume this one for a challenge!)
 */
const parseStudentsCSV = (csv: string): readonly Student[] => IMPLEMENT_THIS

const students = parseStudentsCSV(studentsCSV)

/**
 * Calculates a student's unit mark: 100 × (
 *     25% × assignment 1 score (as a percentage)
 *   + 30% × assignment 2 score (as a percentage)
 *   + 15% × assignment 3 score (as a percentage)
 *   + 10% × test 1 score (as a percentage)
 *   + 10% × test 2 score (as a percentage)
 *   + 10% × test 3 score (as a percentage)
 * )
 *
 * The `assignments = [a1, a2, a3]` and `tests = [t1, t2, t3]` arrays in the
 * student object correspond to the scores in assignment/test 1, 2, and 3
 * respectively. Each assignment is out of 50 marks and each test is out of 10
 * marks.
 */
const calculateUnitMark = ({assignments, tests}: Student) => IMPLEMENT_THIS

/**
 * Calculates the average of an array of numbers.
 *
 * You can assume that the array will never be empty.
 */
const average = (xs: readonly number[]): number => IMPLEMENT_THIS

/** Calculates the average unit mark for an array of students. */
const averageUnitMark = (students: readonly Student[]): number => IMPLEMENT_THIS

/** The average unit mark for all students. */
const overallAverageUnitMark: number = IMPLEMENT_THIS

/**
 * All the Bachelor of Information Technology and double degrees with IT course
 * codes.
 */
const itDegrees: ReadonlySet<string> = new Set([
	'C2000',
	'A2009',
	'A2015',
	'B2017',
	'B2025',
	'C2002',
	'C2003',
	'E3011',
	'F2006',
	'F2012',
	'L3010',
])
/**
 * All the Bachelor of Computer Science and double degrees with CS courses
 * codes.
 */
const csDegrees: ReadonlySet<string> = new Set([
	'C2001',
	'C3001',
	'B2008',
	'E3010',
	'L3011',
	'S2004',
])

/** Checks if a student is studying a course in a given set of courses. */
const isStudyingCourseIn =
	(courses: ReadonlySet<string>) =>
	(student: Student): boolean =>
		IMPLEMENT_THIS

/** All the students studying bachelor of IT (including double degrees). */
const itStudents: readonly Student[] = IMPLEMENT_THIS
/** All the students studying bachelor of CS (including double degrees). */
const csStudents: readonly Student[] = IMPLEMENT_THIS

/** The average unit mark for students studying IT. */
const itAverageUnitMark: number = IMPLEMENT_THIS
/** The average unit mark for students studying CS. */
const csAverageUnitMark: number = IMPLEMENT_THIS

const allGrades = ['HD', 'D', 'C', 'P', 'N'] as const
type Grade = (typeof allGrades)[number]

/**
 * Converts a (numeric) mark into a letter grade.
 * (You need to round the mark - for example, 79.5 is an HD.)
 * @see https://www.monash.edu/students/admin/assessmensts/results/results-legend
 */
const markToGrade = (mark: number): Grade => IMPLEMENT_THIS

/**
 * Calculates a student's letter grade.
 * See if you can use `compose` to implement this!
 */
const calculateUnitGrade: (student: Student) => Grade = IMPLEMENT_THIS

const equals =
	<T>(other: T) =>
	(x: T): boolean =>
		x == other

/**
 * The proportion of students who failed. For example, if 3 out of 10 students
 * failed, this would dbe `0.3`.
 * See if you can implement this without any anonymous functions
 * (hint: use compose)
 */
const failRate: number = IMPLEMENT_THIS

/**
 * A object where each key is the letter grade and each value is the proportion
 * of students who got that letter grade.
 *
 * For example: `{HD: 0.2, D: 0.25, C: 0.3, P: 0.15, N: 0.1}`
 */
const gradeDistribution: Record<Grade, number> = IMPLEMENT_THIS

// Don't change anything below this line! (needed for the tests to work)
export {
	average,
	calculateUnitMark,
	csAverageUnitMark,
	csStudents,
	gradeDistribution,
	failRate,
	isStudyingCourseIn,
	itAverageUnitMark,
	itStudents,
	markToGrade,
	overallAverageUnitMark,
	students,
	type Student,
}
