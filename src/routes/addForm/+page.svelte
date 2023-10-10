<script>
	let formData = {
		itemName: '',
		price: '',
		quantity: ''
	};

	async function handleSubmit() {
		const apiUrl = 'http://localhost:8080/items';
		let jsonResponse = '';

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				throw new Error('error!');
			} else {
				jsonResponse = await response.json();
				console.log(jsonResponse.id);
			}
		} catch (error) {
			console.log('오류', error);
		} finally {
			window.location.href = `/item/${jsonResponse.id}`;
		}
	}
</script>

<div class="container">
	<div class="py-5 text-center">
		<h2>상품 등록 폼</h2>
	</div>
	<h4 class="mb-3">상품 입력</h4>
	<form on:submit|preventDefault={handleSubmit}>
		<div>
			<label for="itemName">상품명</label>
			<input
				type="text"
				id="itemName"
				name="itemName"
				bind:value={formData.itemName}
				class="form-control"
				placeholder="이름을 입력하세요"
			/>
		</div>
		<div>
			<label for="price">가격</label>
			<input
				type="text"
				id="price"
				name="price"
				bind:value={formData.price}
				class="form-control"
				placeholder="가격을 입력하세요"
			/>
		</div>
		<div>
			<label for="quantity">수량</label>
			<input
				type="text"
				id="quantity"
				name="quantity"
				bind:value={formData.quantity}
				class="form-control"
				placeholder="수량을 입력하세요"
			/>
		</div>
		<hr class="my-4" />
		<div class="row">
			<div class="col">
				<button class="w-100 btn btn-primary btn-lg" type="submit">상품 등록</button>
			</div>
			<div class="col">
				<button
					class="w-100 btn btn-secondary btn-lg"
					onclick="location.href='/items'"
					type="button">취소</button
				>
			</div>
		</div>
	</form>
</div>

<style>
	.container {
		max-width: 560px;
	}
</style>
