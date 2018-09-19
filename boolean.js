//para transformar qualquer valor em booleano;
var aux = 5;

if(!!aux){
    console.log("Qualquer número, é true, letter the zero\n");
}

console.log("se liga na maciota");

let nome = '';
console.log(nome || "Sem nenhum nome, selecionado ainda...\n");

nome = 'O filme do Pele';
console.log(nome || "Sem nenhum nome, selecionado ainda...\n");