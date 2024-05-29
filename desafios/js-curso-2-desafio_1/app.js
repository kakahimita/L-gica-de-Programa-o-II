let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do show';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado');
}

function exibirMensagemAlert() {
    console.log('Eu amo JS');
}

function exibirMensagemPrompt() {
    let cidade = prompt('De onde você é ?');
    alert(`Estive em ${cidade} pensando em vc`);
}

function exibirSoma() {
    let numeroUm = parseInt(prompt('Me informe o primeiro'));
    let numeroDois = parseInt(prompt('Me informe um segundo numero'));
    let resultado = numeroUm + numeroDois;
    alert(`O resultado da soma entre ${numeroUm} e ${numeroDois} é ${resultado}`);
}