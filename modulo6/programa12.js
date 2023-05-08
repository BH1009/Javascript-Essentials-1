/*
Tareas

Tarea 1

Escribe tu propia función div que tomará dos argumentos
de llamada y devolverá el resultado de dividir el primer 
argumento entre el segundo. En JavaScript, el resultado de 
dividir entre cero es el valor Infinity (o -Infinity, si 
intentamos dividir un número negativo). Cambia esto. Si se 
pasa 0 como segundo argumento, tu función debería     
lanzar una excepción RangeError con el mensaje 
apropiado. Prepara una llamada de prueba de la función 
tanto para la división válida como para la división entre cero.
*/
let div = function(a, b){
    if(b == 0){
        throw RangeError("No se puede dividir entre cero");    
    }
    return a / b;
}

// div(10,0);
console.log("Tarea 1");
console.log(div(10,2));

/*
Tarea 2

Hemos declarado un arreglo de números:
let numbers = [10, 40, 0, 20, 50];

Escribe un programa que, en un bucle, divida el número 
1000 entre elementos sucesivos del arreglo de números, 
mostrando el resultado de cada división. Para dividir 
los números, usa la función de la tarea anterior. Usa la 
sentencia try...catch para manejar una excepción 
lanzada en el caso de la división entre cero. Si se detecta 
una excepción de este tipo, el programa debe imprimir un 
mensaje apropiado (tomado de la excepción) y continuar su 
operación (división por elementos sucesivos del arreglo).
*/
console.log("\nTarea 2");

let numbers = [10, 40, 0, 20, 50];

let divNumbers = function(numbers){
    let  result;
    for(number of numbers){
        try {
            result =  div(1000, number);
        } catch (error) {
            result =  error.message;
        }
        console.log(result);
    }
}

divNumbers(numbers);



