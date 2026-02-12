📦 Dependências do Projeto
Este documento lista as dependências necessárias para rodar o frontend, backend e a infraestrutura com Docker.

🔹 Frontend (Next.js + TypeScript)
✅ Requisitos:
Node.js
npm

📚 Dependências principais:
next
react
react-dom
axios

🛠 Dependências de desenvolvimento:
typescript
tailwindcss
postcss
autoprefixer
eslint

▶ Como instalar e executar:
cd frontend
npm install
npm run dev

🔹 Backend (Node.js + Express + TypeScript)
✅ Requisitos
Node.js
npm
MySQL
Redis

📚 Dependências principais:
express
cors
mysql2
redis
dotenv

🛠 Dependências de desenvolvimento:
typescript
ts-node-dev
@types/node
@types/express

▶ Como instalar e executar:
cd backend
npm install
npm run dev ou npm start

🔹 Infraestrutura (Docker)
✅ Requisitos
Docker
Docker Compose

🧱 Serviços configurados no docker-compose.yml:
nginx
frontend
backend
mysql
redis
promtail
loki
grafana

▶ Como executar com Docker
Na raiz do projeto:
docker-compose up --build
Para parar os containers:
docker-compose down

Grafana disponível em:
http://localhost:8080/grafana/
