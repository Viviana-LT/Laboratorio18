document.addEventListener('DOMContentLoaded', () => {
    const loadUserBtn = document.getElementById('loadUserBtn');
    const userNameP = document.getElementById('userName');
    const userEmailP = document.getElementById('userEmail');
    const userCityP = document.getElementById('userCity');

    loadUserBtn.addEventListener('click', () => {
        const apiUrl = `https://jsonplaceholder.typicode.com/users/2`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error de red: ${response.statusText}`);
                }
                return response.json();
            })
            .then(userData => {
                userNameP.innerHTML = `<strong>Nombre:</strong> ${userData.name}`;
                userEmailP.innerHTML = `<strong>Email:</strong> ${userData.email}`;
                userCityP.innerHTML = `<strong>Ciudad:</strong> ${userData.address.city}`;
            })
            .catch(error => {
                console.log("Hubo un problema con la operación fetch:", error);
                userNameP.innerHTML = `<strong>Nombre:</strong> Error al cargar`;
            });
    });
});
