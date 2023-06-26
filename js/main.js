//lista
let listaDeItens = [];
//Coletando dados do formulário
const form = document.querySelector('[data-form]');
//Pegando Lista para inserção
const ulItens = document.getElementById('lista-itens');
//Pega o input do item
const itensInput = document.getElementsByClassName('item-input');
//Recebe informações do local Storage
const listaRecuperada =  localStorage.getItem('listaDeItens', )

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    
    salvarItens(ev);
    console.log(listaDeItens);
    mostrarItens();
});

function salvarItens (evento){
    const nome = evento.target.elements['nome'].value;
    const qtd = evento.target.elements['quantidade'].value;
    

    if(nome != "" || qtd != ""){
        listaDeItens.push({
            nome: nome,
            qtd: qtd
        });
    } else {
        alert('Preencha os campos');
    }
}

function atualizaLocalStorage() {
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens));
}

if(listaRecuperada) {
    //Implementa a lista de json para o novo objeto
    listaDeItens = JSON.parse(listaRecuperada);
    mostrarItens();
} else {
    listaDeItens = [];
}

function mostrarItens(){
    ulItens.innerHTML='';

    listaDeItens.forEach((item, index) => {
        ulItens.innerHTML += `
            <li class="item" data-value="${index}">
                <strong>${item.qtd}</strong>
                ${item.nome}
            </li>
        `
    })

    atualizaLocalStorage();
    limpaItens(itensInput);
}

function limpaItens(inputs) {
    for(let i  = 0; i < inputs.length; i++){
        inputs[i].value="";
    }
}