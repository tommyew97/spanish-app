export async function getAuthToken() {
    try {
        const response = await fetch(
            "https://spanish-app.azurewebsites.net/.auth/me"
        );
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}
