/*
Datos Primitivos

*1 Escribe un fragmento de código que creará variables y las inicializará con valores Boolean, Number, BigInt, String y tipos
undefined utilizando (siempre que sea posible) literales y funciones constructoras.

*2 Imprime todos los valores y todos los tipos de esos valores usando console.log. Intenta usar la interpolación de cadenas para 
mostrar el valor y el tipo al mismo tiempo con una sola llamada a console.log, por ejemplo, en el siguiente formato: 1000 [número].

*3 Realiza una cadena de conversiones: crea un Boolean a partir de un BigInt creado a partir de un Number que se creó a partir de un String.
Comienza con el valor "1234". ¿Es posible?

*4 Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. Pruébalo para todos los tipos de datos primitivos.

*5 Intenta sumar dos valores de diferentes tipos y verifica los resultados.

*6 Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 (sin eliminar las comillas alrededor del 1)
*/

//1
let number = 10;
let string = "Cadena";
let bool = true;
let bool2 = 0;
let bignum = 10000n;
let notnumber = NaN;
let nothing = null;
let und = undefined;

console.log(number);
console.log(string);
console.log(bool);
console.log(bool2);
console.log(bignum);
console.log(notnumber);
console.log(nothing);
console.log(und);
console.log("");

//2
console.log(`${number} es ${typeof number}` , "\n" ,
`${string} es ${typeof string}` , "\n" ,
`${bool} es ${typeof bool}` , "\n" ,
`${bool2} es ${bool2}` , "\n" ,
`${bignum}n es ${typeof bignum}` , "\n" ,
`${notnumber} es ${typeof notnumber}` , "\n" ,
`${nothing} es ${typeof nothing}` , "\n" ,
`${und} es ${typeof nothing}`);
console.log("");

//3
let cadena = "1234";
console.log(`${cadena} es ${typeof cadena}`);
let numero = Number(cadena);
console.log(`${numero} es ${typeof numero}`);
let numeroGrande = BigInt(numero);
console.log(`${numeroGrande} es ${typeof numeroGrande}`);
let booleano = Boolean(numeroGrande);
console.log(`${booleano} es ${typeof booleano}`);
console.log("");

//4
let agregar1 = cadena + string;
let agregar2 = numero + number; 
console.log(`${agregar1} es ${typeof agregar1}`);
console.log(`${agregar2} es ${typeof agregar2}`);
console.log("")

//5
let suma1 = number + Number(cadena);
let suma2 = numeroGrande + BigInt(bool2);
console.log(`${suma1} es ${typeof suma1}`);
console.log(`${suma2} es ${typeof suma2}`);
console.log();

//6
const str1 = 42 + Number("1");
console.log(str1);
