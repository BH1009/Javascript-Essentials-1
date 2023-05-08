/*

Juguemos a la floristería. Declara seis variables, recordando nombrarlas según su propósito:

*el precio de una sola rosa (8) y el número de rosas que tienes (70)
*el precio de un solo lirio (10) y el número de lirios que tienes (50)
*el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)
*/
 let precio_rosa = 8;
 let num_rosa = 70;

 let precio_lirio = 10;
 let num_lirio = 50;

 let precio_tulipan = 2;
 let num_tulipan = 120;

 let val_rosas = precio_rosa * num_rosa;
 let val_lirio = precio_lirio * num_lirio;
 let val_tulipan = precio_tulipan * num_tulipan;

 let total = val_rosas + val_lirio + val_tulipan;

console.log("Rosa: " + "precio unitario: " + precio_rosa + " cantidad: " + num_rosa + " valor: " + val_rosas);
console.log("Lirio: " + "precio unitario: " + precio_lirio + " cantidad: " + num_lirio + " valor: " + val_lirio);
console.log("Tulipan: " + "precio unitario: " + precio_tulipan + " cantidad: " + num_tulipan + " valor: " + val_tulipan);
console.log("Total: " + total)

/*
Tarea 2

Modifica el código del ejemplo anterior. Supón que los precios de las flores serán constantes (no cambiarán). 
Declara e inicializa las variables restantes de la misma manera que en el ejemplo anterior. 
Muestra toda la información recopilada en la consola. Ahora disminuye el número de rosas en 20 y el de lirios en 30. 
Vuelve a mostrar toda la información recopilada en la consola.
*/
const p_rosa = 8;
let n_rosa = 50;

const p_lirio = 10;
let n_lirio = 20;

const p_tulipan = 2;
let n_tulipan = 120;

let v_rosas = p_rosa * n_rosa;
let v_lirio = p_lirio * n_lirio;
let v_tulipan = p_tulipan * n_tulipan;

let t = v_rosas + v_lirio + v_tulipan;

console.log("Rosa: " + "precio unitario: " + p_rosa + " cantidad: " + n_rosa + " valor: " + v_rosas);
console.log("Lirio: " + "precio unitario: " + p_lirio + " cantidad: " + n_lirio + " valor: " + v_lirio);
console.log("Tulipan: " + "precio unitario: " + p_tulipan + " cantidad: " + n_tulipan + " valor: " + v_tulipan);
console.log("Total: " + t)
