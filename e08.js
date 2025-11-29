async function loadUserData() {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = '<p class="loading">Cargando datos...</p>';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
        if (!response.ok) {
            throw new Error(`Error de red: ${response.statusText}`);
        }
        const userData = await response.json(); 

        userInfoDiv.innerHTML = `
            <h3>Datos del Usuario 2:</h3>
            <p><strong>Nombre:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Ciudad:</strong> ${userData.address.city}</p>
        `;
    } catch (error) {
        console.error('Hubo un problema con la operación fetch:', error);
        userInfoDiv.innerHTML = `<p class="error">No se pudieron cargar los datos: ${error.message}</p>`;
    }
}

const loadUserButton = document.getElementById('loadUserButton');
loadUserButton.addEventListener('click', loadUserData);
