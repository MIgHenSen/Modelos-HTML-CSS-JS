function calcularMedia() {
    // 1. Obter o valor do campo de texto (textarea)
    const inputElement = document.getElementById('inputNumeros');
    const inputTexto = inputElement.value;

    // Elementos para exibir resultados e mensagens
    const totalElementosElement = document.getElementById('totalElementos');
    const mediaCalculadaElement = document.getElementById('mediaCalculada');
    const mensagemElement = document.getElementById('mensagem');

    // Limpar resultados e mensagens anteriores
    totalElementosElement.textContent = "Total de elementos: 0";
    mediaCalculadaElement.textContent = "Média: 0";
    mensagemElement.style.display = 'none';

    // 2. Processar a entrada: separar por vírgula e remover espaços em branco
    // O método split(',') divide a string em um array, usando a vírgula como separador.
    const valoresTexto = inputTexto.split(',');

    // Array que armazenará apenas os números válidos
    const numerosValidos = [];

    // Variável para rastrear se houve algum valor inválido
    let encontrouInvalido = false;

    // 3. Iterar sobre os valores e validar/converter para número
    for (const valor of valoresTexto) {
        // Remover espaços em branco no início e fim do valor
        const trimmedValor = valor.trim();

        // Se o valor estiver vazio (ex: se o usuário digitou "10, , 20" ou apenas espaço), ignora
        if (trimmedValor === '') {
            continue;
        }

        // Tentar converter o valor para um número (float/decimal)
        const numero = parseFloat(trimmedValor);

        // O 'isNaN(numero)' verifica se a conversão resultou em "Not a Number".
        // O '!isFinite(numero)' verifica se o número não é infinito (como resultado de divisão por zero).
        if (isNaN(numero) || !isFinite(numero)) {
            encontrouInvalido = true;
            break; // Para o loop assim que encontrar o primeiro valor inválido
        }
        
        // Se for um número válido, adiciona ao array de números
        numerosValidos.push(numero);
    }

    // 4. Exibir mensagem de erro, se houver
    if (encontrouInvalido) {
        mensagemElement.textContent = "Erro: Certifique-se de digitar apenas números (inteiros ou decimais) separados por vírgula.";
        mensagemElement.classList.add('erro');
        mensagemElement.style.display = 'block';
        return; // Sai da função
    }

    // 5. Verificar se há elementos para calcular
    const totalElementos = numerosValidos.length;
    totalElementosElement.textContent = `Total de elementos: ${totalElementos}`;

    if (totalElementos === 0) {
        mensagemElement.textContent = "Por favor, digite pelo menos um número para calcular a média.";
        mensagemElement.classList.add('erro');
        mensagemElement.style.display = 'block';
        return; // Sai da função
    }

    // 6. Calcular a soma
    // O método reduce() é usado para somar todos os elementos do array
    const soma = numerosValidos.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);

    // 7. Calcular a média
    // Para obter um resultado mais limpo, a média é arredondada para 2 casas decimais (toFixed(2))
    const media = soma / totalElementos;
    const mediaFormatada = media.toFixed(2);

    // 8. Exibir os resultados
    mediaCalculadaElement.textContent = `Média: ${mediaFormatada}`;
    
    // Se chegou aqui, não há erros, exibe mensagem de sucesso (opcional)
    // mensagemElement.textContent = "Cálculo realizado com sucesso!";
    // mensagemElement.classList.remove('erro');
    // mensagemElement.style.display = 'block';
}