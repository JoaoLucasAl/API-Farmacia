import {v4 as uuid } from 'uuid' 

class VendasM {
    constructor(remedio_id, quantidade, preco, desconto, funcionario_id, cliente_id ) {
        this.ID = uuid()
        this.REMEDIO_ID = remedio_id;
        this.QUANTIDADE = quantidade;
        this.PRECO = preco;
        this.DESCONTO = desconto;
        this.FUNCIONARIO_ID = funcionario_id;
        this.CLIENTE_ID = cliente_id;     
        
    }
}

export default VendasM;