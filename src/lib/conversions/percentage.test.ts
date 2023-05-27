import { describe, expect, test } from 'vitest'
import { percentage_of_a_number } from './percentage'

describe('Percentage of a number calculation', () => {
	test('should return the correct percentage of a number', () => {
		expect(percentage_of_a_number(10, 100)).toBe(10)
		expect(percentage_of_a_number(50, 100)).toBe(50)
		expect(percentage_of_a_number(200, 100)).toBe(200)
	})
})
