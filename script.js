const display = document.getElementById("display");
display.innerText = 0;

let acao = false;
let resultado = 0;
let resultadoSub = 0;
let nameAcao = "";
let virgula = false;

function addNumber(number) {
    if (display.innerText == 0 || acao) {
        display.innerText = number
    } else {
        display.innerText += number
    }
    acao = false;
}
//  = = igual  ! = diferente
function deleted() {
    const tamanho = display.innerText.length;
    if (display.innerText.length != 1) {
        display.innerText = display.innerText.substring(0, (tamanho - 1))
    } else {
        display.innerText = 0;
    }
}

function operacao(params) {
    nameAcao = params;
    acao = true;
    if (params == "adicao") resultado = parseFloat(resultado) + parseFloat(display.innerText);
    if (params == "subtracao") resultado = parseFloat(resultado) - parseFloat(display.innerText);
    if (params == "divisao") {
        if (resultado != 0) {
            resultado = parseFloat(resultado) / parseFloat(display.innerText);
        } else {
            resultado = parseFloat(display.innerText);
            return;
        }
    }
    if (params == "multiplicacao") {
        if (resultado != 0) {
            resultado = parseFloat(resultado) * parseFloat(display.innerText);
        } else {
            resultado = parseFloat(display.innerText);
            return;
        }

    }
    display.innerText = resultado;
    virgula = false;
}


function result() {
    acao = true;
    switch (nameAcao) {
        case "adicao":
            resultado = parseFloat(resultado) + parseFloat(display.innerText);
            break;
        case "subtracao":
            resultado = parseFloat(resultado) - parseFloat(display.innerText);
            break;
        case "divisao":
            resultado = parseFloat(resultado) / parseFloat(display.innerText);
            break;
        case "multiplicacao":
            resultado = parseFloat(resultado) * parseFloat(display.innerText);
            break;
        default:
            break;
    }
    display.innerText = resultado;
    nameAcao = "";
    virgula = false;

}

function addVirgula() {
    if (!virgula)
        display.innerText += ".";

    virgula = true;
}

function ce() {
    display.innerText = 0;
    virgula = false;
}

function reset() {
    display.innerText = 0;
    resultado = 0;
    nameAcao = "";
    acao = false;
    virgula = false;
}
