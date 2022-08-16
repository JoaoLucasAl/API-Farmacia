import {v4 as uuid } from 'uuid' 

class ClientesM {
    constructor(nome, email, telefone, cpf ) {
        this.ID = uuid()
        this.NOME = nome;
        this.EMAIL = email;
        this.TELEFONE = telefone;
        this.CPF = cpf;
        
    }
}

export default ClientesM;