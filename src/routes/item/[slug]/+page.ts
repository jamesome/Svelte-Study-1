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