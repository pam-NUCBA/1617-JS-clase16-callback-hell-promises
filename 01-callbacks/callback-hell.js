const dividir = (num1, num2, cb) => {
  if (num1 === 0 || num2 === 0) {
    //si alguno es igual a 0
    cb(console.log("ufa"), null); //puede estar o no, total si dio error no va a haber resultado
  } else {
    cb(null, num1 / num2); //creé un callback con dos parametros. El primero es error, el segundo es todo ok!}
  }
};

//*callback no la creé afuera, entonces no tiene nombre. Con pasarle los parámetros alcanza
dividir(7, 2, (error, result1) => {
  //básicamente este callback es anónimo, no lo creé afuera. Con pasarle los dos param alcanza
  //el tercer parametro es el callback, y ahí le paso los dos param que le creé: un error, o un resultado
  if (error) {
    console.log(error); //tirate un error
  } else {
    console.log(result1);
    console.log(typeof result1);
  }
});

// && ambos tienen que cumplir la condicion
// || alguno tiene que cumplir la condición

//*esto es el callback hell!
//*mala, horrible, fea práctica
dividir(48, 2, (error, result1) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result1);
    dividir(result1, 3, (error, result2) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result2);
        dividir(result2, 5, (error, result3) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result3);
          }
        });
      }
    });
  }
});
