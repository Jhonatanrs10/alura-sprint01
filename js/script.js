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

function campoLimpo() {
    if (campoResposta.value == ""){
        campoResposta.style.background = "url('../sprint01/img/nenhuma-msg-encontrada.svg') center center no-repeat";
    } else{
        campoResposta.style.background = "none";
    }
}

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
    campoLimpo();

}

function btnDesCriptografar() {

    var textoDigitado = campoTexto.value;
    var textoModificado = campoTexto.value;

    textoModificado = textoModificado.replace(/enter/g, "e");
    textoModificado = textoModificado.replace(/imes/g, "i");
    textoModificado = textoModificado.replace(/ai/g, "a");
    textoModificado = textoModificado.replace(/ober/g, "o");
    textoModificado = textoModificado.replace(/ufat/g, "u");

    if (textoModificado == textoDigitado){
        alert("Essa mensagem não foi criptografada.");
    } else{
        campoResposta.value = textoModificado;
        campoTexto.value = "";
    }
    
    campoLimpo();

}

function copyToClipBoard() {
    campoResposta.select();
    document.execCommand('copy');
    //campoTexto.value = campoResposta.value
    campoResposta.value = "";
    campoLimpo();
}

campoLimpo();
// Clicks

botaoCriptografar.addEventListener("click", btnCriptografar);

botaoDesCriptografar.addEventListener("click", btnDesCriptografar);

botaoCopiar.addEventListener("click", copyToClipBoard);

