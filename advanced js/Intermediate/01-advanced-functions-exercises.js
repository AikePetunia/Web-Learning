/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

function createReturn(name) {
	return logReturn(name);
}

function logReturn(name) {
	console.log(`funcion que retorne a otra funcion ${name}`);
}

createReturn("aike");

// 2. Implementa una función currificada que multiplique 3 números

function adda(a) {
	return function addb(b) {
		return function addc(c) {
			return a * b * c;
		};
	};
}

const firstMul = adda(3); // esto solo define a
console.log(firstMul(3)(4)); // termina de pasar b c
const thMul = adda(2)(3); // pasa a, b
console.log(thMul(5)); // termina de pasar c
const sndMul = adda(2)(2)(2); // pasa a, b, c
console.log(sndMul); // imprime todo

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function powerOf(num, pot) {
	if (pot == 0 || num == 1) {
		return 1;
	} else if (pot < 1) {
		return num;
	} else {
		return num * powerOf(num, pot - 1);
	}
	// la potencia es cuantas veces tengo q multiplicar el mismo numero
	// la cantidad de veces q lo multiplico decrementa, no la potencia.
}

console.log(powerOf(4, 3));
console.log(powerOf(1, 2));
console.log(powerOf(0, 5));
console.log(powerOf(50, 0));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para
// increment(), decrement() y getValue(), utilizando un closure para mantener el estado

console.log("ej 4");
function createCounter(initial) {
	return {
		increment: function () {
			return ++initial;
		},
		decrement: function () {
			return --initial;
		},
		getValue: function () {
			return initial;
		},
	};
}

const counter = createCounter(3); // solo usamos este initial y no inicializamos más nada
console.log(counter.increment()); //4
console.log(counter.increment()); //5
console.log(counter.increment()); //6
console.log(counter.decrement()); // 5
console.log(counter.getValue()); // 5

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest)
// y luego multiplique el resultado por multiplier

/* Auxilar ej 5 y 6*/
function sum(...numbers) {
	let result = 0;
	for (let number of numbers) {
		result += number;
	}
	return result;
}

console.log("ej 5");

function sumManyTimes(multiplier, ...numbers) {
	let result = sum(...numbers);
	return result * multiplier;
}

console.log(sumManyTimes(2, 5, 4, 5));
console.log(sumManyTimes(3, 1, 1, 1));
console.log(sumManyTimes(5, 3, 3, 3));

// 6. Crea un Callback que se invoque con el resultado de la suma
// de todos los números que se le pasan a una función

console.log("ej 6");

function invRes(numbers, callback) {
	const data = sum(...numbers);
	callback(data);
}

function printResult(result) {
	console.log("resultado ej 6", result);
}

invRes([1, 2, 3, 4, 5], printResult); // 15

/*
Flujo de lectura:
pasa numeros, pasa la funcion.
cuando se llama la funcion dentro de invres, pasa el result que espera la funcion
imprime el resultado.
(116 -> 107 -> 109 -> 112)
*/

// 7. Desarrolla una función parcial

console.log("ej 7");
function useless(a) {
	return function (b, c) {
		return a * b * c;
	};
}

const partFunction = useless(4);
console.log(partFunction(3, 5));

// 8. Implementa un ejemplo que haga uso de Spread
console.log("ej 8");

const example = [3, 4, 5];
function spreedExample(a, b, c) {
	return a * b * c;
}

console.log(
	"ejemplo de spreed ('con un ...example recorre todos los numeros y no ponemos number[n]'",
	spreedExample(...example)
);

// 9. Implementa un retorno implícito
console.log("ej 9");

const addAndMultiply = (a, b, c, d) => a * b + c * d;
console.log(addAndMultiply(1, 2, 3, 4));

// 10. Haz uso del this léxico
console.log("ej 10");

function thisLexico() {
	return {
		// return as a object for using this
		name: "Venus",
		age: "19",
		sayMyName: function () {
			return `${this.name}, your are got damn right`;
		},
		sayMyAge: function () {
			return `${this.age} same here`;
		},
	};
}

const functionCall = thisLexico();
console.log(functionCall.sayMyAge());
console.log(functionCall.sayMyName());
