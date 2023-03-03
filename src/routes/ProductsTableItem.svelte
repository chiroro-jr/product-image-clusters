<script lang="ts">
	type Product = {
		product_url: string
		image_url: string
		description: string
		cluster: number
	}

	export let item: Product
</script>

<tr class="border-2 border-none odd:bg-gray-1">
	<td class="p-3 text-blue first-letter:uppercase">{item.description}</td>
	<td class="p-3 text-end text-gray-4 first-letter:uppercase">{item.cluster}</td>
	<td class="p-3 text-green first-letter:uppercase"
		><a class="underline whitespace-nowrap" target="_blank" rel="noreferrer" href={item.product_url}
			>View Product</a
		></td
	>
</tr>
