//ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for');

if (divFor) {
    for (let i = 0; i < 10; i++) {
        console.log(i, 'Amor');
        divFor.innerHTML += `${i} - Amor <br>`;
    }
}

//CONTADOR/ACUMULADOR
const inputum = document.querySelector('#num');
const btnNum = document.querySelector('#btn-num');
const divContAcum = document.querySelector('#div-cont-acum');

let cont = 0;
let acum = 0.0;

if (btnNum && inputum && divContAcum) {
    btnNum.addEventListener('click', () => {
        let numDigitado = Number(inputum.value);

        cont++;
        acum += numDigitado;

        divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br> A SOMA DE TODOS OS NÚMEROS DIGITADOS É: ${acum}`;
    });
}

//CONTROLADOR FOR
const inputFrase = document.querySelector('#frase');
const inputNumRepeticao = document.querySelector('#num-repeticao');
const btnFrase = document.querySelector('#btn-frase');
const divFrase = document.querySelector('#div-frase');

btnFrase.addEventListener('click', (evt) => {
    let numRepeticao = Number(inputNumRepeticao.value);
    let frase = inputFrase.value;

    for (let i = 0; i < numRepeticao; i++) {
        divFrase.innerHTML += `${frase} <br>`;
    }
}); 

//COLEÇÃO DE DADOS - ARRAY
const presentes = ['Bola', 'Boneca', 'Carrinho', 'Jogo de tabuleiro', 'Quebra-cabeça', 'Livro'];

const divArray = document.querySelector('#div-array');

//divArray.innerHTML = presentes[6]
for(i 0;i < 5;i++) {
    divArray.innerHTML += `${presentes[i]} <br>`;
}

//FOR IN
const divForEach = document.querySelector('#div-foreach');

for(let posicao in presentes) {
    divForEach.innerHTML += `${posicao} - ${presentes[posicao]} <br>`;
}

