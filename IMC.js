let inputPeso = document.getElementById("peso");
let inputAltura = document.getElementById("altura");
const resposta1HTML = document.getElementById("resposta1");
const resultadoHTML = document.getElementById("resultado");
const resposta2HTML = document.getElementById("resposta2");



window.addEventListener("load", function () {
    eventoDeEntrada();
})


function eventoDeEntrada() {
    
    document.getElementById("calcular").addEventListener("click", calcular);
}

let calculo = {
    altura: 0,
    peso: 0,
    resultado:0
}

function calcular(){
    peso = parseFloat(inputPeso.value);
    altura = parseFloat(inputAltura.value)*2;
    resultado = peso / altura;
    aproximado = parseFloat(resultado.toFixed(2));
    resposta1HTML.innerHTML = "O Seu IMC é:";
    resultadoHTML.innerHTML = aproximado;
    if (resultado <= 17){
        resposta2HTML.innerHTML = "O seu IMC esta abaixo do normal !";

    }
    else if (resultado >= 25){
        resposta2HTML.innerHTML = "O seu IMC esta acima do normal !";
    }
    else{
        resposta2HTML.innerHTML = "Você esta no peso ideal !!!";
    }
}

