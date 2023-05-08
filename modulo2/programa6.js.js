//Tareas Objetos 

/*
Tarea 1

Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. El objeto debe tener tres campos:

estación inicial (el nombre clave es from, y como valor, proporciona el nombre de la estación más cercana en tu área)
estación final (el nombre clave es to, y como valor, dar cualquier otra estación dentro de 100 km)
el precio del boleto (el nombre clave es price, y como valor, proporciona la cantidad que te gustaría pagar por este boleto)

El objeto debe crearse usando llaves {}, en los que todos los campos se enumerarán inmediatamente. Luego muestra los valores 
de todos los campos del ticket en la consola.
*/
console.log("Tarea 1");
let ticket = {
	from: "Berlin",
	to: "Potsdam",
	price: 11
};
console.log(`Ticket from: ${ticket.from}`);
console.log(`Ticket to: ${ticket.to}`);
console.log(`Ticket price: ${ticket.price}`);

/*
Tarea 2

Declara un objeto vacío y guárdalo en la variable person. Usando la notación de punto, agrega los campos name
y surname al objeto ingresando tus datos como valores. Intenta mostrar los campos individuales en la consola.
 */
console.log("\nTarea 2");
let person = {};
person.name = "Mary";
person.surname = "Stuart";
console.log(`${person.name} ${person.surname}`);

//Arreglos

/*
Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista de ellos.
Almacenaremos tres datos de cada libro: el título, el autor y el número de páginas:

    Speaking JavaScript, Axel Rauschmayer, 460;
    Programming JavaScript Applications, Eric Elliott, 254;
    Understanding ECMAScript 6, Nicholas C. Zakas, 352.

Crea un arreglo de tres objetos que representen los libros. Cada objeto debe tener las siguientes propiedades: title, author, pages
*/
console.log("\nTarea 3");
let books = [{
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliot",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];
console.log(books);

/*
Tarea 4

Agregar un nuevo libro a la colección: Learning JavaScript Design Patterns, por Addy Osmani, 254 páginas. 
Usa el método apropiado para adjunta el libro al final del arreglo. Muestra la longitud del arreglo y, a su vez,
todos los nombres de los libros en la colección.
*/
console.log("\nTarea 4");
let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};
books.push(newBook);
console.log(books);

/*
Tarea 5

Utiliza el comando slice para copiar los dos últimos libros al nuevo arreglo.
*/
console.log("\nTarea 5");
let selectedBooks = books.slice(-2);
console.log(selectedBooks);

/*
Tarea 6

El primer libro de la colección se pierde en circunstancias inexplicables. Ya has aceptado la pérdida, 
así que ahora elimínalo del arreglo. ¿Cuál método usarás para este propósito? Muestra la longitud del 
arreglo y todos los nombres de los libros de la colección a su vez. 
*/
console.log("\nTarea 6");
books.shift(0);
console.log(books);

/*
Tarea 7

Muestra la suma de las páginas de todos los libros de la colección.
*/
console.log("\nTarea 6");
let sum  = books[0].pages + books[1].pages + books[2].pages;
console.log(sum)
