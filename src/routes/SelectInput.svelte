<script lang="ts">
	export let selectedCluster = ''
</script>

<select
	id="clusters"
	bind:value={selectedCluster}
	class="bg-gray-white border-2 border-gray-3 outline-none rounded-lg focus:ring-blue/60 focus:border-blue/60 block w-full p-4 placeholder:text-gray-4 text-gray-4"
>
	<option selected value="">All clusters</option>
	<option value="0">Cluster 0</option>
	<option value="1">Cluster 1</option>
	<option value="2">Cluster 2</option>
	<option value="3">Cluster 3</option>
	<option value="4">Cluster 4</option>
	<option value="5">Cluster 5</option>
	<option value="6">Cluster 6</option>
	<option value="7">Cluster 7</option>
	<option value="8">Cluster 8</option>
	<option value="9">Cluster 9</option>
	<option value="10">Cluster 10</option>
	<option value="11">Cluster 11</option>
	<option value="12">Cluster 12</option>
	<option value="13">Cluster 13</option>
	<option value="14">Cluster 14</option>
</select>
