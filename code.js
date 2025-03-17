// Ejercicio 1
const nombre = document.getElementById("nombre");
function holi() {
    console.log("Holis " + nombre.value);
}
// Ejercicio 2
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
function operaciones(params) {
    console.log(parseInt(num1.value) + parseInt(num2.value));
    console.log(num1.value - num2.value);
    console.log(num1.value * num2.value);
    console.log(num1.value / num2.value);
}
// Ejercicio 3
const num3 = document.getElementById("num3");
function parImpar(params) {
    if (num3.value % 2 == 0) {
        console.log("Es par")
    }
    else{
        console.log("Es impar")
    }
}
// Ejercicio 4
const palabra = document.getElementById("palabra");
function contadorChar(){
    console.log("Tiene " + palabra.value.length + " caracteres");
}
// Ejercicio 5
const palabraARepetir = document.getElementById("palabraARepetir");
const numeroDeVeces = document.getElementById("numeroDeVeces");
function repeticion(){
    for (let index = 0; index < numeroDeVeces.value; index++) {
        console.log(palabraARepetir.value);
    }
}
// Ejercicio 6
const numeroMultiplicar = document.getElementById("numeroMultiplicar");
function tablaMultiplicar(){
    console.log(numeroMultiplicar.value * 1);
    console.log(numeroMultiplicar.value * 2);
    console.log(numeroMultiplicar.value * 3);
    console.log(numeroMultiplicar.value * 4);
    console.log(numeroMultiplicar.value * 5);
    console.log(numeroMultiplicar.value * 6);
    console.log(numeroMultiplicar.value * 7);
    console.log(numeroMultiplicar.value * 8);
    console.log(numeroMultiplicar.value * 9);
    console.log(numeroMultiplicar.value * 10);
}
// Ejercio 7
const numeroAdivinado = document.getElementById("adivinado");
let rng = Math.floor(Math.random() * 11);
function adivinar() {
    if (numeroAdivinado.value > rng) {
        console.log("Es mayor");
    } else if (numeroAdivinado.value < rng){
        console.log("Es menor");
    }
    else{
        console.log("Ganaste!");
    }
}
// Ejercicio 8
const palabraVocales = document.getElementById("palabraVocales");
function vocalesEnPalabra() {
    let vocales = 0;
    for (let index = 0; index < palabraVocales.value.length; index++) {
       let char = palabraVocales.value[index];
       if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            vocales++;
       } 
    }
    console.log("Tiene " + vocales + " vocales");
}
// Ejercicio 9
const palabraInvertir = document.getElementById("palabraInvertir");
function invertir() {
    let inverted = '';
    for (let index = palabraInvertir.value.length; index > 0; index--) {
       inverted += palabraInvertir.value[index-1];
    }
    console.log(inverted);
}
// Ejercicio 10
const palindromo = document.getElementById("palindromo");
function verificarPalindromo(){
    let inverted = '';
    for (let index = palindromo.value.length; index > 0; index--) {
       inverted += palindromo.value[index-1];
    }
    if (inverted == palindromo.value) {
        console.log("Es palindromo");
    } else {
        console.log("No es palindromo");
    }
}