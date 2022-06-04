// Elementos HTML

var campoTexto = document.querySelector(".campo-texto");
var botaoCriptografar = document.getElementById("criptografar");
var botaoDesCriptografar = document.getElementById("descriptografar");
var campoResposta = document.querySelector(".campo-texto-resultado");
var botaoCopiar = document.getElementById("copiar");

// Regra Encriptação

var formula = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

//Funções

function btnCriptografar() {

    var textoDigitado = campoTexto.value.split("");

    for(var i = 0; textoDigitado.length > i; i++){
        
        if (textoDigitado[i] == formula[0][0]){
            textoDigitado[i] = formula[0][1];   
        }else if(textoDigitado[i] == formula[1][0]){
            textoDigitado[i] = formula[1][1];   
        }else if(textoDigitado[i] == formula[2][0]){
            textoDigitado[i] = formula[2][1];   
        }else if(textoDigitado[i] == formula[3][0]){
            textoDigitado[i] = formula[3][1];   
        }else if(textoDigitado[i] == formula[4][0]){
            textoDigitado[i] = formula[4][1];   
        }

    }

    campoResposta.value = textoDigitado.join("");
    campoTexto.value = "";

}

function btnDesCriptografar() {

    var textoDigitado = campoTexto.value;

    textoDigitado = textoDigitado.replace(/enter/g, "e");
    textoDigitado = textoDigitado.replace(/imes/g, "i");
    textoDigitado = textoDigitado.replace(/ai/g, "a");
    textoDigitado = textoDigitado.replace(/ober/g, "o");
    textoDigitado = textoDigitado.replace(/ufat/g, "u");

    campoResposta.value = textoDigitado;

}

function copyToClipBoard() {


    campoResposta.select();
    document.execCommand('copy');
    campoResposta.value = "";

    alert("Copied!");

    campoTexto.innerHTML.select();
    document.execCommand('paste');
}


// Clicks

botaoCriptografar.addEventListener("click", btnCriptografar);

botaoDesCriptografar.addEventListener("click", btnDesCriptografar);

botaoCopiar.addEventListener("click", copyToClipBoard);

