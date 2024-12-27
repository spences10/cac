<script lang="ts">
	import Input from '$lib/components/input.svelte';
	import Select from '$lib/components/select.svelte';
	import { conversions } from '$lib/conversions/config';
	import Info from '$lib/icons/info.svelte';

	interface Conversion {
		name: string;
		function: (arg0: string, arg1: string, arg2: number) => any;
		units: Record<string, any> | null;
	}

	let from_unit = $state('');
	let to_unit = $state('');
	let value = $state('0');
	let converted_value: number = $state(0);

	let selected_conversion_name = $state('');
	let selected_conversion: Conversion | null = $state(null);

	$effect(() => {
		selected_conversion =
			conversions.find((c) => c.name === selected_conversion_name) ||
			null;
	});

	$effect(() => {
		if (selected_conversion && from_unit && to_unit && value) {
			converted_value = selected_conversion.function(
				from_unit,
				to_unit,
				Number(value),
			);
		} else {
			converted_value = 0;
		}
	});
</script>

<svelte:head>
	<title>
		Convert and Calculate: Calculate and Convert Units Across Multiple
		Domains
	</title>
	<meta
		name="description"
		content="Effortlessly convert and calculate units across a wide array of categories including animal ages, cooking measurements, digital storage, speed, temperature, and more. Experience the convenience of having all your conversion tools in one place."
	/>
	<meta
		name="keywords"
		content="convert and calculate, unit conversion, animal age conversion, cooking measurements, digital storage, speed conversion, temperature conversion, volume conversion, weight conversion, length conversion"
	/>
</svelte:head>

<div class="hero bg-base-100 py-8">
	<div class="hero-content text-center">
		<div class="max-w-2xl">
			<h1 class="mb-4 text-5xl font-bold">Convert and Calculate</h1>
			<p class="mb-6">
				Your one-stop solution for unit conversions. From animal ages
				to digital storage, we've got you covered with instant,
				accurate conversions at your fingertips.
			</p>
			<div class="badge badge-warning gap-2">
				<Info
					height="16px"
					width="16px"
					class_names="stroke-current"
				/>
				Animal ages are approximate
			</div>
		</div>
	</div>
</div>

<div class="divider my-8"></div>

<div class="card bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title mb-4 mt-0">Convert Units</h2>

		<div class="grid gap-6">
			<div class="relative">
				<Select
					id="conversion-select"
					label="Select conversion type"
					options={conversions.map((c) => ({ name: c.name }))}
					placeholder="Choose conversion..."
					bind:selected_option={selected_conversion_name}
					select_classes="min-h-12"
				/>
			</div>

			{#if selected_conversion && selected_conversion.units}
				<div class="grid gap-6 md:grid-cols-2">
					<Select
						id="from-unit-select"
						label="From"
						options={Object.keys(selected_conversion.units).map(
							(unit) => ({
								name: unit,
							}),
						)}
						placeholder="Select unit..."
						bind:selected_option={from_unit}
					/>

					<Select
						id="to-unit-select"
						label="To"
						options={Object.keys(selected_conversion.units).map(
							(unit) => ({
								name: unit,
							}),
						)}
						placeholder="Select unit..."
						bind:selected_option={to_unit}
					/>
				</div>

				<Input
					id="value-input"
					label="Enter value"
					bind:value
					placeholder="Enter a number..."
				/>

				<div class="stats bg-primary text-primary-content shadow">
					<div class="stat">
						<div class="stat-title text-primary-content/80">
							Converted Value
						</div>
						<div class="stat-value">
							{Number(converted_value.toFixed(2)).toLocaleString()}
						</div>
						<div class="stat-desc text-primary-content/60">
							{to_unit}
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<div class="divider my-8"></div>

<div class="grid gap-4 md:grid-cols-2">
	<div class="card bg-base-100 shadow-lg">
		<div class="card-body">
			<h3 class="card-title">For Everyone</h3>
			<p>
				Whether you're a student, professional, or just curious about
				unit conversions, our tool makes it easy to understand
				different measurement systems.
			</p>
		</div>
	</div>

	<div class="card bg-base-100 shadow-lg">
		<div class="card-body">
			<h3 class="card-title">Comprehensive Coverage</h3>
			<p>
				From cooking measurements to data rates, temperature to
				digital storage - we cover all your conversion needs in one
				place.
			</p>
		</div>
	</div>
</div>
