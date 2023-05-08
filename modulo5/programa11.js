/*
Tareas 1

Los arreglos en JavaScript tienen disponible un método
sort que, como puedes suponer, te permite ordenar sus
elementos. Este método toma como argumento una función
que comparará dos elementos del arreglo. La función debe
devolver cero si consideramos que los argumentos son
iguales, un valor menor que cero si consideramos que el
primero es menor que el segundo y un valor mayor que
cero en caso contrario. Mira el ejemplo:

let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if(a > b) {
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

A. Intenta modificar el código anterior para que sea lo más corto posible. Sugerencias:

    Usar una función anónima.
    Usar una función arrow o flecha
    Considera omitir la sentencia if.

B. Luego modifica la función para que los elementos se 
ordenen en orden descendente, no en orden ascendente como en el ejemplo.
*/

let numbers = [50, 10, 40, 30, 20];
function compareNumbersAsc(a, b) {
    return a < b ? -1 : 1;
}

let compare = (a,b) => a < b ? -1 : 1;
// let sortedAsc = numbers.sort(compareNumbersAsc);
let sortedAsc = numbers.sort(compare);
console.log(sortedAsc); // [10, 20, 30, 40, 50]

// let sortedDec = numbers.reverse(sortedAsc);
let sortedDec = numbers.reverse(sortedAsc);
console.log(sortedDec); // [50, 40, 30, 20, 10]



/*
Tarea 2

Escribe tres funciones con los nombres add, sub y
mult, que tomarán dos argumentos numéricos. Las
funciones son para verificar si los argumentos dados son
enteros (emplea Number.isInteger). Si no, devuelven
NaN, de lo contrario, devuelven el resultado de la suma, la
resta o la multiplicación, respectivamente. Las funciones
deben declararse mediante una instrucción de función.

Ejemplo de su uso y resultados esperados:
console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
*/

// function add(a, b){
//     return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
// }

// function mult(a, b){
//     return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
// }

// function sub(a, b){
//     return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
// }

// console.log(add("10", 10));
// console.log(add(10, 10))
// console.log(mult("9", 10));
// console.log(mult(9, 10));
// console.log(sub("10", 5));
// console.log(sub(10, 5));

/*
Tarea 3

Reescribe las funciones de la tarea anterior usando una
expresión de función arrow o flecha, tratando de escribirlas
en la forma más corta posible.

Ejemplo de su uso y resultados esperados:
console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN
*/

// let addArrow = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;

// let multArrow = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

// let subArrow = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;

// console.log(addArrow("10", 10));
// console.log(addArrow(10, 10))
// console.log(multArrow("9", 10));
// console.log(multArrow(9, 10));
// console.log(subArrow("10", 5));
// console.log(subArrow(10, 5));

/*
Tarea 4

Escriba una función action que tomará la función
callback como su primer argumento y los otros dos
argumentos como números. Como función callback, podrá
pasar una de las tres funciones de la tarea anterior. La
función action llamará a la función callback que se le
pasó y devolverá el resultado obtenido. La función callback
aceptará el segundo y el tercer argumento de la invocación.

Ejemplo de su uso y resultados esperados:
console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
*/

// function action(func, a, b){
//     return func(a,b);
// }

// console.log(action(add,10,10));
// console.log(action(mult,2,10));
// console.log(action(sub,7,4));

/*
Tarea 5

Escribe un programa que imprima (en la consola) números
enteros consecutivos 10 veces, en intervalos de dos
segundos (comienza con el número 1). Utiliza las funciones
setInterval, clearInterval y setTimeout.

Ejemplo de su uso y resultados esperados:
1
2
3
4
5
6
7
8
9
10
*/

// let count = 1;
// let print = function() {
//     console.log(count++);
// }

// let counter = function(print) {
//     let timerId = setInterval(print, 2000) /*ms*/;
//     setTimeout(function(){
//         clearInterval(timerId);
//     }, 21500);
// }

// counter(print);

/*
Tarea 6

Escribe una función que calcule el n-ésimo elemento de la
sucesión de Fibonacci. Esta secuencia se define mediante
una fórmula:

Formula Matemática

Entonces, cada elemento de la secuencia (excepto los dos
primeros) es la suma de los dos anteriores. Por ejemplo: F1
= 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 y F6 = F5 + F4 = 8. La
función debe usar recursividad. En la definición, usa una
expresión de función (almacena una función anónima en
una variable).

Ejemplo de su uso y resultados esperados:
console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13
*/

// function fibbRec(n){
// //    if (n == 0){
// //     return 0;
// //    }
// //    else if(n == 1){
// //     return 1;
// //    }
// //    else{
// //     return fibbRec(n-1) + fibbRec(n - 2);
// //    }
//     return n == 0 ? 0 : (n == 1 ? 1 : (fibbRec(n - 1)+ fibbRec(n - 2)));
// }

// console.log(fibbRec(1));
// console.log(fibbRec(2));
// console.log(fibbRec(3));
// console.log(fibbRec(4));
// console.log(fibbRec(5));
/*
Tarea 7

Reescribe la función de la Tarea 6 usando una expresión
de función arrow o flecha, pero intenta acortar tu código tanto
como sea posible (emplea operadores condicionales y trata
de no usar variables adicionales que no sean el parámetro 
n).
*/

// let fibb = n => n == 0 ? 0 : ( n == 1 ? 1 : (fibb(n-1) + fibb(n-2))); //Usando Arrow function

// console.log(fibb(1));
// console.log(fibb(2));
// console.log(fibb(3));
// console.log(fibb(4));
// console.log(fibb(5));
/*
Tarea 8

Escribe una versión iterativa de la función de la Tarea 6 
(usa el bucle for). Declara la función usando una instrucción 
de función.
*/

// function fibbIter(n) {
//     let a = 0, b = 1;
//     for (let i = 2; i <= n; i++) {
//         let c = a;
//         a = b;
//         b += c;        
//     }
//     return b;
// }

// console.log(fibbIter(1));
// console.log(fibbIter(2));
// console.log(fibbIter(3));

// function fibbIter(n) {
//     let a = 0, b = 1, c = 0, i = 1;
//     while(i < n){
//         c = a + b;
//         a = b;
//         b = c;    
//         i ++;    
//     }
//     return b;
// }

// console.log(fibbIter(1));
// console.log(fibbIter(2));
// console.log(fibbIter(3));
// console.log(fibbIter(4));
// console.log(fibbIter(5));