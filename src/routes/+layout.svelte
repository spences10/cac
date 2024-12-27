<script lang="ts">
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main
	class="prose-headings:text-primary container prose prose-xl mx-auto max-w-3xl px-4"
>
	{@render children?.()}
</main>
