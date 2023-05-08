/*
Escenario

Usaremos las funciones para agregar un elemento más de 
funcionalidad. Los arreglos tienen un método sort que nos 
permite ordenar sus elementos. A este método, le pasamos una 
función que debe comparar dos elementos del arreglo y decidir 
cuál es más pequeño y cuál es más grande. Si el primer 
elemento es menor, la función devuelve un valor menor que 
cero, si son iguales devuelve cero, y si el primero es mayor, 
devuelve un valor mayor que cero. Por ejemplo, el arreglo:

let numbers = [10, 50, 40, 20];

se puede ordenar de manera ascendente:
numbers.sort(function (a, b) {
    let retVal = 0;
    if (a > b) {
        retVal = 1;
    } else {
        retVal = -1;
    }
    return retVal;
});

o simplemente:

numbers.sort((a, b) => a - b);

Da al usuario la opción de seleccionar una acción sort de la 
lista. Cuando se selecciona esta opción, el usuario debería poder 
especificar si desea ordenar los contactos por nombre, teléfono
o correo electrónico.
*/
let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.@nonummyac.co.uk"
    }, 
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, 
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }
];

let showContact = function (contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        // return (`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function (contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function (contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

let arrayNames = function (dataList){
    let field = [];
    for(let x of dataList){
        field.push(x.name);
    }
    
    return field;
}

let arrayPhones = function (dataList){
    let field = [];
    for(let x of dataList){
        field.push(x.phone);
    }
    return field;
}

let arrayEmails = function (dataList){
    let field = [];
    for(let x of dataList){
        field.push(x.email);
    }
    
    return field;
}

// const compare = (a,b) => a < b ? -1 : 1;

let sortBy = function(arr, dataList){
    for(let date of arr(dataList).sort()){
        console.log(date);
    }
}

console.log("Ordered by Contacts");
sortBy(arrayNames, contacts);
console.log("");
console.log("Ordered by Phones");
sortBy(arrayPhones, contacts);
console.log("");
console.log("Ordered by Emails");
sortBy(arrayEmails, contacts);

console.log(arrayPhones(contacts).sort(compare));
