# CleanHouse - Microserviço de Agendamentos

## 👥 Alunos
- Thiago Boiko

## 📦 Links dos Artefatos

### GitHub
- **Repositório:** https://github.com/thiago-boiko/cleanhouse-agendamentos

### Docker Hub
- **Imagem:** https://hub.docker.com/r/thiagoboiko/cleanhouse-agendamentos

## 🐳 Como Executar com Docker

### Comando para rodar:

**Imagem disponível em:**
```bash
docker pull thiagoboiko/cleanhouse-agendamentos:latest

docker run -d -p 3001:3001 --name cleanhouse-agendamentos -e MONGODB_URI="mongodb+srv://thiagoboiko:123@agendamentoscleanhouse.2aequjw.mongodb.net/test?retryWrites=true&w=majority&appName=AgendamentosCLEANHOUSE" thiagoboiko/cleanhouse-agendamentos:1.0.0

### Acessar a aplicação:
- **Health Check:** http://localhost:3001
- **API Agendamentos:** http://localhost:3001/api/agendamentos
- **API Avaliações:** http://localhost:3001/api/avaliacoes

## 📊 Endpoints Disponíveis

### Agendamentos
- `GET /api/agendamentos` - Listar todos
- `GET /api/agendamentos/:id` - Buscar por ID
- `POST /api/agendamentos` - Criar novo
- `PUT /api/agendamentos/:id` - Atualizar
- `DELETE /api/agendamentos/:id` - Cancelar

### Avaliações
- `GET /api/avaliacoes` - Listar todas
- `GET /api/avaliacoes/:id` - Buscar por ID
- `POST /api/avaliacoes` - Criar nova

## 🗄️ Banco de Dados
- **Tipo:** MongoDB Atlas (Cloud)
- **Collections:** agendamentos, avaliacoes

## 🛠️ Tecnologias Utilizadas
- Node.js 18
- Express.js
- MongoDB + Mongoose
- Docker
