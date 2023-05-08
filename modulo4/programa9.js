/*
Tarea 1

Escribe un script que le pida al usuario que ingrese un número.
Muestra el mensaje "¡Bingo!" cuando el número sea mayor que 90 
pero menor que 110, de lo contrario muestra 
el mensaje: "¡Fallaste!". Utiliza la sentencia if.
*/
let number = prompt("Elije un numero", 0);
if(number >=  90 || number <= 110){
    alert("Bingo!");
}
else{
    alert("Fallaste");
}

/*
Tarea 2

Reescribe el código anterior, reemplazando el if con un operador condicional ternario.
*/
let message = (number >= 90 || number <=110) ? "Bingo!" : "Fallaste!";
alert(message);

/*
Tarea 3

Escribe una aplicación de calculadora simple. Solicite al usuario la siguiente entrada,
uno por uno: dos números y un carácter que representa una operación matemática de "+", "-", " *", o "/". 
Si la entrada del usuario es válida, calcula el resultado y muéstralo al usuario. 
Si la entrada del usuario no es válida, muestra un mensaje que informa al usuario que se ha producido un error. 
Recuerda que el valor devuelto por la función prompt es del tipo cadena. 
Puedes usar el método Number.isNaN para verificar si se obtiene el número correcto después de la conversión. 
Por ejemplo, llamar a Number.isNaN(10) devolverá false, mientras que Number.isNaN(NaN) devolverá true.
*/
alert("Calculadora simple");
let number1 = prompt("Elije un numero");
let number2= prompt("Elije otro numero");
let operand = prompt("Elija el operando +, -, *, / , **");
let result;
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