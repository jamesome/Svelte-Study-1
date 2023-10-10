export async function load({ params }) {
    const apiUrl = `http://localhost:8080/items/${params.slug}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("error!");
        }

        const item = await response.json();

        return { item };
    } catch (error) {
        console.log(error);
    }
}

// 내부함수, 비공개함수
export async function _updateItem(itemId: string, item: string): Promise<void> {
    console.log(item);
    const apiUrl = `http://localhost:8080/items/${itemId}`;
    let jsonResponse = '';

    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        if (!response.ok) {
            throw new Error("error!");
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