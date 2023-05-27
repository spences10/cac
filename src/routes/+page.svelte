<script lang="ts">
	import { conversions } from '$lib/conversions/config'

	interface Conversion {
		name: string
		function: (arg0: string, arg1: string, arg2: number) => any
		units: Record<string, any> | null
	}

	let selected_conversion: Conversion | null = null

	let from_unit = ''
	let to_unit = ''
	let value = ''

	function convert() {
		if (selected_conversion && selected_conversion.function) {
			const convertedValue = selected_conversion.function(
				from_unit,
				to_unit,
				parseFloat(value)
			)
			if (convertedValue !== null) {
				alert(`Converted value: ${convertedValue}`)
			} else {
				alert('Invalid conversion parameters')
			}
		}
	}
</script>

<h1>Convert and Calculate</h1>

<select bind:value={selected_conversion}>
	<option disabled value={null}>Select a conversion</option>
	{#each conversions as conversion (conversion.name)}
		<option value={conversion}>{conversion.name}</option>
	{/each}
</select>

{#if selected_conversion && selected_conversion.units}
	<label>
		From:
		<select bind:value={from_unit}>
			{#each Object.keys(selected_conversion.units) as unit (unit)}
				<option value={unit}>{unit}</option>
			{/each}
		</select>
	</label>

	<label>
		Value:
		<input type="number" bind:value min="0" />
	</label>

	<label>
		To:
		<select bind:value={to_unit}>
			{#each Object.keys(selected_conversion.units) as unit (unit)}
				<option value={unit}>{unit}</option>
			{/each}
		</select>
	</label>

	<button on:click={convert}>Convert</button>
{/if}
