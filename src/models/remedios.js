// Remedios Model concluido
import {v4 as uuid } from 'uuid' 

class RemediosM {
    constructor(nome, principio_ativo, laboratorio, preco, estoque) {
        this.ID = uuid()
        this.NOME = nome;
        this.PRINCIPIO_ATIVO = principio_ativo;
        this.LABORATORIO = laboratorio;
        this.PRECO = preco;
        this.ESTOQUE = estoque;
    }
}

export default RemediosM;