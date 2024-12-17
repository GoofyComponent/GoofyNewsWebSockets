# node 18 react npm install et npm run dev
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies

COPY package.json ./

RUN npm install

# Bundle app source

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
