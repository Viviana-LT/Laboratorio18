function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(responde => responde.json())
        .then(data => {
            console.log("Lista de usuarios");
            data.forEach(user => {
                console.log("- "+user.name);
            });
        })
        .catch(e => {
            console.log("Error en el fetch: "+e.message);
        })
}
cargarUsuario();