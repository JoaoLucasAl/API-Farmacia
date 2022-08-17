// Vendas-DAO concluido

class VendasD {
    constructor(bd) {
      this.bd = bd;
    }
  
    verVendas() {
      return new Promise((resolve, reject) => {
        const query = "SELECT * FROM VENDAS";
  
        this.bd.all(query, (error, response) => {
          if (error) reject(`Erro ao acessar o BD. ${error}`);
          else resolve(response);
        });
      });
    }
  
    verVendasById(id) {
      return new Promise((resolve, reject) => {
        const query = "SELECT * FROM VENDAS WHERE ID = (?)";
  
        this.bd.get(query, id, (error, response) => {
          if (error) reject(`Erro ao acessar o BD. ${error}`);
          else resolve(response);
        });
      });
    }
  
    addVendas(venda) {
      return new Promise((resolve, reject) => {
        const query = `INSERT INTO VENDAS (ID, REMEDIO_ID, QUANTIDADE, PRECO, DESCONTO, FUNCIONARIO_ID, CLIENTE_ID)
               VALUES (?,?,?,?,?,?,?)`;
  
        let obj = Object.values(venda);
        this.bd.run(query, obj, (error) => {
          if (error) reject(`Erro ao adicionar nova venda. ${error}`);
          else resolve(`Nova venda adicionada com sucesso ao BD.`);
        });
      });
    }
  
    deleteVendas(id) {
      return new Promise((resolve, reject) => {
        const query = `DELETE FROM VENDAS WHERE ID = (?)`;
  
        this.bd.run(query, id, (error) => {
          if (error)
            reject(`Erro ao deletar a venda de ID:${id}, error:${error}`);
          else resolve(`Venda com ID:${id} deletado com sucesso`);
        });
      });
    }
  
    atualizarVendas(data, id) {
      return new Promise((resolve, reject) => {
        const query = `UPDATE VENDAS SET REMEDIO_ID = (?), QUANTIDADE = (?), PRECO = (?), DESCONTO = (?), FUNCIONARIO_ID = (?), CLIENTE_ID = (?) WHERE ID = (?)`;
        const patch = [data[0], data[1], data[2], data[3], data[4], data[5], id];
  
        this.bd.run(query, patch, (error) => {
          if (error)
            reject(
              `Erro ao fazer a atualização dos dados da venda. ${error}.`
            );
          else resolve(`Atualização realizada com sucesso.`);
        });
      });
    }
  }
  
  export default VendasD;
  