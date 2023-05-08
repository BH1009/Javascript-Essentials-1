/*
Escenario

Nuestro programa ha crecido bastante, por lo que es un poco 
difícil de leer. Es especialmente visible en la instrucción switch, 
donde se incluye la mayor parte de la lógica. Trata de organizar
el código de tu programa usando funciones. Define y llama a tres
funciones en los lugares apropiados:

-showContact: la función debe tomar dos argumentos; el 
primero es la lista de contactos y el segundo es el número
de índice del contacto a mostrar; dentro de la función, 
verifica si se pasan los argumentos correctos, es decir, si los 
contactos son un arreglo (utiliza la construcción 
instanceofArray para esto).

-showAllContacts: la función debe tomar un argumento, 
la lista de contactos; dentro de la función, verifica si el
argumento dado es un arreglo.
    
-addNewContact: la función debe tomar cuatro 
argumentos, una lista de contactos y los datos del nuevo 
contacto, es decir: nombre, teléfono y número; antes de 
agregar un nuevo contacto, verifica si el argumento pasado
es un arreglo y si los datos del nuevo contacto tienen algún 
valor.
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


// function showContact(contactList, index){
//     if(!(contactList instanceof Array) ){
//         //return "Error no es un arreglo!";
//         console.log("Error no es un arreglo!");
//     }
//     else if(index > contactList.length){
//         //return "Error el contacto no existe";
//         console.log("Error el contacto no existe");
//     }
//     else{
//         // let contact = `${contactList[index].name} ${contactList[index].phone}  ${contactList[index].email}`;
//         // return contact;
//         console.log(`${contactList[index].name} ${contactList[index].phone}  ${contactList[index].email}`);
//     }
// }
let showContact = function (contactList, index){
    if(!(contactList instanceof Array) ){
        //return "Error no es un arreglo!";
        console.log("Error no es un arreglo!");
    }
    else if(index > contactList.length){
        //return "Error el contacto no existe";
        console.log("Error el contacto no existe");
    }
    else{
        // let contact = `${contactList[index].name} ${contactList[index].phone}  ${contactList[index].email}`;
        // return contact;
        console.log(`${contactList[index].name} ${contactList[index].phone}  ${contactList[index].email}`);
    }
}
console.log("Function showContact");
// console.log(showContact(contacts, 1));
showContact(contacts, 1);

function showAllContacts(contactList){
    if(!(contactList instanceof Array)){
        console.log("Error no es un arreglo");
    }
    else{
        for(let contact of contacts){
            console.log(contact.name, contact.phone, contact.email);
        }
    }
}
console.log("Function showAllContact");
showAllContacts(contacts);

function addContact(contactList, name, phone, email){
    if(!(contactList instanceof Array)){
        console.log("Error no es un arreglo");
    }
    else if((name == "") && (phone == "") && (email == "")){
        console.log("Error Faltan datos!");
    }
    else{
        let pastContactList = contactList.length;
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
        console.log("Contacto agrgado existosamente");
        // console.log(`Total anterior de contatctos ${pastContactList}`);
        // console.log(contacts.length);

    }
}

console.log("Function AddContact");
addContact(contacts, "Brayan Hernandez", "(52)3353316528", "hbrayan148@correo.com");
