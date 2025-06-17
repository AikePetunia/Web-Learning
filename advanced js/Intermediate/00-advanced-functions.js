// -> Ciudadanos de primera clase
// tipo de funciones que se pueden asignar a variables, pasar como argumentos

const greet = function (name) {
	console.log(`Hola, ${name}`);
};

greet("Aike");

// notemos que acá se esta pasando como parametro una función
function processGreeting(greetFunction, name) {
	greetFunction(name);
}

processGreeting(greet, "venuss");

// También se pueden retornar funciones desde otras funciones

function returnGreeting() {
	return greet;
}
// y asignar a variables funciones retornadas
const greet2 = returnGreeting();
greet2("aike milanesa");

// Arrow functions avanzadas

// -> Retorno implícito/temprano.
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// -> this.léxico
// notar que tiene la estructura de un objecto
// hacer hover en this para entender la referencia
const handler = {
	name: "aike",
	// this hace refencia a los atributos del objeto handler
	// por lo tanto, this.name es "aike"
	greeting: function () {
		console.log(`Hola, ${this.name}`);
	},
	// si se usa una arrow function, this hace referencia al contexto global
	arrowGreeting: () => {
		console.log(`Hola, ${this.name}`);
	},
};

// los ; acá son necesarios para la execucion de las iife despues, para terminar una ejecucion.
handler.greeting();
handler.arrowGreeting();

// -> IIFE Inmediatle invoce function expression (Expresión de Función Invocada Inmediatamente)
// "funciones anonimas, de llamado inmediato"
// Se usan para crear un ámbito local y evitar la contaminación del ámbito global
// tratar de usar en un inicio de funcion, ya que utilizan el contexto global ( y tambine lo que está arriba)
// por lo tanto si las invocamos despues de unas lineas, sin ninguna precaucion o similar, saltará error

(function () {
	console.log("IIFE clásico");
})();

// con los () de final de cada funcion se invoca.

(() => {
	console.log("IIFE con arrow function");
})();

// -> Parámetros Rest (...)
// cuando no sabemos cuántos parámetros vamos a recibir, podemos usar el operador rest
// que nos permite recibir un número variable de argumentos como un array.

function sum(...numbers) {
	let result = 0;
	for (let number of numbers) {
		result += number;
	}
	return result;
}
// acá se "empaqueta un array"
console.log(sum(1, 2, 3, 4, 5)); // el arreglo que estamos pasando como ...numbers
console.log(sum(10, 15));

// -> Operador Spread (...)
// expande un array en lugares donde se esperan múltiples elementos.
// se le llama asi y no rest porque se usa para expandir un array en lugar de recibirlo como un argumento.
// diferenciados normalmente por el contexto en el que se usan.

const numbers = [1, 2, 3];
function sumWithSpread(a, b, c) {
	return a + b + c;
}

console.log(sumWithSpread(1, 2, 3)); // Sin Spread
// acá se "desempaqueta un array"
console.log(sumWithSpread(...numbers)); // Con Spread
// reemplaza numbers[0], numbers[1], numbers[2] por 1, 2, 3 respectivamente. Además puede recibir mas numeros de los que puede recibir la funcion, pero los ignorará.
// si son menos, dara NaN

//  -> Closures (Clausuras)
// una funcion interna a otra funcion va a acceder a variables de la funcion externa.
// encapsula los datos Nadie por fuera puede ver ni modificar la variable counter.
function createCounter() {
	let counter = 0;
	return function () {
		counter++;
		console.log(`Contador: ${counter}`);
	};
}

// la funcion interna, (la del return), accede a la variable counter (contexto de la funcion externa)
// incluso manteniendo el estado anterior que tenia

// ya que acá estamos ejecutado la funcion que devuelve
const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4

/*
createCounter()
    |
    --> crea una caja con:
         - counter = 0
         - función interna que tiene acceso a esa caja
    |
    --> devuelve esa función interna
         |
         --> cuando se ejecuta, ve dentro de la caja,
             modifica counter y lo imprime

*/

// -> Recursividad
// funcion que se llama a si misma (ya lo aprendi de haskell...)

function factorial(n) {
	// caso base
	if (n <= 1) {
		return 1;
	}
	// caso recursivo
	return n * factorial(n - 1);
}

console.log(factorial(5));

// -> Funciones parciales

// recibe parte de los parametros, que recibe dentro otra duncion que tiene el resto de parametros.
// para el primer parametro hacemos algo, y para lo que retorna, hacemos otra llamada más especifica
function partialSum(a) {
	return function (b, c) {
		return sum(a, b, c);
	};
}

const sumWith = partialSum(4); // para la primera llamada, solo recibe el primer parametro. "Parametro fijo"
console.log(sumWith(2, 3)); // para la segunda, recibe b y c (restantes). "Variables"
console.log(sumWith(1, 2)); // para la segunda, recibe b y c (restantes). "Variables"

// util para conexiones de apis con una url fija
function createApiClient(baseUrl) {
	return function (endpoint, method = "GET", data = null) {
		return fetch(`${baseUrl}${endpoint}`, {
			method: method,
			headers: { "Content-Type": "application/json" },
			body: data ? JSON.stringify(data) : null,
		});
	};
}

// Configuras una vez, usas múltiples veces
const apiClient = createApiClient("https://api.miapp.com");
apiClient("/users");
apiClient("/users", "POST", userData);
apiClient("/products");

// -> Currying

// medio al pedo, sirve para programacion funcional con bibliotecas como Lodash o Ramda
// mismo que las funciones parciales, pero en vez de recibir todos los parametros a la vez, los recibe uno por uno.
// se puede hacer para mantener valores fijos y ir cambiandolos
function currySum(a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return sum(a, b, c, d);
			};
		};
	};
}

const sumAB = currySum(1)(2); // define los parametros a b
const sumC = sumAB(3); // define solo a
console.log(sumC(3)); // termina por definir parametro c
console.log(sumC(4));
console.log(sumAB(5)(7)); // termina por definid b y c

// -> Callbacks

// permite inyectar una logica personalizada en una funcion, pasando una función como argumento.
// basado en un resultado de la funcion, llama a una funcion tipo auxilar con callback, para recibirla de
// parametro y hacer algo con el resultado.
function processData(data, callback) {
	// si se quiere ver más simplemte verla como processResult en vez de callback
	const result = sum(...data);
	callback(result);
}

function processResult(result) {
	console.log(result);
}

function processResult2(result) {
	console.log(`Mi resultado es: ${result}`);
}

// processData tiene la data y la callback, que la callback es simplemente otra funcion
// la cual se ejecuta con el resultado de la funcion processData

processData([1, 2, 3], processResult); // simplemente suma y llama a la callback que es processResult

processData([1, 2, 3], processResult2);
processData([1, 2, 3], (result) => {
	console.log(`Mi resultado en la arrow function es: ${result}`);
});

// cobra mas sentido con asincronía, ya que se puede ejecutar una funcion cuando se recibe un resultado de una peticion asincrona
