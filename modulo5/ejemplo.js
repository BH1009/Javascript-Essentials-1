/**
 * @Ejemplo_de_funciones_simples
 */
/* The code is calculating the mean of the temperatures. */
// let temperatures;
// let sum;
// let meanTemp;

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// sum = 0;
// for (let i = 0; i < temperatures.length; i++) {
// sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`); // -> media: 16.666666666666668
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// sum = 0;
// for (let i = 0; i < temperatures.length; i++) {
// sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`); // -> media: 18.083333333333332


/**
 * It calculates the mean temperature of the array of temperatures
 */
// let temperatures;
// let sum;
// let meanTemp;

// function getMeanTemp() {
//     sum = 0;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     meanTemp = sum / temperatures.length;    
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332


/*
programa con funciones y con variable sum como local
*/
// let temperatures;
// let meanTemp;

// function getMeanTemp() {
// let sum = 0;
// for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;    
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

/**
 * @Programa_de_funciones_con_retorno
 */
/**
 * Programa con funciones y retorno 
 */
// let temperatures;
// let meanTemp;

// function getMeanTemp() {
//     let sum = 0;
//     let result;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     result = sum / temperatures.length;
//     return result;  
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// meanTemp = getMeanTemp();
// console.log(`mean: ${meanTemp}`);

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// meanTemp = getMeanTemp();
// console.log(`mean: ${meanTemp}`);

/**
 * Programa con retorno directo sin almacenar el resultado
 */
// let temperatures;

// function getMeanTemp() {
//     let sum = 0;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     return sum / temperatures.length;
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// console.log(`mean: ${getMeanTemp()}`);

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// console.log(`mean: ${getMeanTemp()}`);

/**
 * Validacion de parametros 
 */
// function getMeanTemp(temperatures) {
//     if (!(temperatures instanceof Array)) {
//         return NaN;
//     }
//     let sum = 0;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     return sum / temperatures.length;
// }

// console.log(getMeanTemp(10));       // -> NaN
// console.log(getMeanTemp([10, 30])); // -> 20

/**
 * @recursividad
 */
/**
 * Factorial sencillo sin recursividad 
 */
// function factorial (n) {
//     let result = 1;
//     while (n > 1) {
//         result *= n;
//         n--;
//     }
//     return result;
// }

// console.log(factorial(6)); // -> 720

/**
 * Ejemplo de recuersividad 
 */
// function factorial (n) {
//     return n > 1 ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(6)); // -> 720

/**
 * @funciones_de_primera_clase
 */

/**
 * Funcion agregandola a una variable y llamadnola directamente 
 */
// function add(a, b) {
//     return a + b;
// }

// let myAdd = add;
// console.log(myAdd(10, 20));     // -> 30
// console.log(add(10, 20));   // -> 30

/**
 * Acortando la funcion agregadno el resultado de la funcion directamente en una variable 
 */
// let myAdd = function(a, b) {
//     return a + b;
// }

// console.log(myAdd(10, 20)); // -> 30

/**
 * @Callbacks_sincrono
 */
// let inner = function() {
//     console.log('inner 1');
// }

// let outer = function(callback) {
//     console.log('outer 1');
//     callback();
//     console.log('outer 2');
// }

// console.log('test 1');
// outer(inner);
// console.log('test 2');

/**
 * @Callbacks_asincrono
 */

/**setTimeout llama la funcion callback con un restraso*/
// let inner = function () {
//     console.log('inner 1');
// }

// let outer = function (callback) {
//     console.log('outer 1');
//     setTimeout(callback, 1000) /*ms*/;
//     console.log('outer 2');
// }

// console.log('test 1');
// outer(inner);
// console.log('test 2');

/**setInterval llama la funcion callback con un restraso en intervalos de tiempo*/
// let inner = function () {
//     console.log('inner 1');
// }

// let outer = function (callback) {
//     console.log('outer 1');
//     let timerId = setInterval(callback, 1000) /*ms*/;
//     console.log('outer 2');

//     setTimeout(function () {
//         clearInterval(timerId);
//     }, 5500);
// }

/**
 * @Arrow_functions
 */

//Funcion simple
// let add = function(a, b) {
//     return a + b;
// }
// console.log(add(10, 20)); // -> 30

//Arrow function
// let add2 = (a, b) => {
//     return a + b;
// }
// console.log(add2(10, 20)); // -> 30

//Arrow function simplificado
// let add3 = (a, b) => a + b;
// console.log(add3(10, 20)); // -> 30


