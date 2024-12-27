<script lang="ts">
	import '../app.css';
	import Sun from '$lib/icons/sun.svelte';
	import Moon from '$lib/icons/moon.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="min-h-screen bg-base-200">
	<div class="navbar bg-base-100 shadow-lg">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl">Convert & Calculate</a
			>
		</div>
		<div class="navbar-end">
			<label class="swap swap-rotate">
				<input
					type="checkbox"
					class="theme-controller"
					value="dark"
				/>
				<Sun class_names="swap-on h-6 w-6" />
				<Moon class_names="swap-off h-6 w-6" />
			</label>
		</div>
	</div>

	<main class="container mx-auto max-w-4xl px-4 py-8">
		<div class="prose prose-lg w-full max-w-none">
			{@render children?.()}
		</div>
	</main>

	<footer
		class="footer footer-center bg-base-300 p-4 text-base-content"
	>
		<aside>
			<p>Convert & Calculate - Your Universal Unit Conversion Tool</p>
		</aside>
	</footer>
</div>
