FROM node:20-slim

WORKDIR /app

# Instala dependências necessárias para o sharp (Debian/Ubuntu)
RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Configuração recomendada para o sharp
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1

# Copia os arquivos de dependência primeiro (para melhor cache)
COPY package*.json ./

# Instala as dependências (incluindo sharp)
RUN npm install --verbose

# Copia o restante do projeto (após instalar dependências para otimizar cache)
EXPOSE 3001

CMD ["npm", "run", "dev"]