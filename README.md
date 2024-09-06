# WikigitHub

WikigitHub é uma aplicação web que permite aos usuários buscar, visualizar e gerenciar repositórios do GitHub. O projeto foi desenvolvido com React e consome a API do GitHub para obter informações sobre repositórios. 

## Funcionalidades

- **Busca de Repositórios**: Os usuários podem buscar repositórios do GitHub inserindo o nome do repositório desejado.
- **Lista de Repositórios**: Os repositórios encontrados são exibidos em uma lista, mostrando o nome, nome completo e um link para visualizar o repositório no GitHub.
- **Favoritos**: Os usuários podem marcar repositórios como favoritos, permitindo um acesso mais rápido às suas opções preferidas.
- **Remoção de Repositórios**: Os usuários podem remover repositórios da lista.
- **Paginação**: A aplicação implementa paginação, permitindo que os usuários carreguem mais repositórios conforme necessário.
- **Acessibilidade**: Melhorias foram feitas para garantir que a aplicação seja acessível para usuários de tecnologias assistivas, com uso de atributos ARIA e rotulagem adequada.

## Melhorias Implementadas

- **Funcionalidade de Favoritos**: Adicionada a capacidade de favoritar repositórios, armazenando essa informação no estado da aplicação.
- **Paginação**: Implementada a funcionalidade de paginação para gerenciar grandes listas de repositórios, permitindo que os usuários carreguem mais itens conforme necessário.
- **Acessibilidade**: A aplicação foi melhorada para ser mais acessível, incluindo elementos interativos com atributos ARIA e rótulos adequados, facilitando a navegação para usuários de tecnologias assistivas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **Styled-components**: Utilizado para estilização dos componentes.
- **Axios**: Para realizar chamadas à API do GitHub.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/davidmelo84/wikigitHub.git
