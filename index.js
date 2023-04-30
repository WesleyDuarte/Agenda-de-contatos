const form = document.querySelector('#formCadastro');
let linhas = '';
const nomesContatos = []
const telContatos = []
const nome = document.querySelector('#nome')
const tel = document.querySelector('#telefone')

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){

if(nomesContatos.includes(nome.value) || telContatos.includes(tel.value)){
    alert(`o contato ja foi inserido`);
}else if (tel.value.length < 11){
    alert('Numero de telefone invalido')
}
else{

    nomesContatos.push(nome.value);
    telContatos.push(tel.value);

    let linha = "<tr>";
    linha += `<td> ${nome.value} </td>`;
    linha += `<td> ${tel.value} </td>`;
    linha += "</tr>";

    linhas += linha;
    }
    nome.value = "";
    tel.value = "";
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas;
}
