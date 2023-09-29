export async function load() {
    const apiUrl = 'http://localhost:8080/items';

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("error!");
        }

        const items = await response.json();

        return { items };
    } catch (error) {
        console.log(error);
    }
}