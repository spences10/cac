interface PercentageUnits {
	[key: string]: (number: number, percentage: number) => number
}

export const percentage_units: PercentageUnits = {
	percentage_of_number: (number, percentage) =>
		(percentage / 100) * number,
	number_from_percentage: (number, percentage) =>
		(number / percentage) * 100,
}

export function convert_percentage(
	unit: string,
	number: number,
	percentage: number
): number | null {
	if (!percentage_units.hasOwnProperty(unit)) {
		return null // Invalid unit
	}

	return percentage_units[unit](number, percentage)
}
