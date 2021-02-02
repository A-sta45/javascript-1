var a = 1;
let b = 2;
const c = 3;
let d;

d = a + b;
console.log("El valor de d es " + d);

d = d + a;
console.log("El valor de d ahora es " + d);

b = c * a;

console.log("El valor de b es " + b);

a = 45;

console.log("El valor de a es " + a);

d = a + b;
console.log("El valor de d es " + d);

// Formula

let km = 100;
let h = 1;
let tiempo = 0.5;

let velocidad = km / h;
console.log("La velocidad del carro es: " + velocidad + "km/h");

km = velocidad * tiempo;
console.log(
  "Despues de andar " + tiempo + " horas, el carro ando " + km + " kilometros."
);

// Para mostrar en HTML
// document.getElementById("parrafo").innerHTML+="La velocidad del carro es "+velocidad+" kilometros.";
let mujer = "Andrea";
let hombre = "Thomas";
// document.getElementById("parrafo").innerHTML+=mujer;
// document.getElementById("parrafo").innerHTML+="El señor: "+hombre;
document.getElementById("parrafo").innerHTML += "la señora: " + mujer;

let nombre;
let apellido;
let estatura;

nombre = "Daniel";
apellido = "Rodriguez";
estatura = 1.7;

document.getElementById("persona").innerHTML +=
  "Su nombre es " +
  nombre +
  " " +
  apellido +
  " y su estatura es " +
  estatura +
  " metros.";

//creare una nueva etiqueta p con un ID.
//Formula1: Area de un circulo.
//Su circulo de Radio XXX tiene un area de XXX cm cuadrados.
//Formula2: Volumen del circulo.
//El volumen de su esfera de radio XXX es de XXX cm Cubicos.

let radio;
let area;
let volumen;
const pi;
let radio3;
radio = 6;
pi = Math.PI;
area = radio * radio * pi;
// pi= 3.14
document.getElementById("formula1").innerHTML +=
  " Su circulo de radio " +
  radio +
  " tiene un area de " +
  area.toFixed(2) +
  " cm cuadrados ";
radio3 = Math.pow(radio, 3);
// radio= radio*radio*radio;
volumen = (radio3 * pi * 4) / 3;

document.getElementById("formula2").innerHTML +=
  " El volumen de su esfera de radio " +
  radio +
  " es de " +
  volumen.toFixed(2) +
  " cm cubicos ";
