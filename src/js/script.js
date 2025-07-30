const inputBusca = document.querySelector('#input-cep')
const btnBusca = document.querySelector('#btn-pesquisa-cep')
const dadosBuscados = document.querySelector('.data-cep')

function procurarCep() {
    const cep = inputBusca.value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(data => {
        if(!data.ok) {
            throw new Error('Erro na conexão via internet')
        }
        return data.json();
    })
    .then(data => {
        mostrarDadosNaTela(data)
    })

}

function mostrarDadosNaTela(dados) {
    inputBusca.value = '';
    dadosBuscados.innerHTML = '';

    dadosBuscados.innerHTML += `
         <ul>
            <li><b>Rua: </b> ${dados.logradouro}</li>
            <li><b>UF: </b> ${dados.uf}</li>
            <li><b>Bairro: </b> ${dados.bairro}</li>
            <li><b>Cidade: </b> ${dados.localidade}</li>
            <li><b>DDD: </b> ${dados.ddd}</li>
         </ul>
    `

}