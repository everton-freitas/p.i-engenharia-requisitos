function limparCampo(){
    document.getElementById('cep').value= '';
    document.getElementById('resultado').value= '';
}
function cadastro(){
    alert ('Cadastro realizado com sucesso:')
}



function buscarCEP() {
    const cep = document.getElementById('cep').value.trim();
    const resultado = document.getElementById('resultado');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const logradouro = document.getElementById('logradouro');
    const localidade = document.getElementById('localidade');
    const uf = document.getElementById('uf');
    const estado = document.getElementById('estado');

    const url = `https://viacep.com.br/ws/${cep}/json/`;

   
    //faz a connecção com API
    fetch(url)

        // then: Executa se a Promise foi realizada com sucesso

        .then((response) => {
            return response.json()
        }) //esperando so dados

        .then((data) => {
            if (data.erro) {
                resultado.innerHTML = '<p class="erro"> CEP não encontrado.</p>';
            } else {
                console.log(data);
                //onde tem data pode ser qualquer nome
                //cria elementos para exibir dados
               
                // colocar o valor que esta vindo da API  acima no input
                  
          logradouro.value= data.logradouro
          localidade.value= data.localidade
          uf.value= data.uf
          estado.value= data.estado
          ddd.value= data.ddd
                   
        }

        }).catch((error) => {
            resultado.innerHTML = `erro: ${error}`

        })
}
//outra forma de fazer
 // resultado.innerHTML =

                //     //  `<p>CEP: ${data.cep}</p>
                //     // <p>Logradouro: ${data.logradouro}</p>
                //     // <p>Bairro: ${data.localidade}</p>
                //     // <p>Cidade: ${data.uf}</p>
                //     // <p>Estado:${data.estado}</p>
                //     // <p>ddd: ${data.ddd}</p>
                //     // <p>Nome:${nome.value}</p>
                //     // <p>E-mail:${email.value}</p>
                //    `
                

                //isNaN (Diz que não pe número)