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
		input_classes = '',
	}: Props = $props();
</script>

<div class="form-control w-full">
	<label for={id} class="label">
		<span class="label-text font-medium {font_size}">{label}</span>
	</label>
	<input
		class="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary {errors?.length
			? 'input-error'
			: ''} {font_size} {input_classes}"
		type="number"
		{id}
		{placeholder}
		{required}
		{disabled}
		name={id}
		bind:value
		aria-label={label}
		aria-invalid={errors?.length ? 'true' : 'false'}
	/>
	{#if errors?.length}
		<div class="mt-2">
			{#each errors as error}
				<div class="alert alert-error mb-2 py-2 text-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>{error}</span>
				</div>
			{/each}
		</div>
	{/if}
</div>
