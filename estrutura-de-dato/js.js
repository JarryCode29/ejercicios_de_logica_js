function panelPrincipal() {
    const listContact = new Map([["Daniel", "29293018309"]]);

    var is_on = true;
    while (is_on) {

        alert("Agenda de contactos");

        let numberOption = prompt(
            `Selecciona la opción de tu preferencia: 
        0: Ver lista de contactos.
        1: Buscar un contacto.
        2: Agregar un nuevo contacto. 
        3: Actualizar un contacto.
        4: Eliminar un contacto.
        5: Salir.`
        );

        let name = null;
        let phone = null;

        switch (numberOption) {
            case "0":
                for (let [key, value] of listContact) {
                    alert(`Nombre: ${key}, Teléfono: ${value}`);
                }
                break;
            case "1":
                name = prompt(`Introduce el nombre del contacto que buscas`);
                if (listContact.has(name)) {
                    let phoneNumber = listContact.get(name);
                    alert(`El contacto ${name} tiene asignado el número ${phoneNumber}`)
                } else {
                    alert(`El contacto ${name} no existe.`);
                }
                break;
            case "2":
                name = prompt(`Escribe el nombre del nuevo contacto`);
                phone = parseInt(prompt(`Escribe el número del nuevo contacto`));
                if (/^\d{10,11}$/.test(phone)) {
                    listContact.set(name, phone);
                    alert(`El contacto ${name} fue agregado con éxito`);
                } else {
                    alert("Debes introducir un número de télefono de 10 u 11 dígitos")
                }
                break;
            case "3":
                name = prompt(`Introduce el nombre del contacto que deseas actualizar.`);
                if (listContact.has(name)) {
                    phone = parseInt(prompt(`Escriba el nuevo número del contacto ${name}`));
                    if (/^\d{10,11}$/.test(phone)) {
                        listContact.set(name, phone);
                        alert(`El contacto ${name} fue actualizado`);
                    } else {
                        alert(`No se pudo actualizar al contacto ${name}, favor de verificar el número de teléfono, este debe contener de 10 a 11 dígitos.`)
                    }
                }
                break;
            case "4":
                name = prompt(`Introduce el nombre del contacto que deseas eliminar`);
                if (listContact.has(name)) {
                    listContact.delete(name);
                    alert(`Contacto eliminado exitosamente`)
                } else {
                    alert(`El contacto ${name} no existe.`);
                }
                break;
            case "5":
                alert("Saliendo de la agenda.")
                is_on = false;
                break;
            default:
                alert("Selección incorrecta, selecciona una opción del 0 al 5.")
                break;
        }
    }
}
panelPrincipal();