<script lang="ts">
	import type { Product } from '../app'

	export let product: Product
</script>

<div class="max-w-[250px] flex flex-col overflow-hidden rounded bg-white shadow-sm">
	<div class="h-[150px] bg-gray-3" />
	<div class="flex flex-col flex-1 gap-2 p-4">
		<p class="text-gray-800 first-letter:uppercase">{product.description}</p>
		<span class="text-sm text-gray-600">Cluster {product.cluster}</span>
		<a
			href={product.product_url}
			target="_blank"
			rel="noreferrer"
			class="rounded mt-auto bg-green p-2 text-center text-sm font-semibold text-white"
			>View Product</a
		>
	</div>
</div>
