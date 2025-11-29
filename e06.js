async function obtenerNombresDeUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();

        console.log("Nombres de los usuarios:");
        usuarios.forEach(usuario => {
        console.log(" - "+usuario.name);
        });

    } catch (error) {
        console.error("Hubo un error:", error);
    }
}
obtenerNombresDeUsuarios();