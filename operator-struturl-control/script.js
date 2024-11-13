let num1 = 4
let num2 = 7

// arithmetic operator 

console.log(num1 + num2) // sum
console.log(num1 - num2) // subtration
console.log(num1 * num2) // multication
console.log(num1 / num2) // divicion
console.log(num1 % num2) // residue
console.log(num1 ++) // incremet
console.log(num1 --) //decremet


// operator comparation

console.log(num1 == num2) //equal
console.log(num1 != num2) // not equal
console.log(num1 === num2) // strictly equal
console.log(num1 !== num2) // strictly not equal
console.log(num1 > num2) // greater than
console.log(num1 >= num2) // greater than or equal
console.log(num1 < num2) // less than
console.log(num1 <= num2) // less than or equal

// operator bit to bit

let a = 8
let b = 0

console.log(a & b) // AND bit a bit: 0010 (out: 2)
console.log(a | b) // OR bit a bit: 0111 (out: 7)
console.log(a ^ b) // XOR bit a bit: 0101 (out: 5)
console.log(~a) // NOT bit a bit: 1001 (in two's complement, out: -7)
console.log(a << 1) // Shift left: 1100 (out: 12)
console.log(a << 1) // Right shift with sign: 0011 (out: 3)
console.log(a >>> 1) // Unsigned right shift: 0011 (output: 3) 

// Operadores logical
let p = 8;
let q = 3;

let result1 = (p > q) && (q > 0);  // true && true => true
console.log(result1);  // out: true

let result2 = (p < q) || (q > 0);  // false || true => true
console.log(result2);  // out: true

let result3 = !(p < q);  // !false => true
console.log(result3);  // out: true

let m = false;
let n = true;
let o = false;

let result4 = m || n && o;  // false || true && false => false || false => false
console.log(result4);  // out: false

let result5 = !(m || (n && o));  // !(false || (true && false)) => !(false || false) => !false => true
console.log(result5);  // out: true


// Operator string
let r = 'JavaScript'
console.log("Hola mundo desde " + r); // Operador de concatenación

let s = 'Java'
s += 'Script' // Operador de concatenación abreviada
console.log(s);

// Operador condicional (Ternario)
let edad = 18
let resultado = edad >= 18 ? 'Es mayor de edad.' : 'Es menor de edad.'
console.log(resultado);

// Condicional
if (edad >= 18) {
    console.log('Eres mayor de edad.');
  } else {
    console.log('Eres menor de edad.');
  }
  
  // Bucle for
  let mult = 5;
  for (let n = 1; n <= 12; n++) {
    console.log(`${mult} x ${n} = ${mult * n}`);
  }
  
  // Bucle forEach
  let frutas = ['manzana', 'banana', 'cereza', 'durazno', 'fresa', 'kiwi', 'mango', 'naranja', 'pera', 'piña'];
  console.log('########## forEach ##########');
  frutas.forEach(fruta => {
    console.log(fruta);
  })
  
  // Bucle for...in
  console.log('########## for...in ##########');
  for (let fruta in frutas) {
    console.log(frutas[fruta]);
  }
  
  // Bucle for...of
  console.log('########## for...of ##########');
  for (let fruta of frutas) {
    console.log(fruta);
  }
  
  // Bucle while
  let num = 1
  while (num <= 10) {
    if (num % 2 === 0) {
      console.log(`${num} es par.`);
    }
    num++
  }
  
  // Bucle Do While
  num = 1
  do {
    if (num % 2 === 0) {
      console.log(`${num} es par.`);
    }
    num++
  } while (num <= 10);
  
  // Switch
  let mes = new Date().getMonth() + 1
  
  switch (mes) {
    case 1:
      console.log('Enero');
      break;
    case 2:
      console.log('Febrero');
      break;
    case 3:
      console.log('Marzo');
      break;
    case 4:
      console.log('Abril');
      break;
    case 5:
      console.log('Mayo');
      break;
    case 6:
      console.log('Junio');
      break;
    case 7:
      console.log('Julio');
      break;
    case 8:
      console.log('Agosto');
      break;
    case 9:
      console.log('Septiembre');
      break;
    case 10:
      console.log('Octubre');
      break;
    case 11:
      console.log('Noviembre');
      break;
    case 12:
      console.log('Diciembre');
      break;
    default:
      nombreDelMes = 'Número de mes no válido';
  }

  /*
  Crea un programa que imprima por consola todos los números comprendidos
  entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
*/

for(let n = 10; n <= 55; n++){
    if (n % 2 === 0){
        if (n === 16) continue; {
            if (n % 3 === 0) continue; {
                console.log(n)
            }
        }
    } 
}


for (let n = 10; n <= 55; n++) {
    if (n % 2 === 0 && n !== 16 && n % 3 !== 0) {
      console.log(n);
    }
  }

  