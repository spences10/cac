export function convert_temperature(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (from_unit === to_unit) {
		return value
	}

	let celsius = 0

	switch (from_unit) {
		case 'c':
			celsius = value
			break
		case 'f':
			celsius = (value - 32) / 1.8
			break
		case 'k':
			celsius = value - 273.15
			break
		default:
			return null // Invalid unit
	}

	switch (to_unit) {
		case 'c':
			return celsius
		case 'f':
			return celsius * 1.8 + 32
		case 'k':
			return celsius + 273.15
		default:
			return null // Invalid unit
	}
}
