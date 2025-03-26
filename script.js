function verificarPar(numero){
    if(numero % 2 === 0){
        console.log('par');
    }else{
        console.log('impar');
    }
};

verificarPar(85)
verificarPar(78)


function calcular(n1,n2){
const soma = n1 + n2;
const subtracao = n1 - n2;
const divisao = n2 !== 0 ? n1 / n2: 'NÃO EXISTE DIVISÃO POR ZERO SEU ACÉFALO';
const multiplicacao = n1 * n2;

console.log(soma)
console.log(subtracao)
console.log(divisao)
console.log(multiplicacao)
}

let n1=parseFloat (prompt("Digite o primeiro número"));
let n2=parseFloat (prompt("Digite o segundo número"));

calcular (n1,n2);

let numero = 10;
let delay = 0;
while (numero >=1){
    console.log(numero);
    numero--;
}

function inverterTexto(texto) {
return texto.split('').reverse().join('');
}

console.log(inverterTexto("javaScripto"));

function contaCaractere(str){
    return str.length;
}

console.log(contaCaractere("Vasco é buxa"));

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInformacoes() {
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`);
    }
}

const meuCarro = new Carro('Volkswagen', 'Beetle', '1963');
meuCarro.exibirInformacoes();

function mensagemPersonalizada(nome, mensagem = "Olá!"){
    console.log(`${mensagem} ${nome}`);
}
mensagemPersonalizada('Gigi', 'me da')

function media(x,y,z){
  return (x+y+z) / 3;
}

let x=parseFloat (prompt("Digite o x"));
let y=parseFloat (prompt("Digite o y"));
let z=parseFloat (prompt("Digite o z"));
let resultado =  media(x,y,z);
console.log(resultado);
