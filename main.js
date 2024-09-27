const form = document.getElementById('form-contato');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome');
    const inputNumeroContato = document.getElementById('numero');

    inputNomeContato.value = inputNomeContato.value.trim(); 
    inputNumeroContato.value = inputNumeroContato.value.trim();

    if(inputNomeContato.value == ''){
        alert("Insira um nome válido");
    }else if(inputNumeroContato.value.length < 10 || inputNumeroContato.value.length > 11){
        alert("Insira um número válido");
    }else{
    
        if(nomes.includes(inputNomeContato.value)){
            alert(`O contato: ${inputNomeContato.value} já existe`);
        }else if(numeros.includes(inputNumeroContato.value)){
            alert(`Já existe um contato com o número: ${inputNumeroContato.value}`);
        }else{
            nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha ='<tr>';
        linha+=`<td>${inputNomeContato.value}</td>`;
        linha+=`<td>${inputNumeroContato.value}</td>`;
        linha+=`</tr>`;

        linhas += linha;
        }    
    }    

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

