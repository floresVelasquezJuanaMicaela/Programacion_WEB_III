/*16. Proporcione un ejemplo para migrar una función con promesas a async/await.*/

async function procesar() {
  try {
    const numero = await new Promise(resolve => setTimeout(() => resolve(10), 1000));
    const resultado = await new Promise(resolve => setTimeout(() => resolve(numero * 2), 1000));
    console.log("Resultado final:", resultado);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

procesar();
