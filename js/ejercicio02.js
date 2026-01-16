//Tipos de datos en Java Script
//Personalizacióin de salidas a Consola
console.log("%cEjercicio 02: Tipos de Datos ", style_console);
//Undefined valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.warn("1.-UNDEFINED (No Definido)")

let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined ;
 console.log("Valores actuales de las variables");
 console.log('usuarioLogeado= ${usuarioLogeado}');
 console.log('rolUsuario = ${rolUsuario}');
 console.log('ultimoAcceso = ${ultimoAcceso}');
 /* en java script*/
 console.log("Tipos de datos de las variables declaradas: ");
 console.log('usuarioLogeado= ${typeof(usuarioLogeado)}');
 console.log('rolUsuario = ${typeof(rolUsuario)}');
 console.log('ultimoAcceso = ${typeof(ultimoAcceso)}');
//Supongamos que un usuario denominado MarcoRamirez99 se ha logeado exitosamente, el valor de la variable debera
//actualizarce a su username
usuarioLogeado = "MarcoRamirez99";
// pero no solo cambiará su valor , también cambiará su tipo
console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado} y su nuevo tipo de dato es: ${typeof
(usuarioLogeado)}`);
// 2. BOOLEAN (TRUE/FALSE) - Verdadero o Falso
console.warn('2.- BOOLEAN (TRUE/FALSE)')
var hayUsuarioLogeado;
/* Supongamos que nuestra app tendrá un menu específico para los usuarios registrados , en el podrán visualizar sus
mensajes o estado de sus publicaciones de renta o venta de propiedades, a diferencia de un usuario que entra de
manera incognita a visualar las propiedades. */
function validacionUsuarioLogeado(){
console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado} que es de tipo: ${typeof
(hayUsuarioLogeado)}`);
//igualdad estricta ===
if(hayUsuarioLogeado === true) 
{

console.log("Dado que se ha logeado un usuario la app mostrará el menú de usuario.");

}
else if (!hayUsuarioLogeado)
{
    console.log("Dado que no hay usuario logeado la app no mostrara el menú de usuario.");
}
else {
console.log("No puedo procesar este tipo de dato, requiero de un booleano.");
}
}

// test1 : usuario logeado = true
hayUsuarioLogeado= true;
console.log('Test 1')
validacionUsuarioLogeado();

// test2 : usuario logeado = false
console.log('Test 2')
hayUsuarioLogeado= false;
validacionUsuarioLogeado();

// test3: usuario logeado = a cualquier otra cosa
console.log('Test 3')
hayUsuarioLogeado= 52.5;
validacionUsuarioLogeado();

// 3. NUMBER (Numéricos)
// 3. NUMBER (Numéricos)

console.warn('3.- NUMBER (NUMÉRICOS)')

