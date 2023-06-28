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

    //Verifica no array de itens se possui um elemento com o mesmo nome
    const existe = itens.find(elemento => elemento.nome === nome.value);

    //Valida se o elemento for verdadeiro continua igual e se for falso 
    if (existe) {
        itemAtual.id = existe.id;
        
        atualizaElemento(itemAtual);

    } else {
        //Autoincrementa o id
        itemAtual.id = itens.length;
        criaElemento(itemAtual);
        //salvando itens no array
        itens.push(itemAtual);
    }

    

    
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
    //Criando o atributo data
    numeroItem.dataset.id = item.id;
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


function atualizaElemento(item) {
    //Coleta o elemento strong, concatena o id com o id do item e substitui
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.qtd;
}