<script>
	import { redirectToUrl } from '$scripts/redirectToUrl';
	import { _updateItem } from './+page';

	export let data;
	let item = data.item;

	async function handleUpdate() {
		await _updateItem(item.id, item);
	}
</script>

<div class="container">
	<div class="py-5 text-center">
		<h2>상품 상세</h2>
	</div>
	<div>
		<label for="itemId">상품 ID</label>
		<input type="text" id="itemId" name="itemId" class="form-control" bind:value="{item.id}" readonly />
	</div>
	<div>
		<label for="itemName">상품명</label>
		<input type="text" id="itemName" name="itemName" class="form-control" bind:value="{item.itemName}"  />
	</div>
	<div>
		<label for="price">가격</label>
		<input type="text" id="price" name="price" class="form-control" bind:value="{item.price}" />
	</div>
	<div>
		<label for="quantity">수량</label>
		<input type="text" id="quantity" name="quantity" class="form-control" bind:value="{item.quantity}" />
	</div>
	<hr class="my-4" />
	<div class="row">
		<div class="col">
			<button
				class="w-100 btn btn-primary btn-lg"
				on:click="{ handleUpdate }"
				type="button">상품 수정</button
			>
		</div>
		<div class="col">
			<button
				class="w-100 btn btn-secondary btn-lg"
				on:click="{() => redirectToUrl('/items')}"
				type="button">목록으로</button
			>
		</div>
	</div>
</div>
