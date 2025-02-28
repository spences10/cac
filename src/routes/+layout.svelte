<script lang="ts">
	import Moon from '$lib/icons/moon.svelte';
	import Sun from '$lib/icons/sun.svelte';

	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-base-200 min-h-screen">
	<div class="navbar bg-base-100 shadow-lg">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl">
				Convert & Calculate
			</a>
		</div>
		<div class="navbar-end">
			<label class="swap swap-rotate">
				<input
					type="checkbox"
					class="theme-controller hidden"
					value="dark"
				/>
				<Sun class_names="swap-on h-6 w-6" />
				<Moon class_names="swap-off h-6 w-6" />
			</label>
		</div>
	</div>

	<main class="container mx-auto max-w-4xl px-4 py-8">
		<div class="prose prose-lg w-full max-w-none">
			{@render children()}
		</div>
	</main>

	<footer
		class="footer footer-center bg-base-300 text-base-content p-4"
	>
		<aside>
			<p>Convert & Calculate - Your Universal Unit Conversion Tool</p>
		</aside>
	</footer>
</div>
