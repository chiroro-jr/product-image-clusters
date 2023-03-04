<script lang="ts">
	import Logo from './Logo.svelte'
	import SelectInput from './SelectInput.svelte'

	export let selectedCluster = ''
	let scrapingImages =
		'https://colab.research.google.com/drive/1PZiYdhDCe5wkFJv6AnBzXOVz-Lx4Nglb?usp=sharing'
	let clusteringImages =
		'https://colab.research.google.com/drive/11kjO-Ls2Vr9wrtF6OQyrY0NmH3Et8z5V?usp=sharing'
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
			<li>Nyasha Chiroro - R187470B</li>
			<li>Mc Samuel Shoko - R1810066</li>
			<li>Anesu Masora - R187496Q</li>
		</ul>
	</div>

	<!-- Reference links -->
	<div class="space-y-px">
		<h3 class="font-bold text-blue">Reference links</h3>
		<ul class="text-sm text-green underline">
			<li>
				<a href={scrapingImages} target="_blank" rel="noreferrer">Scrapping images - colab</a>
			</li>
			<li>
				<a href={clusteringImages} target="_blank" rel="noreferrer">Clustering images - colab</a>
			</li>
		</ul>
	</div>
</aside>
