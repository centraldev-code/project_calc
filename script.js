const display = document.getElementById("display");
const subDisplay = document.getElementById("subDisplay")
console.log(display.innerText);

subDisplay.innerText = "";
display.innerText = 0;

let acao = false;
let resultado = 0;

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
    if(params == "adicao") {
        acao = true;
        subDisplay.innerText += display.innerText + " +";
        resultado = parseInt(resultado) + parseInt(display.innerText);
        console.log(resultado);
    }
    if(params == "subtracao") {
        
    }
    if(params == "divisao") {
        
    }
    if(params == "multiplicao") {
        
    }
    
}

function result() {
    display.innerText = resultado;
}

