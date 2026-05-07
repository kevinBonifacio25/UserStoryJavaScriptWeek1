
// Objetivo de la Historia de usuario
// Implementar un programa funcional en JavaScript que permita interactuar con el usuario, solicitando nombre y edad, validando la entrada y mostrando mensajes dinámicos según las condiciones establecidas. Con esta historia, cada coder podrá reforzar:
// La declaración de variables (let y const)
// Tipos de datos en JavaScript
// Uso de console.log(), alert(), prompt() y console.error()
// Condicionales (if, else if, else)
// Buenas prácticas en el nombrado de variables (camelCase, descriptivas)

// TASK 1
// 1. Configuración inicial del proyecto:
// Crea un archivo llamado sistema_interactivo.js.
// Asegúrate de que el archivo pueda ejecutarse en el navegador o en Node.js para pruebas.
// Comenta cada sección del código para mayor comprensión.

// TASK 2 check
// 2. Entrada de datos del usuario:
// Usa prompt() para solicitar el nombre. check
// Usa prompt() para solicitar la edad. check
// Declara variables usando let o const y asigna los valores ingresados. check

// TASK 3 check
// 3. Validación de la edad:
// Comprueba si el valor ingresado para la edad es un número.
// Si no es un número, muestra un mensaje de error usando console.error("Error: Por favor, ingresa una edad
//  válida en números.").check

// TASK 4
// 4. Condicionales y mensajes dinámicos: check
// Si la edad es menor a 18, muestra con alert() o console.log(): check
// "Hola [nombre], eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!" check
// Si la edad es mayor o igual a 18, muestra: check
// "Hola [nombre], eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!" check
 
// Criterios de aceptación
// El archivo se llama sistema_interactivo.js. check
// Se usan let o const (no var). check
// Se valida que la edad sea un número válido. check
// Se muestran mensajes personalizados según el valor de la edad. check
// Se utiliza console.error() para errores de entrada. check
// El código contiene comentarios explicativos en cada sección. check
 
// Story Points: 25


//TASK 1
// save information(name, age) the data on the variable
const userName = prompt("Typing your name: ");
const userAge = parseInt(prompt("Typing your age: "));

//TASK 2
// validate of the age if is a number
if (Number.isNaN(userAge) ){ //Number.isNaN it's a validation for knows if the variable it's a number if not will show error message

    console.error("Wrong: Please, typing age correct, only numbers");  //show error message


//TASK 3
}else if (userAge < 18){ // validation for userAge for knows if the user is a kid or adult
    alert(`Hi, ${userName}, you are a children, still learning and enjoying of code `)
} else{
     alert(`Hi, ${userName}, you are an adult, prepare for opportunities of the development world `)
}




