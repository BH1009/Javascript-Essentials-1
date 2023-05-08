/*
Tarea 1

Escribe un fragmento de código que escriba números del
100 al 0 en la consola, pero en pasos de 10 en 10; entonces
 sería 100, 90, 80... etc.
*/
// console.log("Tarea 1");
// let count = 100;
// while(count >= 0){
//     console.log(`Estamos en el numero ${count}`);
//     count -= 10;
// }
//Otra manera de hacerlo
// for(let i = 100; i >= 0; i-=10){
//     console.log(`Estamos en el numero ${i}`);
// }
// console.log("");
/*
Tarea 2

Modifica el programa anterior para que le pida al usuario el
primer y último número a usar en lugar de 100 y 0 (pista:
use el cuadro de diálogo prompt). Comprueba si los 
valores introducidos son correctos (que el valor inicial sea
mayor que el valor final)
*/
// console.log("Tarea 2");
// alert("Cuenta regresiva de 10 en 10");
// let upper = prompt("Ingrese el limite superior");
// let lower = prompt("Ingrese el limite inferior");

// if(!Number.isNaN(upper) && !Number.isNaN(lower) && upper > lower){
//     for(let i = upper; i >= lower; i -= 10){
//         console.log(`Estamos en el numero ${i}`);
//     }
// }
// console.log("");

/*
Tarea 3

Hay diez números diferentes en este arreglo:

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

Escribe un programa que primero escriba todos estos
números en la consola, luego solo los que son pares (pista:
el residuo de dividir un número par entre 2 es igual a 0),
luego solo los que son mayores que 10 y al mismo tiempo
menor que 60.
*/

// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
// console.log("Tarea 3");
// console.log("Numero del arreglo");
// for(let number of numbers){
//     console.log(number);
// }
// console.log("Numeros pares");
// for(let number of numbers){
//     if(number % 2 == 0){
//         console.log(number);
//     }
// }
// console.log("Numeros mayores que de 10 pero menores de 60");
// for(let number of numbers){
//     if(number > 10 && number < 60){
//         console.log(number);
//     }
// }
// console.log("");

/*
Tarea 4

Escribe un programa utilizando un bucle que le pida al
usuario el nombre de una película (primer cuadro 
de dialogo) y su calificación de www.imdb.com (segundo
cuadro de dialogo). El programa te permitirá ingresar tantas
películas como desees en el arreglo de películas. Cada
elemento del arreglo será un objeto, que constará de dos
campos: título e imdb. La entrada se completa si el usuario
presiona Cancelar en el cuadro de diálogo. Luego, el
programa debe imprimir primero en la consola todas las
películas que tienen una calificación inferior a 7, luego
aquellas cuya calificación sea mayor o igual a 7. Escribe el
nombre de la película y su calificación uno al lado del otro,
por ejemplo:< /p>
Perdido en la Selva (7.7)
*/
// console.log("Tarea 4");
// let movies = [];
// let newMovie = {
//     titulo: "",
//     calificacion: ""
// };
// while(true){
//     let title = prompt("Titulo de la pelicula");
//     let raiting = prompt("Calificacion de la pelicula");
//     if(title == null || raiting == null){
//         break;
//     }
//     else{
//         movies.push({
//             title: title,
//             raiting: raiting
//         });
//     }
// } 
// console.log("Peliculas con calificacion menor a 7");
// for(let movie of movies){
//     if(movie.raiting < 7){
//         console.log(`${movie.title} (${movie.raiting})`);
//     }
// }
// console.log("Peliculas con calificacion mayor o igual a 7");
// for(let movie of movies){
//     if(movie.raiting >= 7){
//         console.log(`${movie.title} (${movie.raiting})`);
//     }
// }
// console.log("");

/*
Tarea 5

El contenido del objeto que describe la posición del barco
llamado "Mareno" se muestra en la consola.

LATITUD -> 40.07288 
LONGITUD -> 154.48535 
CURSO -> 285.6 
VELOCIDAD -> 14.0 
OMI -> 9175717 
NOMBRE -> MARENO

El código que se presenta a continuación se usa para esto.
Completa el programa declarando el objeto que falta en
lugar de los tres puntos.

let vessel = ... 
 
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`);
}
*/

/*
Tarea 6

Modifica el programa de calculadora que creaste en el
Módulo 4, Sección 2, de tal manera que funcione en el bucle
hasta que el usuario ingrese S en cualquiera de los
cuadros de dialogo.
*/
alert(`Calculadora simple \nIngrese "S" si quiere salir`);
while(true){
    let number1 = prompt("Elije un numero");
    let number2 = prompt("Elije otro numero");
    let operand = prompt("Elija el operando +, -, *, / , **");
    let result;
    if(number1 == "S" || number2 == "S" || operand == "S"){
        alert("Saliendo");
        break;
    }
    if(!Number.isNaN(number1) && !Number.isNaN(number2)){
        switch(operand){
            case "+": result = Number(number1) + Number(number2); break;
            case "-": result = Number(number1) - Number(number2); break;
            case "*": result = Number(number1) * Number(number2);break;
            case "/": 
                if(number2 == 0){
                    alert("No se puede dividir entre cero");
                    result = "La operacion no se pudo efectuar";
                }
                else{
                    result =  Number(number1) / Number(number2);
                }
                break;
            case "**": result = Number(number1) ** Number(number2); break;
            default: result = "Operando desconocido"; break;
        }
    }
    else{
        result = ("Los valores no son numericos");
    }
    alert(result);
}