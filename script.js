const display = document.getElementById("display");
const subDisplay = document.getElementById("subDisplay")
console.log(display.innerText);

subDisplay.innerText = "";
display.innerText = 0;

let acao = false;
let resultado = 0;
let resultadoSub = 0;
let nameAcao = "";


function addNumber(number) {

    if(display.innerText == 0 || acao) {
        display.innerText = number
    } else {
        display.innerText += number
    }
    acao = false;
}
//  = = igual  ! = diferente
function deleted() {

    const tamanho = display.innerText.length;
    if(display.innerText.length != 1) {
        display.innerText = display.innerText.substring(0, (tamanho - 1))
    } else {
        display.innerText = 0;
    }

}

function operacao(params) {
    console.log(params);
    nameAcao = params;
    if(params == "adicao") {
        acao = true;
        resultado = parseInt(resultado) + parseInt(display.innerText);
        addOperacaoSubDisplay(params);
        console.log(resultado);
    }
    if(params == "subtracao") {
        acao = true;
        resultado = parseInt(resultado) - parseInt(display.innerText);
        addOperacaoSubDisplay(params);
        console.log(resultado);
    }
    if(params == "divisao") {
        
    }
    if(params == "multiplicao") {
        
    }
    
}

function addOperacaoSubDisplay(params) {
    let simbolo = "+";

    if(params == "subtracao") {
        simbolo = "-";
    }
    if(params == "multiplicao") {
        simbolo = "*";
    }
    if(params == "divisao") {
        simbolo = "/";
    }
    if(params == "igual") {
        simbolo = "=";
        subDisplay.innerText = resultado + " + " + display.innerText + " " + simbolo;
        return;
    }
    
    subDisplay.innerText = resultado + " " + simbolo;
    
}

function result() {
    addOperacaoSubDisplay("igual")
    if(nameAcao == "adicao") {
        resultado = parseInt(resultado) + parseInt(display.innerText);
    }
    display.innerText = resultado;
    console.log(resultado);
    //display.style.backgroundColor = "red";
}

function updateResult(operador) {
    if (operador == "adicao") {
        resultado = parseInt(resultado) + parseInt(display.innerText);
    }
    
}

function ce() {
    display.innerText = 0;
}

function reset() {
    display.innerText = 0;
    subDisplay.innerText = "";
    resultado = 0;
    nameAcao = "";
}