/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo que para otros leguajes de programación lo que un ENTERO (INT), FLOTANTE (FLOAT), DECIMAL , DOBLE (DOUBLE), para el solo son números (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS = -97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:

ID del Usuario propietario: ${userID_Owner}
Precio de la propiedad: ${priceProperty}
Latitud (GPS): ${latGPS}
Longitud (GPS): ${longGPS}
Altitud (GPS): ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:

ID del Usuario propietario: ${typeof(userID_Owner)}
Precio de la propiedad: ${typeof(priceProperty)}
Latitud (GPS): ${typeof(latGPS)}
Longitud (GPS): ${typeof(longGPS)}
Altitud (GPS): ${typeof(altGPS)}`);

//4.- STRING (Cadena de Caractéres)
var fullnameOwner = 'Marco A. Ramirez';
let nameProperty = "Hermosa Casa en la Playa de Puerto Vallarta";
let descriptionProperty = "Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automoviles a orilla del mar.";
var estatus = 'Disponible';
const typeProperty='C';
var addressProperty;
/* Los tipos de datos STRING son un palabras*/

console.warn("4. STRING (CADENA DE CARACTERES, PALABRAS");
 
console.log(`El usuario: ${fullnameOwner}, está vendiendo o rentando la propiedad: ${nameProperty}
     que consiste en: ${descriptionProperty} actualmente está en estado: ${estatus} y es de tipo: ${typeProperty}.`);
console.log(`Las variables declaradas son del tipo:
     fullnameOwner : ${typeof (fullnameOwner)}
     nameProperty : ${typeof (nameProperty)}
     descriptionProperty : ${typeof (descriptionProperty)}
     estatus : ${typeof (estatus)}
     typeProperty : ${typeof (typeProperty)}
     addressProperty : ${typeof (addressProperty)}`);

     /* Existen métodos para manipular los datos del tipo STRING, como:*/

/* El método toUpperCase que convierte todas la letras en mayúsculas*/
console.log(`El usuario logeado es: ${usuarioLogeado.toUpperCase()}`);

/* Por lo contrario en método toLowerCase convierte todo el texto a minúsculas*/
console.log(`Descripción de la propiedad en venta: ${descriptionProperty.toLowerCase()}`);

/* Tambien existe la propiedad que cuenta el número carácteres que forman el texto, llamado length (tamaño)*/
console.log(`La longitud del nombre de la propiedad es de: ${nameProperty.length}`);

/* Tenemos un método que nos permite hacer subcadenas o extraer la porción de la palabra en base a su posiscionamiento*/
let lastname = fullnameOwner.slice(8, fullnameOwner.length);
console.log(`El apellido del propietario es: ${lastname}`);

/* OTRA FUNCION */
/* texto denominada replace() */
console.log(`Remplazo de la para MAR por RÍO, Descripción de la propiedad: ${descriptionProperty.replace("MAR", "RÍO")}`);

/* O el remplazo de todas las ocurrencias de una letra o palabra */
console.log(`Remplazo de las letras A por el numero 4, Nombre de la Propiedad: ${nameProperty.replaceAll("a", "4")}`);

/* 5. BIGINT (Entero de Alta Precisión, o alta amplitud) */

console.warn("5. BIGINT (ENTEROS DE ALTA PRECISION)");
let numeroGrande1 = 1234567890; /* 10 digitos */
let numeroGrande2 = 123456789012345678901234567890; /* 20 digitos */
let numeroGrande3 = 1234567890123456789012345678901234567890; /* 30 digitos */
let numeroGrande4 = 12345678901234567890123456789012345678901234567890; /* 40 digitos */

/* Imprimamos los valores de las variables y observemos que pasa: */
console.log(`Los valos y tipos de datos son:
numeroGrande1, valor= ${numeroGrande1}, tipo: ${typeof(numeroGrande1)}
numeroGrande2, valor= ${numeroGrande2}, tipo: ${typeof(numeroGrande2)}
numeroGrande3, valor= ${numeroGrande3}, tipo: ${typeof(numeroGrande3)}
numeroGrande4, valor= ${numeroGrande4}, tipo: ${typeof(numeroGrande4)}
`)
/* Para no perder precisión en estos números JAVASCRIPT tiene un tipo de dato especial denominado BIGINT,
para poder almacenar el valor en este tipo de dato solo basta con invocar el método de conversión en la
inicialización*/
numeroGrande1= BigInt("1234567890"); /* 10 digitos */
numeroGrande1= BigInt("12345678901234567890") /* 20 digitos */
numeroGrande1= BigInt("123456789012345678901234567890")  /* 30 digitos */
numeroGrande1= BigInt("1234567890123456789012345678901234567890") /* 40 digitos */

console.log(`los valos y tipos de datos son:
    numeroGrande1, valor= ${numeroGrande1}, tipo: ${typeof(numeroGrande1)}
    numeroGrande2, valor= ${numeroGrande2}, tipo: ${typeof(numeroGrande2)}
    numeroGrande3, valor= ${numeroGrande3}, tipo: ${typeof(numeroGrande3)}
    numeroGrande4, valor= ${numeroGrande4}, tipo: ${typeof(numeroGrande4)}
    `)

    /*6 . SYMBOL*/
    /* Es tipo de dato a parte de almacenar el valor, almacena la direccion fisica en memoria donde se 
    almacena el valor, logrando que todos los valores de cada variable siempre sean UNICOS */

    console.warn("6. SYMBOL (simbolos)");

    const numero1 = 3;
    const numero2 = 3.0;
    const numero3 = "3";
    const numero4 = "3.0";
    const numero5 = Symbol(3);
    const numero6 = Symbol(3.0);
    const numero7 = Symbol("3");
    const numero8 = Symbol("3.0");
    const numero9 = Symbol(3);

    console.log(` Imprimiendo los valores y tipos de dato:
    numero1, valor: ${numero1}, tipoDato: ${typeof(numero1)}
    numero2, valor: ${numero2}, tipoDato: ${typeof(numero2)}
    numero3, valor: ${numero3}, tipoDato: ${typeof(numero3)}
    numero4, valor: ${numero4}, tipoDato: ${typeof(numero4)}
    numero5, valor: ${numero5.description}, tipoDato:${typeof(numero5)}
    numero6, valor: ${numero6.description}, tipoDato:${typeof(numero6)}
    numero7, valor: ${numero7.description}, tipoDato:${typeof(numero7)}
    numero8, valor: ${numero8.description}, tipoDato:${typeof(numero8)}
    numero9, valor: ${numero9.description}, tipoDato:${typeof(numero9)}

    `)

    /* Realizando un par de validaciones*/
if(numero1== numero2 )
console.log("Se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
else
console.log("Se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");
if(numero1== numero3 )
console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor");
else
console.log("Se comparó el valor de numerol y numero3 evaluando que son diferentes en valor");
if(numero1 === numero3 )
console.log("Se comparó el valor de numeroi y numero3 evaluando que son iguales en valor");
else
console.log("Se comparó el valor de numerol y numero3 evaluando que son iguales en valor pero diferente tipo de dato");
if (numero1 === numero4 )
console.log("se comparo el valor de numero1 y numero4 evaluando que son iguales en valor");    
else
    console.log("se comparo el valor de numero1 y numero4 evaluando que son iguales en valor perondiferente tipo de dato");

if(numero1 == numero5 )
    console.log("se comparo el valor de nuemro1 y numero5 evaluando que son iguales en valor");
else
    console.log("se comparo el valor de nuemro1 y numero5 evaluando que son iguales en valor pero diferente tipo de dato");
if (numero5 == numero9 )
console.log("se comparo el valor de nuemro1 y numero9 evaluando que son iguales en valor");
else
    console.log("se comparo el valor de numero1 y numero9 evaluando que son iguales en valor pero diferente tipo de dato");

/* 7. NULL (NULO) */
/* Este tipo de datos es similar a UNDEFINED, con la diferencia de que los usuarios o el sistema es 
conciente que se le asigno este valor */
console.warn("7. NULL (NULO O Vacio)")
let isPremiumUser;
let isUserLoged;
var todayDate = new Date();
var lastLogin = todayDate;
let isNewUser;
console.log(`Las variables del usuario son:
isPremiumuser, valor: ${isPremiumUser}, tipo: ${typeof(isPremiumUser)}
isUserLoged, valor: ${isPremiumUser}, tipo: ${typeof(isPremiumUser)}
isPremiumus, valor: ${isPremiumUser}, tipo: ${typeof(isPremiumUser)}
`);

/* Durante la navegacion del usuario en la plataforma en algun punto ingresa sus credenciales y se valida en base de dato */

/* Simulando que las credenciales fueron correctas*/

isUserLoged = true;
isPremiumUser = null;
if(lastLogin == todayDate)
isNewUser = true;
else
isNewUser = false;
console.log(`Las variables del usuario son:
isPremiumuser, valor: ${isPremiumUser}, tipo: ${typeof(isPremiumUser)}
isUserLoged, valor: ${isUserLoged}, tipo: ${typeof(isUserLoged)}
isNewUser, valor: ${isNewUser}, tipo: ${typeof(isNewUser)}`);