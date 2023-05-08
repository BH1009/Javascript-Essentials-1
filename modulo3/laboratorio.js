/*
Escenario

Volvamos a nuestra lista de contactos. Después de algunos ajustes recientes
(es decir, el emplear un arreglo y objetos), en realidad comienza a parecerse a una lista.
Sin embargo, quedaba un problema bastante grave. 

El cambio de datos en la lista, como agregar un nuevo contacto, debe proporcionarse de 
inmediato en el código del programa. 
¿Qué sucede si queremos darle al usuario la posibilidad de ingresar los datos del contacto
agregado mientras se ejecuta el programa? Modifica el programa para agregar, 
al final de la lista, no el contacto, que se da en el código, sino el que el usuario 
dará durante la ejecución del programa. Usa el método prompt para hacer esto. 
Al final, muestra el primer y último contacto de la lista.
*/
let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "egestas@nonummyac.co.uk"
    }, 
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere@sed.com"
    },
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@vallis.edu"
    }
];

// escribe tu código aquí
//Creacion del nuevo contacto
let newContact = {
    name: "",
    phone: "",
    email: ""
};
//Recuperacion de campos 
let names = prompt("What is your name ?");
let phone = prompt("What is your phone number ?");
let email = prompt("What is your email ?");
//Los agregamos al objeto
newContact.name = names;
newContact.phone = phone;
newContact.email = email;

contacts.push(newContact);

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);