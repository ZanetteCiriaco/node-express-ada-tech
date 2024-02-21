FROM node:14

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", ".env", "./"]

COPY ./src ./src

RUN npm install

CMD ["npm", "run", "dev"]