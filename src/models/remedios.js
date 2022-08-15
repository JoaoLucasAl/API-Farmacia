// Remedios Model concluido

import { v4 as uuid}  from "uuid";


class RemediosM {
    constructor(nome, principio_ativo, laboratorio, preco, quantidade) {
        this.id = uuid()
        this.nome = nome;
        this.principio_ativo = principio_ativo;
        this.laboratorio = laboratorio;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

export default RemediosM;