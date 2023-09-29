<script>
	import { redirectToUrl } from '$scripts/redirectToUrl';

	export let data;
</script>

<div class="container" style="max-width: 600px">
	<div class="py-5 text-center">
		<h2>상품 목록</h2>
	</div>
	<div class="row">
		<div class="col">
			<button
				class="btn btn-primary float-end"
				on:click={() => redirectToUrl('addForm')}
				type="button">상품 등록</button
			>
		</div>
	</div>
	<hr class="my-4" />
	<div>
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>상품명</th>
					<th>가격</th>
					<th>수량</th>
				</tr>
			</thead>
			<tbody>
				{#each data.items as item}
					<tr>
						<td><a href="{`item/${item.id}`}">{item.id}</a></td>
						<td><a href="{`item/${item.id}`}">{item.itemName}</a></td>
						<td>{item.price}</td>
						<td>{item.quantity}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
