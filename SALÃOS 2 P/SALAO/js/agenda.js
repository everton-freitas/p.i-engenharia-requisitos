document.addEventListener('DOMContentLoaded', function () {
    const servico = document.getElementById('servico');
    const subcategoriaSelecao = document.getElementById('subcategoria-selecao');
    const preco = document.getElementById('preco');
    const precoValor = document.getElementById('preco-valor');
    const horario = document.getElementById('horario');
    const data = document.getElementById('data');

    const servicoTexto = document.getElementById('servico-texto');
    const subcategoriasTexto = document.getElementById('subcategorias-texto');
    const dataTexto = document.getElementById('data-texto');
    const horarioTexto = document.getElementById('horario-texto');
    const precoTexto = document.getElementById('preco-texto');

    const resumo = document.getElementById('resumo');

    // Função para calcular o preço das subcategorias
    function calcularPrecoSubcategorias(subcategorias) {
        const precoSubcategoria = {
            realinhamento: 150,
            colocacao: 50,
            reflexos: 270, // Exemplo para curto
            smaltacao: 15,
            manicure: 28,
            pedicureManicure: 55,
            pedicure: 28,
            designSobrancelhas: 48,
            henna: 60,
            limpezaSobrancelhas: 40,
            maquiagem: 100,
            relaxante: 200,
            terapeutica: 250,
            pintura: 100,
            drenagemManual: 70,
            drenagemPosCirurgica: 70,
            drenagemFacial: 40,
            limpezaPele: 100,
            alongamentoGel: 140,
            banhoGel: 100,
            manutencaoGel: 95,
            remocaoGel: 20,
            pernasFemininas: 30,
            axilasFemininas: 24,
            esfoliacaoPernasFemininas: 15,
            virilhaCavadaFeminina: 38,
            bracosMasculinos: 35,
            costasMasculinas: 55,
            toraxMasculino: 40,
            pernasMasculinas: 65
        };

        let total = 0;
        subcategorias.forEach(subcategoria => {
            if (precoSubcategoria[subcategoria]) {
                total += precoSubcategoria[subcategoria];
            }
        });
        return total;
    }

    // Exibe subcategorias de acordo com o serviço selecionado
    servico.addEventListener('change', function () {
        const servicoSelecionado = this.value;

        // Limpar o valor do campo preço quando o serviço for alterado
        preco.classList.add('hidden');
        precoValor.value = '';

        // Atualizar as subcategorias com base no serviço
        if (servicoSelecionado === 'massagem') {
            subcategoriaSelecao.innerHTML = `
                <option value="relaxante">Relaxante | R$ 200</option>
                <option value="terapeutica">Terapêutica | R$ 250</option>
                <option value="pintura">Pintura | R$ 100</option>
            `;
        } else if (servicoSelecionado === 'manicure') {
            subcategoriaSelecao.innerHTML = `
                <option value="smaltacao">Esmaltacao | R$ 15</option>
                <option value="manicure">Manicure | R$ 28</option>
                <option value="pedicureManicure">Pedicure + Manicure | R$ 55</option>
                <option value="pedicure">Pedicure | R$ 28</option>
            `;
        } else if (servicoSelecionado === 'cabeleleira') {
            subcategoriaSelecao.innerHTML = `
                <option value="realinhamento">Realinhamento Térmico | R$ 150</option>
                <option value="colocacao">Colocação de Tinta | R$ 50</option>
                <option value="reflexos">Reflexos ou Luzes | R$ 270 (curto)</option>
            `;
        } else if (servicoSelecionado === 'esteticista') {
            subcategoriaSelecao.innerHTML = `
                <option value="drenagemManual">Drenagem Manual | R$ 70</option>
                <option value="drenagemPosCirurgica">Drenagem Pós-Cirurgica | R$ 70</option>
                <option value="drenagemFacial">Drenagem Facial | R$ 40</option>
                <option value="limpezaPele">Limpeza de Pele | R$ 100</option>
            `;
        } else {
            subcategoriaSelecao.innerHTML = ''; // Limpar subcategorias
        }

        subcategoriaSelecao.classList.remove('hidden');
    });

    // Quando as subcategorias são selecionadas, calcular e mostrar o preço
    subcategoriaSelecao.addEventListener('change', function () {
        const servicoSelecionado = servico.value;
        const subcategoriasSelecionadas = Array.from(this.selectedOptions).map(option => option.value);

        // Calcular o preço das subcategorias
        let precoSubcategorias = calcularPrecoSubcategorias(subcategoriasSelecionadas);

        // Exibir o preço total (somando apenas as subcategorias)
        precoValor.value = 'R$ ' + precoSubcategorias;

        // Mostrar o campo de preço
        preco.classList.remove('hidden');

        // Atualizar o resumo com as escolhas
        servicoTexto.textContent = servico.options[servico.selectedIndex].text;
        subcategoriasTexto.textContent = subcategoriasSelecionadas.join(', ');
        dataTexto.textContent = data.value;
        horarioTexto.textContent = horario.value;
        precoTexto.textContent = 'R$ ' + precoSubcategorias;

        // Exibir o resumo
        resumo.classList.remove('hidden');
    });

    // Carrega horários disponíveis para a data escolhida
    document.getElementById('data').addEventListener('change', function () {
        horario.innerHTML = `
            <option value="08:00">08:00</option>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
        
        `;
   
        alert(`Serviço: ${servico}\nSubcategoria: ${subcategoria}\nData: ${data}\nHorário: ${horario}\nPreço: R$ ${preco}`);
   
    });
});
function agendar() {
    alert('Agendamento concluido com sucesso');
    
}