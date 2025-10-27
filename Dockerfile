# Imagem base do Node.js
FROM node:18-alpine

# Informações do mantenedor
LABEL maintainer="seu-email@exemplo.com"
LABEL description="Microserviço de Agendamentos - CleanHouse"

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install --production

# Copiar todo o código da aplicação
COPY . .

# Expor a porta que a aplicação usa
EXPOSE 3001

# Variáveis de ambiente padrão (podem ser sobrescritas)
ENV NODE_ENV=production
ENV PORT=3001

# Comando para iniciar a aplicação
CMD ["node", "src/server.js"]