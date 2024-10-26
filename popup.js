document.addEventListener('DOMContentLoaded', function() {
    const consultarBtn = document.getElementById('consultar');
    const novaConsultaBtn = document.getElementById('novaConsulta');
    const resultadoDiv = document.getElementById('resultado');
    const cnpjInput = document.getElementById('cnpj');

    // Função para realizar a consulta
    function realizarConsulta(cnpj) {
        fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
            .then(response => response.json())
            .then(data => {
                const html = `
                    <h3>Resultado da Consulta CNPJ</h3>
                    <p><strong>Razão Social:</strong> ${data.razao_social || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.razao_social || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>CNPJ:</strong> ${data.cnpj || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.cnpj || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>Nome Fantasia:</strong> ${data.nome_fantasia || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.nome_fantasia || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>Situação Cadastral:</strong> ${data.situacao_cadastral || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.situacao_cadastral || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>Data Situação Cadastral:</strong> ${data.data_situacao_cadastral || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.data_situacao_cadastral || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>Endereço:</strong> ${data.logradouro || 'Não informado'} ${data.numero ? ', ' + data.numero : ''} 
                        <button class="copy-btn" data-clipboard-text="${data.logradouro || ''} ${data.numero || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>Bairro:</strong> ${data.bairro || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.bairro || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>CEP:</strong> ${data.cep || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.cep || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>Cidade:</strong> ${data.municipio || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.municipio || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>Estado:</strong> ${data.uf || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.uf || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>Telefone:</strong> ${data.ddd_telefone_1 || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.ddd_telefone_1 || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                    <p><strong>CNAE:</strong> ${data.cnae_fiscal_descricao || 'Não informado'} 
                        <button class="copy-btn" data-clipboard-text="${data.cnae_fiscal_descricao || ''}"><i class="far fa-copy"></i> Copiar</button>
                    </p>
                `;
                resultadoDiv.innerHTML = html;

                // Adiciona evento de cópia para os botões
                const copyBtns = document.querySelectorAll('.copy-btn');
                copyBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        const textToCopy = btn.getAttribute('data-clipboard-text');
                        navigator.clipboard.writeText(textToCopy)
                            .then(() => {
                                btn.querySelector('i').classList.remove('far');
                                btn.querySelector('i').classList.add('fas');
                                btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                                setTimeout(() => {
                                    btn.querySelector('i').classList.remove('fas');
                                    btn.querySelector('i').classList.add('far');
                                    btn.innerHTML = '<i class="far fa-copy"></i> Copiar';
                                }, 1500);
                            })
                            .catch(err => {
                                console.error('Erro ao copiar texto:', err);
                                alert('Erro ao copiar texto. Por favor, tente novamente.');
                            });
                    });
                });

                // Salva os dados no localStorage
                localStorage.setItem('ultimaConsulta', JSON.stringify(data));
            })
            .catch(error => {
                resultadoDiv.innerHTML = '<p>Erro ao consultar o CNPJ.</p>';
                console.error('Erro ao consultar CNPJ:', error);
            });
    }

    // Verifica se há dados de consulta armazenados e exibe-os ao carregar a página
    const ultimaConsulta = JSON.parse(localStorage.getItem('ultimaConsulta'));
    if (ultimaConsulta) {
        realizarConsulta(ultimaConsulta.cnpj);
    }

    // Evento de clique no botão "Consultar"
    consultarBtn.addEventListener('click', function() {
        const cnpj = cnpjInput.value.replace(/\D/g, '');

        if (cnpj.length !== 14) {
            alert('Por favor, insira um CNPJ válido.');
            return;
        }

        realizarConsulta(cnpj);
    });

    // Evento de clique no botão "Nova Consulta"
    novaConsultaBtn.addEventListener('click', function() {
        resultadoDiv.innerHTML = '';
        cnpjInput.value = '';
        localStorage.removeItem('ultimaConsulta');
    });
});
