# Desafio 2 

Desafio 2 do Hiring Coders

## Description

O desafio consiste em fazer um sistema de Gestão de Cadastros contendo:

1. Dados de clientes, endereços e produtos estruturados e
2. Dados no local storaga.

Essa API foi criada usando [Create React App](https://github.com/facebook/create-react-app)

O templete da página foi do site https://templatemo.com/contact

### Como Usar

Foi feita uma interface simples usando apenas o localStore para cadastrar clientes e produtos.

A partir do momento que é adicionado novo produto o API atualiza a lista de novos, não foi implementado localStore.clear(), a ideia é ver como pode ser escalonado com o backend para automaticamente o site ser atualizado.

Como foi dito acima, hoje utiliza o localstore, mas pode-se fazer uma integração com algum banco de dados.

### Campos

Clientes -

Nome
Data de Nascimento
Cartão de Crédito
Endereço

Produto - 

nome 
descrição
preço

## Installation

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# Clone este repositório
$ git clone <https://github.com/Yuri-MRQ/desafio2-gama.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd registration-management

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ pnpm run start```

## License
MIT License
