function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(responde => responde.json())
        .then(data => {
            console.log("DATOS USER ID:10");
            console.log("Name: "+data.name);
            console.log("Username: "+data.username);
            console.log("Email: "+data.email);
            
        })
        .catch(e => {
            console.log("Error en el fetch: "+e.message);
        })
}
cargarUsuario();