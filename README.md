# Dashboard Empório da Cerveja

## Aplicação de dashboard para gerenciar usuários e produtos em diferentes níveis.

### 🎲 Rodando o projeto

```bash
# Clone este repositório
$ git clone <https://github.com/meirylandmelo/projeto-final-dashboard>

# Acesse a pasta do projeto no terminal/cmd
$ cd projeto-final-dashboard

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ yarn install ou npm install

# Execute a aplicação
 json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000

# Vá para a pasta frontend
$ cd frontend

# Instale as dependencias
$ yarn install ou npm install

# Execute a aplicação
$ yarn start ou npm run start
```

### Features

- [x] Home (contagem de usuários e prosutos)
- [x] Listagem de produtos (apenas para usuários admin)
- [x] Cadastro de produto (apenas para usuários admin)
- [x] Excluir Produto (apenas para usuários admin)
- [x] Listagem de usuários
- [x] Cadastro de usuário
- [x] Excluir usuário (apenas para usuários admin)

### Para Logar como administrador

- email: helen@facebook.com | senha: 123123
- email: mauricio@google.com | senha: 123123
