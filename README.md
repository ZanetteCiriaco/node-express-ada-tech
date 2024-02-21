# node-express-ada-tech

API para Gerenciamento de Cardápios Online. Os usuários podem autenticar-se e gerenciar seus menus.

Projeto do módulo node express do curso da Ada tech, trilha backend.

## Instruções de Configuração

1. Criar arquivo `.env`

   Exemplo (preencher os campos vazios):

   ```plaintext
   PORT=
   DB_USER='postgres'
   DB_HOST='db'
   DB_NAME='postgres_db'
   DB_PASSWORD=
   DB_PORT=

   JWT_SECRET=
   JWT_EXPIRESIN=
   
2. Instalar o Docker https://www.docker.com/
    
## Executar:
    npm install
    docker-compose build
    docker-compose up
    

## Rotas
    públicas:
       /auth/register
       /auth/login
       /users

    protegidas:
       /user
       /menu/id

