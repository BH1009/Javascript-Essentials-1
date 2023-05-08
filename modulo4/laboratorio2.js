/*
Escenario

Podemos mejorar un poco nuestro programa de lista de
contactos mediante el uso de bucles. Ahora puedes intentar
mostrar no solo el primer o último contacto, sino todos los
contactos de la lista, independientemente de su número.

Además, intenta encerrar todo el programa en un bucle para
que al usuario se le pregunte repetidamente qué quiere hacer. El
usuario puede optar por:

    Mostrar el primer contacto (primero)
    Mostrar el último contacto (último)
    Mostrar todos los contactos (todos)
    Añadir un nuevo contacto (nuevo)
    Salir del programa (salir)

Después de ejecutar la acción seleccionada, el programa le dará
la oportunidad de elegir nuevamente. El programa debe finalizar
las acciones solo después de que el usuario dé un comando
específico, por ejemplo salir.
*/
let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

// let newContact = {
//     name: "",
//     phone: "",
//     mail: ""
// }

let last = contacts.length - 1;
let opcion = 0;
while(opcion != 5){
    opcion = prompt(`\tContactos\n
    1)Mostrar el primer contacto\n
    2)Mostrar el ultimo contato\n
    3)Mostrar todos los contactos\n
    4)Agregar un nuevo contacto\n
    5)Salir\n`);
    switch(opcion){
        case "1":
            console.log(contacts[0].name, contacts[0].phone, contacts[0].email);
            break;
        case "2":
            console.log(contacts[last].name, contacts[last].phone, contacts[last].email);
            break;
        case "3":
            for(let contact of contacts){
                console.log(contact.name, contact.phone, contact.email);
            }
            break;
        case "4":
            let name = prompt("Cual es el nombre del contacto ?");
            let phone = prompt("Cual es su numero ?");
            let email = prompt("Cual es su correo ?");
            if(name == "" || phone == "" || email == ""){
                alert("No se pudo registrar el contacto");
            }
            else{
                // newContact.name = name;
                // newContact.phone = phone;
                // newContact.email =  email;
                // contacts.push(newContact);
                contacts.push({
                    name: name,
                    phone: phone,
                    email: email
                });
            }
            // let total = contacts.length;
            // alert(total);
            break;
        case "5":
            alert("Saliendo");
            break;
        default:
    }
}