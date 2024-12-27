<script lang="ts">
	import ChevronDown from '$lib/icons/chevron-down.svelte';

	interface Props {
		id?: string;
		label?: string;
		font_size?: string;
		select_classes?: string;
		options?: { name: string; selected?: boolean }[];
		disabled_option?: string;
		placeholder?: string;
		selected_option?: any;
	}

	let {
		id = '',
		label = '',
		font_size = 'text-base',
		select_classes = '',
		options = [],
		disabled_option = '',
		placeholder = '',
		selected_option: value = $bindable(disabled_option),
	}: Props = $props();
</script>

<div class="form-control w-full">
	<label for={id} class="label">
		<span class="label-text font-medium {font_size}">{label}</span>
	</label>
	<div class="relative">
		<div
			class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-base-content/70"
		>
			<ChevronDown height="20px" width="20px" />
		</div>
		<select
			bind:value
			class="select select-bordered btn-block min-h-12 appearance-none bg-base-100 px-4 transition-colors hover:bg-base-200 focus:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary {font_size} {select_classes}"
			{id}
			name={id}
			aria-label={label}
			role="combobox"
		>
			{#if placeholder}
				<option disabled selected value="">{placeholder}</option>
			{/if}
			{#each options as option (option.name)}
				<option value={option.name}>{option.name}</option>
			{/each}
		</select>
	</div>
</div>
