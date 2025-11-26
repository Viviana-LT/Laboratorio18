async function cargarUsuario() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data = await response.json();

        console.log("DATOS USER ID:10");
        console.log("Name: "+data.name);
        console.log("Username: "+data.username);
        console.log("Email: "+data.email);

    }catch(e) {
        console.log("Error al cargar el usuario: "+e.message)
    }
}

cargarUsuario();