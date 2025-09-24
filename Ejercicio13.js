/*13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible.*/

function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id: id, nombre: "Micaela" });
    }, 1000);
  });
}

function obtenerPedidos(usuarioId) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Pedidos obtenidos");
      resolve(["pedido1", "pedido2"]);
    }, 1000);
  });
}

// Uso con promesas anidadas
obtenerUsuario(1)
  .then(usuario => {
    obtenerPedidos(usuario.id)
      .then(pedidos => {
        console.log("Pedidos:", pedidos);
      })
      .catch(err => console.error("Error obteniendo pedidos:", err));
  })
  .catch(err => console.error("Error obteniendo usuario:", err));
