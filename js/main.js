//coleta form
const form = document.getElementById("novoItem");
//coleta lista
const lista = document.getElementById("lista-itens");


const itens = [];


form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements['nome'] ;
    const quantidade = evento.target.elements['quantidade'];


    criaElemento(nome.value , quantidade.value);

    nome.value = "";
    quantidade.value = "";
})

function criaElemento(nome, quantidade) {
    
    //cria elemento
    const novoItem = document.createElement('li')
    //adiciona classe
    novoItem.classList.add("item");
    //Cria elemento do numero
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;
    //coloca o numero dentro do elemento de li
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    //implementa o item na lista
    lista.appendChild(novoItem);

    const itemAtual = {
        "nome" : nome,
        "qtd" : quantidade
    }
    //salvando itens no array
    itens.push(itemAtual);

    //setando no localstorage
    localStorage.setItem("Item", JSON.stringify(itens));
      
} 

//limpa localstorage
form.addEventListener('click', () => {
    localStorage.clear();
})