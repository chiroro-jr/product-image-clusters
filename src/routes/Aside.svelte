<script lang="ts">
	import Logo from './Logo.svelte'
	import SelectInput from './SelectInput.svelte'

	export let selectedCluster = ''
</script>

<aside class="aside | bg-white py-4 px-6 space-y-4">
	<Logo />
	<form class="max-w-[400px] mx-auto flex flex-col gap-2">
		<label for="clusters" class="font-medium text-gray-4">Choose a cluster to view</label>
		<SelectInput bind:selectedCluster />
	</form>
	<!-- Group Members -->
	<div class="space-y-px">
		<h3 class="font-bold text-blue">Group members</h3>
		<ul class="text-sm text-gray-4">
			<li>Nyasha Chiroro</li>
			<li>Mc Samuel Shoko</li>
			<li>Anesu Masora</li>
		</ul>
	</div>

	<!-- Reference links -->
	<div class="space-y-px">
		<h3 class="font-bold text-blue">Reference links</h3>
		<ul class="text-sm text-green underline">
			<li><a href="#">Scrapping images - colab</a></li>
			<li><a href="#">Clustering images - colab</a></li>
		</ul>
	</div>
</aside>
