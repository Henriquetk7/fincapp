# fincapp

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [PostgreSQL](https://www.postgresql.org/) rodando localmente

## Configuração

```bash
cd api
npm install
```

Crie o arquivo `.env` na pasta `api/` com base no `.env.example`:

```env
PORT=8000
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/fincdb?schema=public"
JWT_SECRET="seu-secret-aqui"
JWT_EXPIRES_IN="7d"
```

## Banco de dados

```bash
npx prisma generate
npx prisma migrate deploy
```

## Rodar a API

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:8000`.

## Rotas

| Método | Rota    | Descrição           |
| ------ | ------- | ------------------- |
| GET    | /health | Health check        |
| POST   | /auth   | Autenticação        |
| POST   | /users  | Criação de usuários |
