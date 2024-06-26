# Projeto Trabalho C3

Este projeto é uma aplicação Node.js com TypeScript e Prisma, implementando autenticação JWT e dockerização da aplicação.

## Configuração Inicial

1. **Node.js e TypeScript**: Certifique-se de ter o Node.js instalado. Use TypeScript para desenvolvimento.
2. **Prisma e Banco de Dados**: Configure o Prisma com um banco de dados SQLite. O arquivo `dev.db` é usado para desenvolvimento.
   - Crie um arquivo `.env` na raiz do projeto com `DATABASE_URL="file:./dev.db"`.

## Padrão MVC e Modelos

- Implementação do padrão MVC com controllers, rotas e modelos conforme Quickstart do Prisma.
- Adicionado modelo `Comment`:
  - Um Post pode ter vários Comentários.
  - Cada Comentário pertence a apenas um Post.
  - Usuários podem fazer Comentários.

## API

- **Endpoints Implementados**:
  - CRUD para Posts e Comentários.
  - Autenticação JWT com rotas para login e registro de usuários.

## Autenticação JWT

- **Middleware de Autenticação JWT**:
  - Implementado middleware para verificar tokens JWT em rotas protegidas.
  - Segurança na geração, armazenamento e validação de tokens.

## Dockerização

- **Dockerfile**:
  - Configurado Dockerfile para construir a imagem da aplicação.
  - Dockerização completa para fácil implantação e execução em diferentes ambientes.

## Execução do Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/DiegoSantos68/trabalho-c3.git
   cd trabalho-c3
