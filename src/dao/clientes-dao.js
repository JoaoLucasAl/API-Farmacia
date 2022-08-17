class ClientesD {
    constructor(bd) {
      this.bd = bd;
    }
  
    verClientes() {
      return new Promise((resolve, reject) => {
        const query = "SELECT * FROM CLIENTES";
  
        this.bd.all(query, (error, response) => {
          if (error) reject(`Erro ao acessar o BD. ${error}`);
          else resolve(response);
        });
      });
    }
  
    verClienteById(id) {
      return new Promise((resolve, reject) => {
        const query = "SELECT * FROM CLIENTES WHERE ID = (?)";
  
        this.bd.get(query, id, (error, response) => {
          if (error) reject(`Erro ao acessar o BD. ${error}`);
          else resolve(response);
        });
      });
    }
  
    addClientes(clientes) {
      return new Promise((resolve, reject) => {
        const query = `INSERT INTO CLIENTES (ID, NOME, EMAIL, TELEFONE, CPF)
               VALUES (?,?,?,?,?)`;
  
        let obj = Object.values(clientes);
        this.bd.run(query, obj, (error) => {
          if (error) reject(`Erro ao adicionar novo Cliente. ${error}`);
          else resolve(`Novo cliente adicionando com sucesso ao BD.`);
        });
      });
    }
  
    deleteCliente(id) {
      return new Promise((resolve, reject) => {
        const query = `DELETE FROM CLIENTES WHERE ID = (?)`;
  
        this.bd.run(query, id, (error) => {
          if (error)
            reject(`Erro ao deletar o cliente de ID:${id}, error:${error}`);
          else resolve(`Cliente com ID:${id} deletado com sucesso`);
        });
      });
    }
  
    atualizarCliente(data, id) {
      return new Promise((resolve, reject) => {
        const query = `UPDATE CLIENTES SET NOME = (?), EMAIL = (?), TELEFONE = (?), CPF = (?) WHERE ID = (?)`;
        const patch = [data[0], data[1], data[2], data[3], id];
  
        this.bd.run(query, patch, (error) => {
          if (error)
            reject(
              `Erro ao fazer a atualização dos dados do Cliente. ${error}.`
            );
          else resolve(`Atualização realizada com sucesso.`);
        });
      });
    }
  }
  
  export default ClientesD;
  