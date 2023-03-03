<script lang="ts">
	import NewsTableItem from './ProductsTableItem.svelte'
	type Product = {
		product_url: string
		image_url: string
		description: string
		cluster: number
	}
	export let news: Product[]
</script>

<table class="w-full border-collapse border-2 border-none bg-white h-full overflow-y-auto">
	<tr class="border-2 border-none odd:bg-gray-1 sticky top-0">
		<th class="p-3 text-start text-lg font-bold text-blue">Product Description</th>
		<th class="p-3 text-start text-lg font-bold text-blue">Cluster</th>
		<th class="p-3 text-end text-lg font-bold text-blue" />
	</tr>
	{#each news as item}
		<NewsTableItem {item} />
	{/each}
</table>
