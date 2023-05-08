/*
Tarea 1

Ejecuta el siguiente código:
let end = 2; 
for(let i=1; i<=end; i++) { 
    console.log(i); 
}

Debería dar como salida los números 1 y 2 en la consola. Usa el debugger para hacer que el programa genere los números 1, 2, 3, 4 y  5. No modifiques el código del programa. 
Usa solo puntos de interrupción y la opción de modificar variables.
*/

// let end = 2; 
// for(let i=1; i<=end; i++) { 
//     console.log(i); 
// }

/*
Tarea 2

Use el debugger para comprender por qué el resultado final 
registrado es igual a cero cuando en cada iteración del 
for, aumenta un valor de bucle la variable result. Utiliza 
Watch para realizar un seguimiento de los cambios en las
variables seleccionadas.
*/
// let counter = 0; 
// let maxValue = 10; 
// let result = 1; 
 
// debugger; 
// for (counter = 0; counter < maxValue; counter++) { 
//     console.log(result); 
//     result *= maxValue - counter - 1; 
// } 
 
// console.log("Resultado final: ", result);

/*
Tarea 3

Ejecuta el siguiente código:
*/
function max(array) { 
    let maxValue = array[1]; 
    for(let i=1; i<array.length; i++) { //El error se encuentra en esta linea
        if(array[i] > maxValue) { 
            maxValue = array[i]; 
        } 
    } 
    return maxValue; 
} 
 
console.log( max([1, 4, 6, 2])); // -> 6 
console.log( max([10, 4, 6, 2])); // -> 6

/**
 * ya que en el primer ejemplo el valor del arreglo en la posicion 0
 * es igual a 1 no afecta al resultado pero en el segundo al emepezar
 * a comparar desde la posicion 1 el valor de la posicion 0 nunca 
 * se toma en cuenta
 */

/*
La función max debe devolver el número más grande del 
arreglo dado como argumento. Como puedes ver, en el 
segundo caso funciona incorrectamente: en lugar del valor 
10 obtenemos 6. Usando el depurador, rastrea la 
ejecución de la función max paso a paso. Observa los 
valores de las variables i y maxValue. Localiza el 
problema y corrige el código para que funcione correctamente.
*/
