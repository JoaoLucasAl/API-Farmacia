// Funcionarios Model concluido
import {v4 as uuid } from 'uuid' 

class FuncionariosM {
    constructor(nome, email, telefone, cargo, cpf ) {
        this.ID = uuid()
        this.NOME = nome;
        this.EMAIL = email;
        this.TELEFONE = telefone;
        this.CARGO = cargo;
        this.CPF = cpf;
        
    }
}

export default FuncionariosM;