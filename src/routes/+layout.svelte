<script lang="ts">
	import '../app.css'
	import data from '../products_clustered.json'
	import Footer from './Footer.svelte'
	import Heading from './Heading.svelte'
	import Logo from './Logo.svelte'
	import NewsTable from './ProductsTable.svelte'
	import SelectInput from './SelectInput.svelte'

	let selectedCluster = ''
	$: visibleClusters = data.filter((item) => {
		if (selectedCluster === '') {
			return true
		}

		return item.cluster === Number(selectedCluster)
	})
</script>

<svelte:head>
	<title>News Clusters</title>
</svelte:head>

<div class="app-grid | min-w-screen min-h-screen">
	<!-- Top Gradient -->
	<div class="gradient | h-2" />
	<div class="bg-white py-6 space-y-4">
		<Logo />
		<!-- select box to change cluster in view -->
		<form class="max-w-[400px] mx-auto flex flex-col gap-2 items-center">
			<label for="clusters" class="font-medium text-center text-gray-4"
				>Choose a cluster to view</label
			>
			<SelectInput bind:selectedCluster />
		</form>
		<div />
	</div>
	<main>
		<div class="mx-auto max-w-container py-6 px-5">
			<Heading>
				{#if selectedCluster === ''}
					Showing all products
				{:else}
					Showing all products in cluster {selectedCluster}
				{/if}
			</Heading>
			<div class="scrollable | space-y-8 h-[300px] overflow-y-scroll relative">
				<NewsTable news={visibleClusters} />
			</div>
		</div>
	</main>
	<Footer />
</div>
