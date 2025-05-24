# Utilise l'image officielle Node.js
FROM node:18

# Crée un dossier de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste
COPY . .

# Expose le port
EXPOSE 3002

# Commande à exécuter
CMD ["node", "server.js"]
