// Funcionarios Model concluido

import { v4 as uuid}  from "uuid";

class FuncionariosM {
    constructor(nome, email, cargo, cpf, telefone) {
        this.id = uuid();
        this.nome = nome;
        this.email = email;
        this.cargo = cargo;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

export default FuncionariosM;