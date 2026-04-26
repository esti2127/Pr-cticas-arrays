//Ejercicio 1:Obtener el primer elemento del array. 
// Enunciado: Dado un array, retorna el primer elemento del mismo.
let array = ["elem1","elem2","elem3"];

let primerElemento = array[0];

console.log(primerElemento);
//console.log(array);

//Ejercicio 2: Obtener el último elemento del array. 
// Enunciado: Dado un array, retorna el último elemento del mismo.

let ultimoElemento = array[2]

console.log(ultimoElemento)
//console.log(array);

//Ejercicio 3: Agregar un elemento al inicio del array.
// Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado.

let numerosTexto = ["uno", "dos", "tres"];

numerosTexto.unshift("cero");

console.log(numerosTexto);

//Ejercicio 4:Eliminar el primer elemento del array.
// Enunciado: Elimina el primer elemento de un array y devuelve el array resultante.

let colores= ["azul", "blanco", "amarillo"]

let primerColor = colores.shift();

console.log(primerColor);
console.log(colores);

//Ejercicio 5: Agregar un elemento al final del array.
// Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.

let prendasRopa = ["sudadera", "calcetines", "pantalones"]

prendasRopa.push("camiseta");

console.log(prendasRopa);

//Ejercicio 6: Eliminar el último elemento del array.
// Enunciado: Elimina el último elemento de un array y devuelve el array resultante.Cambiarlo!!!!Y el otro tambien.

let marcas = ["Apple", "Samsung", "Xiaomi"]

let ultimo = marcas.pop();

console.log(ultimo);

console.log(marcas);

//Ejercicio 7: Combinar dos arrays.
//Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.

let elementos = ["agua", "fuego", "aire"]

let planetas = ["jupiter", "saturno", "venus"]

let mezcla = elementos.concat(planetas);

console.log(mezcla);

//Ejercicio 8: Encontrar si un array incluye un elemento.
//Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.

let pintores = ["Degas", "Velazquez", "Rafael"];

console.log(pintores.includes("Anguissola"));
console.log(pintores.includes("Degas"));

//Ejercicio 9: Buscar el índice de un elemento.
//Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.

console.log(pintores.indexOf("Degas"));

//Ejercicio 10: Reemplazar un elemento en un array. 
//Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.

pintores.splice(1, 1, "Fontana");

console.log(pintores);

//Ejercicio 11: Sumar todos los elementos del array. 
//Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado.

let numbers = [1, 2, 3, 4];

let suma = numbers.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma); 

//Ejercicio 12: Multiplicar todos los elementos del array.
//Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.

var numeros = [1, 2, 3, 4, 5];

var multiplicados = numeros.map( x => x*2);

console.log(multiplicados)

//Ejercicio 13: Filtrar números mayores a un valor.
//Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.

const numeros2 = [3, 7, 8, 25];

const filtrarMayores = numeros2.filter((mayor) => mayor > 23);

console.log(filtrarMayores);

//Ejercicio 14: Verificar si todos los elementos son mayores a un número. //Cambiar y usar every(). 
//Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.

const mayores = num => num > 5

const numeros3 = [5, 7, 89, 99];

console.log(numeros3.every(mayores));

//Ejercicio 15: Obtener el primer elemento que cumple una condición.
//Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.

const found = numeros3.find((element) => element > 5);
console.log(found);

//Ejercicio 16: Imprimir cada elemento del array. 
//Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.

numeros3.forEach(elemento => console.log(elemento));

//Ejercicio 17:Crear un array con el doble de cada número
//Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.

var numeros4 = [34,16,67,88];

var dobles = numeros4.map(num => num*2);

console.log(dobles);

//Ejercicio 18: Convertir un array de nombres en mayúsculas
//Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas.

var nombres = ["laida", "izaro", "alaia"]

var capitalize = nombres.map(nombre => nombre.toUpperCase());

console.log(capitalize)



















