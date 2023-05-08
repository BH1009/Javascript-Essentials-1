/*
Escenario

Durante la última modificación del programa con la lista de contactos, permitimos que el usuario
agregara un nuevo contacto con los datos ingresados por el usuario mientras se ejecuta el programa.
Vayamos un paso más allá: intenta modificar el programa para que el usuario pueda elegir lo que 
quiere hacer con la lista. Las opciones serán:

    Mostrar el primer contacto (primero)
    Mostrar el último contacto (último)
    Añadir un nuevo contacto (nuevo)

Al agregar un nuevo contacto, verifica si el usuario ha ingresado todos los datos necesarios.
Si falta al menos uno de los tres valores (nombre, teléfono o correo electrónico), no se agrega 
el contacto.
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

let newContact = {
    name: "",
    phone: "",
    mail: ""
}

let last = contacts.length - 1;
let opcion = prompt(`\tContactos\n
1)Mostrar el primer contacto\n
2)Mostrar el ultimo contato\n
3)Agregar un nuevo contacto\n`);
switch(opcion){
    case "1":
        console.log(contacts[0].name, contacts[0].phone, contacts[0].email);
        break;
    case "2":
        console.log(contacts[last].name, contacts[last].phone, contacts[last].email);
        break;
    case "3":
        let name = prompt("Cual es el nombre del contacto ?");
        let phone = prompt("Caul es el numero ?");
        let email = prompt("Cual es su correo ?");
        if(name == "" || phone == "" || email == ""){
            alert("No se pudo registrar el contacto");
        }
        else{
            newContact.name = name;
            newContact.phone = phone;
            newContact.email =  email;
            contacts.push(newContact);
        }
        let total = contacts.length;
        alert(total);
        break;
    default:
        alert("Esa opcion no existe!");
}