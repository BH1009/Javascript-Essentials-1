/**
 * @ErroresyExcepciones
 */

// let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);
/*El error es que entre los parametros estan separados por un espacio y falta una 'coma' ','*/

// let multipl = (a, b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);
/*El siguiente error es al hacer la referencia a la funcion el nombre no es correcto*/

// let multiply = (a, b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);

/**
try {
    //codigo a probar
} catch (error) {
    // código a ejecutar en caso de un error, que lanza una excepción
}
 */

// try {
//     let a = b;
// } catch (error) {
//     console.log(error); // -> ReferenceError: b is not defined
// }
// console.log("Hemos manejado la excepción"); // -> Hemos manejado la excepción


// try {
//     let a = 5;
//     console.log(a.length());
// } catch (error) {
//     console.log(error); // -> TypeError: a.length is not a function
// }
// console.log("Hemos manejado la excepción"); // -> Hemos manejado la excepción

//Instance of 
// let a = -2;
// try {
//     a = b;
// } catch (error) {
//     if (error instanceof ReferenceError) {
//         console.log("Reference error, restablecer a a -2"); // -> Reference error, restablecer a a -2
//         a = -2;
//     } else {
//         console.log("Otro error - " + error);
//     }
// }
// console.log(a); // -> -2


/*
try {
    // código a probar
} finally {
    // esto siempre se ejecutará
}
*/

//try-catch
// a = 10;
// try {
//     a = 5;
// } finally {
//     console.log(a); // -> 5
// }
// console.log(a); // -> 5

//try-catch-finally
// a = 10;
// try {
//     a = b;  // ReferenceError
// } catch (error) {
//     console.log("¡Un error!"); // -> ¡Un error!
// } finally {
//     console.log("¡Finalmente!"); // -> ¡Finalmente!
// }
// console.log(a); // -> 10

//throw
function factorial(n) {
    if (n > 20) {
        throw new RangeError("Valor máximo 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Valor máximo 20
