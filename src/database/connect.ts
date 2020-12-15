import { createConnection } from 'typeorm'

createConnection() //Criando a conexão com o banco de dados
.then(()=> console.log('Conectado ao banco com sucesso')) // mostrando resultado no console