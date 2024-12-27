<script lang="ts">
	interface Props {
		value?: string;
		placeholder?: string;
		id?: string;
		label?: string;
		disabled?: boolean;
		required?: boolean;
		errors?: string[];
		font_size?: string;
		input_classes?: string;
	}

	let {
		value = $bindable(''),
		placeholder = '',
		id = '',
		label = '',
		disabled = false,
		required = false,
		errors = [],
		font_size = 'text-base',
		input_classes = ''
	}: Props = $props();
</script>

<div class="form-control mb-2 w-full max-w-2xl">
	<label for={id} class="label pb-1 font-medium">
		<span class="label-text {font_size}">{label}</span>
	</label>
	<input
		class="input rounded-box w-full max-w-2xl shadow-lg {font_size} {input_classes}"
		type="number"
		{id}
		{placeholder}
		{required}
		{disabled}
		name={id}
		bind:value
	/>
	{#if errors}
		{#each errors as error}
			<label for={id} class="label pb-0">
				<span class="label-text-alt text-warning">{error}</span>
			</label>
		{/each}
	{/if}
</div>
