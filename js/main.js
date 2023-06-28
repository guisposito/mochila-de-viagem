//coleta form
const form = document.getElementById("novoItem");
//coleta lista
const lista = document.getElementById("lista-itens");
//pega lista ou cria o objeto vazio
const itens = JSON.parse(localStorage.getItem("Itens")) || [];


itens.forEach((el) => {
    criaElemento(el);
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements['nome'] ;
    const quantidade = evento.target.elements['quantidade'];

    const itemAtual = {
        "nome" : nome.value,
        "qtd" : quantidade.value
    }

    criaElemento(itemAtual);
    //salvando itens no array
    itens.push(itemAtual);
    //setando no localstorage
    localStorage.setItem("Itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function criaElemento(item) {
    //cria elemento
    const novoItem = document.createElement('li')
    //adiciona classe
    novoItem.classList.add("item");
    //Cria elemento do numero
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.qtd;
    //coloca o numero dentro do elemento de li
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    //implementa o item na lista
    lista.appendChild(novoItem);
} 

//limpa localstorage
document.getElementById("limpa").addEventListener('click', () => {
    localStorage.clear();
    console.log("limpo");
})


