// EJERCICIO 13

// let numeros = [2, 3, 4, 6, 89, 56, 65, 43, 65, 190];

// function encontrarMayor(array) {
//   let mayor = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > mayor) {
//       mayor = array[i];
//     }
//   }
//   return mayor;
// }
// console.log(encontrarMayor(numeros));

// numeros.sort((a, b) => a - b);
// console.log(numeros[0]);

// EJERCICIO 12
// function numerosPares() {
//   let pares = 0;
//   let impares = 0;
//   while (true) {
//     let numero = Number(prompt("ingrese un numero"));
//     if (numero === 0) {
//       alert("Fin del programa");
//       break;
//     } else {
//       if (isNaN(numero)) {
//         alert("ingresa un numero valido");
//         break;
//       } else if (numero % 2 === 0) {
//         pares += numero;
//       } else {
//         impares += numero;
//       }
//     }
//   }
//   console.log(pares, impares);
// }

// numerosPares();

// EJECICIO 10
// let obj = {
//   nombre: "Alejandra",
//   apellido: "Ardila",
//   nacionalidad: "Colombiana",
//   edad: 21,
//   estudios: ["primaria", "secundaria", "universidad"],
// };
// function objetoARecorrer(obj) {
//   for (let datos in obj) {
//     console.log(datos);
//   }
// }
// objetoARecorrer(obj);

// EJERCICIO 11

// function valorDeObj(obj) {
//   for (let valores in obj) {
//     console.log(
//       `${obj.nombre},${obj.apellido},${obj.nacionalidad},${obj.edad},${obj.estudios} `
//     );
//   }
// }

// valorDeObj(obj);

// EJERCICIO 9
// let arrayFamiliar = [
//   {
//     nombre: "Antony",
//     edad: "11",
//     apellido: "Ardila",
//     integrante: "Hermano",
//   },
//   {
//     nombre: "Rubiela",
//     edad: "50",
//     apellido: "Plata",
//     integrante: "Madre",
//   },
//   {
//     nombre: "Benjamin",
//     edad: "64",
//     apellido: "Ardila",
//     integrante: "Padre",
//   },
//   {
//     nombre: "Kelly",
//     edad: "24",
//     apellido: "Ardila",
//     integrante: "Hermana",
//   },
// ];
// function arrayFamilia(arraydeobjetos) {
//   console.log(arraydeobjetos);
//   for (let familiar of arraydeobjetos) {
//     console.log(
//       `Hola soy ${familiar.nombre} ${familiar.integrante} y tengo ${familiar.edad} años`
//     );
//   }
// }
// arrayFamilia(arrayFamiliar);

// EJERCICIO 8

// let arrayNumerico = [1, 2, 3, 4, 5];

// function duplicarValor(arrayDeNumeros) {
//   for (let numeros of arrayDeNumeros) {
//     console.log(`El numero es ${numeros} y su doble es ${numeros * 2}`);
//   }
// }
// duplicarValor(arrayNumerico);

// EJERCICIO 7

// let arrraDeColores = ["rojo", "verde", "amarillo", "azul", "negro"];
// function mostarColores(arrayDeColores) {
//   for (let color of arrayDeColores) {
//     console.log(color);
//   }
// }

// mostarColores(arrraDeColores);

// EJERCICIO 3

// function programa() {
//   let suma = 0;
//   let numeros = parseInt(prompt("ingrese los numeros"));
//   while (numeros > 0) {
//     suma = suma + numeros;
//     numeros = parseInt(prompt("ingrese los numeros o 0 para terminar"));
//   }
//   console.log(suma);
// }
// programa();

// Ejercicio 2

//  let multiplo = Number(prompt("ingrese un numero entre 1 y 10"));
// if (multiplo >= 1 && multiplo <=10){
//     console.log
//       (  tabla de multiplicar del ${multiplo})

//     for(let i = 1; i <=10; i++){
//         let resultado = multiplo * i
//         console.log(${multiplo} X ${i} = ${resultado})
//     }
// }else{
//     console.log("numero ingresado no permitido")
// }

// EJERCICIO 1

//  let numero = Number(prompt("ingrese un numero entre 1 y 100"));
//  if (numero >= 1 && numero <= 100){
//   for(let i = numero; i >=1; i--){
//     console.log(i)
//   }
//  }else{
//     console.log("numero ingresado no corresponde")
//  }

// EJERCICIO 4

// function sumarNumeros() {
//   let suma = 0;
//   let numeros = parseInt(prompt("ingrese los numeros"));
//   do {
//     suma = suma + numeros;
//     numeros = parseInt(prompt("ingrese los numeros o 0 para terminar"));
//   } while (numeros > 0);
// }

// sumarNumeros();
// EJERCICIO 4
// let suma = 0;
// let numeros = parseInt(prompt("ingrese los numeros para sumar"));
// do {
//   suma = suma + numeros;
//   numeros = parseInt(prompt("ingrese los numeros o 0 para terminar"));
// } while (numeros > 0);

// EJERCICIO 5

// function sumarComparando() {
//   let contador = 0;
//   while (numeros != suma) {
//     numeros = Number(prompt("ingrese un numero para comparar"));
//     contador++;
//     if (numeros > suma) {
//       alert("El numero que tienes que adivinar es menor");
//     } else if (numeros < suma) {
//       alert("el numero que tienes que adivinar es mayor");
//     } else {
//       alert(`adivinaste el numero en ${contador} veces`);
//     }
//   }
// }

// sumarComparando();

// EJERCICIO 6

// function sextoPrograma() {
//   let num = Number(prompt("Ingrese un numero"));
//   for (let i = num; i > 0; i--) {
//     if (num % i == 0) {
//       console.log(i);
//     }
//   }
// }
