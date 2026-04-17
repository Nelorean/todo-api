# 📝 Todo API

API REST para gerenciamento de tarefas com autenticação JWT, desenvolvida com Node.js, Express e MongoDB.

## 🌐 Deploy

API disponível em: https://todo-api-5nx0.onrender.com


## 🚀 Tecnologias

- **Node.js** + **Express** — servidor e roteamento
- **MongoDB** + **Mongoose** — banco de dados
- **JSON Web Token (JWT)** — autenticação
- **Bcryptjs** — criptografia de senhas
- **Dotenv** — variáveis de ambiente

## 📁 Estrutura do Projeto

```
todo-api/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   └── app.js
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

## ⚙️ Como rodar localmente

### Pré-requisitos
- Node.js instalado
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/Nelorean/todo-api.git

# Entre na pasta
cd todo-api

# Instale as dependências
npm install

# Crie o arquivo .env baseado no .env.example
cp .env.example .env
```

Preencha o arquivo `.env` com suas credenciais:

```env
MONGODB_URI=sua_uri_do_mongodb_atlas
PORT=3000
JWT_SECRET=sua_chave_secreta
```

```bash
# Rode o servidor em modo desenvolvimento
npm run dev
```

A API estará disponível em `http://localhost:3000`

## 🔐 Autenticação

As rotas de tarefas são protegidas. Para acessá-las, inclua o token JWT no header da requisição:

```
Authorization: Bearer <seu_token>
```

## 📌 Endpoints

### Auth

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/auth/register` | Registrar novo usuário |
| POST | `/auth/login` | Fazer login e receber token |

#### Registro — `POST /auth/register`
```json
{
  "name": "Seu Nome",
  "email": "seu@email.com",
  "password": "123456"
}
```

#### Login — `POST /auth/login`
```json
{
  "email": "seu@email.com",
  "password": "123456"
}
```
Resposta:
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---

### Tasks (🔒 requer token)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/tasks` | Listar todas as tarefas |
| POST | `/tasks` | Criar nova tarefa |
| PUT | `/tasks/:id` | Atualizar tarefa |
| DELETE | `/tasks/:id` | Deletar tarefa |

#### Criar tarefa — `POST /tasks`
```json
{
  "title": "Minha tarefa",
  "description": "Descrição da tarefa"
}
```

#### Atualizar tarefa — `PUT /tasks/:id`
```json
{
  "title": "Título atualizado",
  "completed": true
}
```

## 🌱 Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `MONGODB_URI` | String de conexão do MongoDB Atlas |
| `PORT` | Porta do servidor (padrão: 3000) |
| `JWT_SECRET` | Chave secreta para assinar os tokens JWT |
