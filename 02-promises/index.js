//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

const dividir = (num1, num2) => {
  return new Promise((resolve, reject) => {
    //el cortocircuito no necesita una condicion de false como el ternario
    num1 === 0 && reject(new Error("todo mal")); //cortocircuito: num===0 es verdad: rechazalo
    num2 === 0 && reject(new Error("todo mal"));

    resolve(num1 / num2);
  });
};

dividir(100, 3)
  .then((result1) => {
    console.log(result1);
    return dividir(result1, 2);
  })
  .then((result2) => {
    console.log(result2);
    return dividir(result2, 0);
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((errorcito) => console.log(errorcito)) //hay un solo catch para toda la cadena de thens, todos van a entrar ahí si fallan
  .finally(console.log("esto es todo amigos")); //siempre va a entrar al finally, salgan bien o salgan mal

  //*la estructura es:
  //dividir().then().then().catch().finally()