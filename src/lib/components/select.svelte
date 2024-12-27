<script lang="ts">
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
		selected_option: value = $bindable(disabled_option)
	}: Props = $props();
	
</script>

<div class="form-control mb-2 w-full max-w-2xl">
	<label for={id} class="label pb-1 font-medium">
		<span class="label-text {font_size}">{label}</span>
	</label>
	<select
		bind:value
		class="input rounded-box w-full max-w-2xl shadow-lg {font_size} {select_classes}"
		{id}
		name={id}
	>
		{#if placeholder}
			<option disabled selected value="">{placeholder}</option>
		{/if}
		{#each options as option (option.name)}
			<option value={option.name}>{option.name}</option>
		{/each}
	</select>
</div>
