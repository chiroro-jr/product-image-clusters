<script lang="ts">
	import '../app.css'
	import products from '../products_clustered.json'
	import Aside from './Aside.svelte'
	import Footer from './Footer.svelte'
	import Gradient from './Gradient.svelte'
	import Heading from './Heading.svelte'
	import ProductCard from './ProductCard.svelte'

	let selectedCluster = ''
	$: visibleClusters = products.filter((item) => {
		if (selectedCluster === '') {
			return true
		}

		return item.cluster === Number(selectedCluster)
	})
</script>

<svelte:head>
	<title>Product Image Clusters</title>
</svelte:head>

<div class="app-grid | h-screen w-screen overflow-hidden">
	<Gradient />
	<Aside bind:selectedCluster />
	<main class="main | overflow-y-scroll relative">
		<div class="space-y-4">
			<div class="sticky top-0 py-4 px-6 bg-gray-3">
				<Heading>
					{#if selectedCluster === ''}
						Showing all products
					{:else}
						Showing all products in cluster {selectedCluster}
					{/if}
				</Heading>
			</div>
			<div class="cluster-grid | py-4 px-6">
				{#each visibleClusters as product}
					<ProductCard {product} />
				{/each}
			</div>
		</div>
	</main>
	<Footer />
</div>
