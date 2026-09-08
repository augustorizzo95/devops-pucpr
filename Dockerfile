# Usa a imagem oficial do Node.js
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta padrão que o Vite utiliza
EXPOSE 5173

# Inicia o servidor de desenvolvimento expondo para a rede do container
CMD ["npm", "run", "dev", "--", "--host"]