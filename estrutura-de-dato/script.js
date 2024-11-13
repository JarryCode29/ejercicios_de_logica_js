// 1. Arrays (listas ordenadas que permiten duplicados)
let array = [3, 1, 4, 1, 5];
// Insertar un elemento
array.push(9);
// Actualizar un elemento
array[0] = 10;
// Borrar un elemento (el primer 1 encontrado)
array.splice(array.indexOf(1), 1);
// Ordenar el array
array.sort((a, b) => a - b);
console.log("Array:", array);

// 2. Objetos (pares clave-valor)
let obj = { a: 3, b: 1, c: 4 };
// Insertar un elemento
obj.d = 5;
// Actualizar un elemento
obj.a = 10;
// Eliminar un elemento
delete obj.b;
// Ordenar por clave (creando un nuevo objeto)
let sortedObj = Object.keys(obj).sort().reduce((acc, key) => {
  acc[key] = obj[key];
  return acc;
}, {});
console.log("Objeto ordenado:", sortedObj);

// 3. Sets (no permiten duplicados)
let set = new Set([3, 1, 4, 1, 5]);
// Insertar un elemento
set.add(9);
// Eliminar un elemento
set.delete(1);
// Convertir a array para ordenar y mostrar como conjunto ordenado
let sortedSet = Array.from(set).sort((a, b) => a - b);
console.log("Set ordenado:", sortedSet);

// 4. Maps (pares clave-valor, permiten claves de cualquier tipo)
let map = new Map([['a', 3], ['b', 1], ['c', 4]]);
// Insertar un elemento
map.set('d', 5);
// Actualizar un elemento
map.set('a', 10);
// Eliminar un elemento
map.delete('b');
// Ordenar por clave (convirtiendo a array y luego a Map)
let sortedMap = new Map([...map.entries()].sort());
console.log("Map ordenado:", Array.from(sortedMap));



/* DIFICULTAD EXTRA (opcional):
* Crea una agenda de contactos por terminal.
* - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
* - Cada contacto debe tener un nombre y un número de teléfono.
* - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
*   y a continuación los datos necesarios para llevarla a cabo.
* - El programa no puede dejar introducir números de teléfono no númericos y con más
*   de 11 dígitos (o el número de dígitos que quieras).
* - También se debe proponer una operación de finalización del programa.
*/

function agenda(){
    const listaDeContacto = new Map([["Juancito","8098892345"]])

    let activo = true
    while (activo) {
        // muestro la alerta para inicial la operacion
        alert("Agenda de Contacto")

        // cuadro de opciones 
        let numeroDeOpciones = prompt(`
                 Selecciona la opción de tu preferencia: 
        0: Ver lista de contactos.
        1: Buscar un contacto.
        2: Agregar un nuevo contacto. 
        3: Actualizar un contacto.
        4: Eliminar un contacto.
        5: Salir.
            
            `)

            let nombre = null
            let telefono = null

            switch (numeroDeOpciones) {
              case "0":
                for (let [key, value] of listaDeContacto) {
                  alert(`Nombre: ${key}, Telefono: ${value}`)                  
                }
                break;
              case "1":
                nombre = prompt(`Introduce el nombre del contacto`)
                if (listaDeContacto.has(nombre)) {
                  let numeroTelefono = listaDeContacto.get(nombre)
                  alert(`El contacto ${nombre}, Tiene asignado el número ${numeroTelefono}`)
                } else {
                  alert( `El contacto ${nombre} no existe.`)
                }
              break
                  
              case "2":
                  nombre = prompt('Introduce en nombre del contacto.')

                  telefono = parseInt(prompt('Introduce el numero de telefono.'))
                  if (/^\d{10,11}$/.test(telefono)){
                    listaDeContacto.set(nombre , telefono)
                    alert(`El contacto ${nombre} y numero ${telefono} fue agregado.`)
                  }else{
                    alert('Debe de agregar un numero de telefono de 10 digisto 10.')
                  }

              break
              case "3":
                nombre = prompt('Introduce el nombre de contacto que deseas actualizar.')
                telefono = parseInt(prompt('Introduce el numero de telefono que deseas actualizar'))

                if (listaDeContacto.has(nombre)) {
                  telefono = parseInt(prompt(`Introduce el numevo numero del contacto ${nombre}.`))
                  if(/^\d{10,11}$/.test(telefono)){
                    listaDeContacto.set(nombre, telefono)
                    alert(`El contacto ${nombre} fue actualizado.`)
                  }else{
                    alert`No se pudo actualizar el contacto ${nombre} favor verificar que el numero de telefono contenga 10 digitos`
                  }

                }
              break
              case "4":
                nombre = prompt(`Introdusca el numero de contacto que desea eliminar`)
                if(listaDeContacto.has(nombre)){
                  listaDeContacto.delete(nombre)
                  alert('El contacto fue borrado correctamente')
                }
              break
              case "5":
                alert(" Saliendo de la agenda...")
                activo = false
              break

              default:
                alert("Seleción incorrecta, selecione un numero del 0 al 5.")
                break;
            }
    }

}

agenda();