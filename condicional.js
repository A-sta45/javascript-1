/*

Si es verdad hace la condicion.

if(condicion){'
    argumentos
}
Siempre que sea verdadero.
*/

/*
Array:

cadena de valores:

let array = [5 , 1 , 20 , 3]
Ïndice -->   a = array[2] --> a = 20

let arrayText = ["Älejo", "Thomas", "Jhon"]
Indice -->          0         1         2

let dadoUno =["transparent",
"transparent",
"transparent",
"transparent",
"transparent",
"transparent",
"transparent",
"transparent",
"transparent"]

*/
/*
Alarma de Carro
let puerta1=0;
let puerta2=0;
let puerta3=0;
if(puerta1 === 1 || puerta2===1 || puerta3===1){
    console.log("Suena alarma.")
}
*/

let edad = 15;

if (edad >= 18) {
  console.log("Es mayor de edad.");
}

/*
if.. else..

if(condicion){
    argumento 1
}else{
    argumento 2
}
*/

let estatura = 1.6;

if (estatura >= 1.7) {
  console.log("Es alto.");
} else {
  console.log("Es bajo.");
}

//uno
// document.getElementById("uno").style.background="transparent";
// document.getElementById("dos").style.background="transparent";
// document.getElementById("tres").style.background="transparent";
// document.getElementById("cuatro").style.background="transparent";
// document.getElementById("cinco").style.background="black";
// document.getElementById("seis").style.background="transparent";
// document.getElementById("siete").style.background="transparent";
// document.getElementById("ocho").style.background="transparent";
// document.getElementById("nueve").style.background="transparent";

let dado = 1;
let puntos = [
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "ocho",
  "nueve",
];
let lanzamientos = -1;

/*
Operadores logicos:
OR === O
    ||
a b = x
0 0   0
0 1   1
1 0   1
1 1   1


AND === Y
   &&
a b = x
0 0   0
0 1   0
1 0   0
1 1   1

NOT === Negación
0 1
1 0
~
*/

function dadoUno() {
  for (let i = 0; i < 9; i++) {
    if (i === 4) {
      document.getElementById(puntos[i]).style.background = "white";
    } else {
      document.getElementById(puntos[i]).style.background = "transparent";
    }
  }
}

function dadoDos() {
  for (let i = 0; i < 9; i++) {
    if (i === 0 || i === 8) {
      document.getElementById(puntos[i]).style.background = "white";
    } else {
      document.getElementById(puntos[i]).style.background = "transparent";
    }
  }
}
function dadoTres() {
  for (let i = 0; i < 9; i++) {
    if (i === 0 || i === 4 || i === 8) {
      document.getElementById(puntos[i]).style.background = "white";
    } else {
      document.getElementById(puntos[i]).style.background = "transparent";
    }
  }
}
function dadoCuatro() {
  for (let i = 0; i < 9; i++) {
    if (i === 0 || i === 2 || i === 6 || i === 8) {
      document.getElementById(puntos[i]).style.background = "white";
    } else {
      document.getElementById(puntos[i]).style.background = "transparent";
    }
  }
}
function dadoCinco() {
  for (let i = 0; i < 9; i++) {
    if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8) {
      document.getElementById(puntos[i]).style.background = "white";
    } else {
      document.getElementById(puntos[i]).style.background = "transparent";
    }
  }
}
function dadoSeis() {
  for (let i = 0; i < 9; i++) {
    if (i === 0 || i === 2 || i === 3 || i === 5 || i === 6 || i === 8) {
      document.getElementById(puntos[i]).style.background = "white";
    } else {
      document.getElementById(puntos[i]).style.background = "transparent";
    }
  }
}
/*
Cuando el dado === 1, ejecute funcion dadoUno().
Cuando el dado === 2, ejecute funcion dadoDos().
*/

function escribirHtml(texto) {
  document.getElementById("lanzamientos").innerHTML = texto;
}

function lanzarDado() {
  for (let i = 0; i < 1; i++) {
    let max = 6;
    let min = 1;
    dado = Math.floor(Math.random() * (max - min + 1) + min);

    switch (dado) {
      case 1:
        dadoUno();
        break;
      case 2:
        dadoDos();
        break;
      case 3:
        dadoTres();
        break;
      case 4:
        dadoCuatro();
        break;
      case 5:
        dadoCinco();
        break;
      case 6:
        dadoSeis();
        break;
    }

    lanzamientos++;
    escribirHtml(lanzamientos);
    //  document.getElementById("bucle").innerHTML+=i;
    // document.getElementById("bucle").innerHTML+=`El dado cayo en el numero ${dado.toFixed(0)}. <br>`;
  }
}

lanzarDado();

/*
switch(dado){
    case 1:
        dadoUno()
        break
    case 2:
        dadoDos()
        break
    case 3:
        dadoTres()
        break
    case 4:
        dadoCuatro()
        break
    case 5:
        dadoCinco()
        break
    case 6:
        dadoSeis()
        break
}
*/

/*

if(dado===1){
            dadoUno()
        }
        
        if(dado===2){
            dadoDos()
        }
        if(dado===3){
            dadoTres()
        }
        if(dado===4){
            dadoCuatro()
        }
        if(dado===5){
            dadoCinco()
        }
        if(dado===6){
            dadoSeis()
        }

*/
