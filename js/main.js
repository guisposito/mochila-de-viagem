//lista
let listaDeItens = [];
//Coletando dados do formulário
const form = document.querySelector('[data-form]');


form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log(ev.target.elements['nome'].value);

    listaDeItens.push({
        nome: ev.target.elements['nome'].value,
        qtd: ev.target.elements['quantidade'].value
    });

    console.log(listaDeItens);
    atualizaLocalStorage();
});


function atualizaLocalStorage() {
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens));
}