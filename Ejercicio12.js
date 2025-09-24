/*12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible.*/

function obtenerUsuario(id, callback) {
  setTimeout(() => {
    console.log("Usuario obtenido");
    callback({ id: id, nombre: "Micaela" });
  }, 1000);
}

function obtenerPedidos(usuarioId, callback) {
  setTimeout(() => {
    console.log("Pedidos obtenidos");
    callback(["pedido1", "pedido2"]);
  }, 1000);
}

function enviarNotificacion(pedidos, callback) {
  setTimeout(() => {
    console.log("Notificación enviada para:", pedidos);
    callback();
  }, 1000);
}

// Uso con callbacks anidados
obtenerUsuario(1, usuario => {
  obtenerPedidos(usuario.id, pedidos => {
    enviarNotificacion(pedidos, () => {
      console.log("Todo finalizado ✅");
    });
  });
});
