let contadorDeClicks = 0
const btn =`btn`
const contador =`contador`
const btnUno="btn-1"

const recibirClick = document.getElementById(btn).addEventListener("click", contarClick)

const clickUno = document.getElementById(btnUno).addEventListener("click", agregarNumeroUno)


// function escribirHtml(texto){
//     document.getElementById(contador).innerHTML= texto
// };
escribirHtml=(texto) => (document.getElementById(contador).innerHTML = texto)

function agregarNumeroUno(){
document.getElementById("resultado").innerHTML+="1";
}

function contarClick(){
    contadorDeClicks++
    escribirHtml(contadorDeClicks)
}




