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
			class="text-base-content/70 pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
		>
			<ChevronDown height="20px" width="20px" />
		</div>
		<select
			bind:value
			class="select select-primary rounded-box btn-block bg-base-100 hover:bg-base-200 focus:bg-base-200 focus:ring-primary min-h-12 appearance-none px-4 transition-colors focus:ring-2 focus:outline-none {font_size} {select_classes}"
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
