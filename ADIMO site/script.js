document.getElementById('pesquisarImoveis').addEventListener('click', function() {
    alert('Aqui você pode pesquisar a carteira de imóveis para locação e montar uma lista dos imóveis que lhe interessam.');
});

document.getElementById('reservarImovel').addEventListener('click', function() {
    alert('Caso você se interesse em alugar algum imóvel, você deve dirigir à imobiliária.');
});

document.getElementById('preencherFichaCadastral').addEventListener('click', function() {
    alert('A ficha cadastral do cliente é preenchida no sistema.');
});

document.getElementById('analisarFichaCadastral').addEventListener('click', function() {
    alert('O ficha cadastral é analisada por um analista de crédito da empresa que, consultando a Serasa, faz um levantamento da situação do cliente na praça e elabora um parecer.');
});

document.getElementById('efetuarLocacao').addEventListener('click', function() {
    alert('Sendo aprovada a ficha cadastral, o cliente recebe uma mensagem via sistema e efetua a locação.');
});

document.getElementById("pesquisarImoveis").addEventListener('click', function(event){
    event.preventDefault(); // Previne o comportamento padrão do botão de enviar
    window.location.href = "pesquisaImovel.html"; // Redireciona para a página de login
});

document.getElementById("reservarImovel").addEventListener('click', function(event){
    event.preventDefault(); // Previne o comportamento padrão do botão de enviar
    window.location.href = "telaImovel.html"; // Redireciona para a página de login
});

document.getElementById("preencherFichaCadastral").addEventListener('click', function(event){
    event.preventDefault(); // Previne o comportamento padrão do botão de enviar
    window.location.href = "criarCadastral.html"; // Redireciona para a página de login
});

document.getElementById("analisarFichaCadastral").addEventListener('click', function(event){
    event.preventDefault(); // Previne o comportamento padrão do botão de enviar
    window.location.href = "fichaCliente.html"; // Redireciona para a página de login
});

document.getElementById("reservarImovel").addEventListener('click', function(event){
    event.preventDefault(); // Previne o comportamento padrão do botão de enviar
    window.location.href = "telaImovel.html"; // Redireciona para a página de login
});
