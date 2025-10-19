// Dados da equipe em formato de array de objetos
const teamData = [
    {
        name: "Ana Costa",
        role: "CEO/Diretora Geral",
        photo: "data:image/png;base64,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",
        level: 1,
        reportsTo: null
    },
    {
        name: "Pedro Almeida",
        role: "Gerente Financeiro e Administrativo",
        photo: "data:image/png;base64,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",
        level: 2,
        reportsTo: "Ana Costa"
    },
    {
        name: "Sofia Ribeiro",
        role: "Gerente Comercial e de Marketing",
        photo: "data:image/png;base64,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",
        level: 2,
        reportsTo: "Ana Costa"
    },
    {
        name: "Lúcia Santos",
        role: "Analista Financeiro Júnior",
        photo: "data:image/png;base64,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",
        level: 3,
        reportsTo: "Pedro Almeida"
    },
    {
        name: "Carlos Ferreira",
        role: "Auxiliar Administrativo",
        photo: "data:image/png;base64,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",
        level: 3,
        reportsTo: "Pedro Almeida"
    },
    {
        name: "Ricardo Soares",
        role: "Analista de Vendas Pleno",
        photo: "data:image/png;base64,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",
        level: 3,
        reportsTo: "Sofia Ribeiro"
    },
    {
        name: "Juliana Oliveira",
        role: "Assistente de Marketing Digital",
        photo: "data:image/png;base64,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",
        level: 3,
        reportsTo: "Sofia Ribeiro"
    },
];

// Função para construir a árvore hierárquica a partir do array
function buildHierarchyTree(data) {
    const map = {};
    const tree = [];

    // 1. Mapeia todos os itens por nome e inicializa o array de filhos
    data.forEach(item => {
        map[item.name] = { ...item, children: [] };
    });

    // 2. Conecta os filhos aos pais
    data.forEach(item => {
        const node = map[item.name];

        if (item.reportsTo === null) {
            // Este é o nó raiz (Diretor de T.I.)
            tree.push(node);
        } else if (map[item.reportsTo]) {
            // Conecta o nó ao seu líder
            map[item.reportsTo].children.push(node);
        }
    });

    return tree;
}

// Função para criar o elemento de uma pessoa (cartão)
function createPersonElement(person) {
    const personDiv = document.createElement('div');
    personDiv.classList.add('person');

    const photoContainer = document.createElement('div');
    photoContainer.classList.add('photo-container');

    const photoImg = document.createElement('img');
    photoImg.src = person.photo;
    photoImg.alt = person.name;

    photoContainer.appendChild(photoImg);

    const roleElement = document.createElement('div');
    roleElement.classList.add('role');
    roleElement.textContent = person.role;

    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = person.name;

    personDiv.appendChild(photoContainer);
    personDiv.appendChild(roleElement);
    personDiv.appendChild(nameElement);

    return personDiv;
}

// Função recursiva para renderizar um nó (líder) e seus filhos
function renderNode(personNode) {
    // Contêiner principal para o líder e seus subordinados
    const container = document.createElement('div');
    container.classList.add('node-container');

    // 1. Adiciona o cartão do líder
    const personElement = createPersonElement(personNode);
    container.appendChild(personElement);

    // 2. Verifica se há subordinados
    if (personNode.children && personNode.children.length > 0) {
        // Contêiner para todos os subordinados (chave para o alinhamento centralizado com Flexbox)
        const childrenContainer = document.createElement('div');
        childrenContainer.classList.add('children-container');

        // Renderiza recursivamente cada subordinado
        personNode.children.forEach(child => {
            childrenContainer.appendChild(renderNode(child));
        });

        container.appendChild(childrenContainer);
    }

    return container;
}


// Função principal para renderizar o organograma
function renderOrganogram() {
    const organogram = document.querySelector('.organogram');
    organogram.innerHTML = ''; // Limpa o conteúdo existente

    // Constrói a estrutura de árvore
    const hierarchicalData = buildHierarchyTree(teamData);

    // Renderiza a partir do(s) nó(s) raiz (deverá ser apenas um neste caso: Miguel)
    hierarchicalData.forEach(rootNode => {
        organogram.appendChild(renderNode(rootNode));
    });
}

// Renderiza o organograma ao carregar a página
document.addEventListener('DOMContentLoaded', renderOrganogram);

/*
 * ===================================================================
 * NOTA IMPORTANTE: Para o alinhamento funcionar (subordinados centralizados
 * sob seus líderes), você DEVE incluir o CSS da resposta anterior, que
 * utiliza as classes 'node-container' e 'children-container' com Flexbox.
 * ===================================================================
 */