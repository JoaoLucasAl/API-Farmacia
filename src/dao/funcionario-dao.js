// Funcionario-DAO concluido

class FuncionariosD {
  constructor(bd) {
    this.bd = bd;
  }

  verFuncionarios() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM FUNCIONARIOS";

      this.bd.all(query, (error, response) => {
        if (error) reject(`Erro ao acessar o BD. ${error}`);
        else resolve(response);
      });
    });
  }

  verFuncionarioById(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM FUNCIONARIOS WHERE ID = (?)";

      this.bd.get(query, id, (error, response) => {
        if (error) reject(`Erro ao acessar o BD. ${error}`);
        else resolve(response);
      });
    });
  }

  addFuncionario(funcionario) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO FUNCIONARIOS (NOME, EMAIL, TELEFONE, CARGO, CPF)
             VALUES (?,?,?,?,?)`;

      let obj = Object.values(funcionario);
      this.bd.run(query, obj, (error) => {
        if (error) reject(`Erro ao adicionar novo Funcionário. ${error}`);
        else resolve(`Novo funcionário adicionando com sucesso ao BD.`);
      });
    });
  }

  deleteFuncionario(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM FUNCIONARIOS WHERE ID = (?)`;

      this.bd.run(query, id, (error) => {
        if (error)
          reject(`Erro ao deletar o usuário de ID:${id}, error:${error}`);
        else resolve(`Usuário com ID:${id} deletado com sucesso`);
      });
    });
  }

  atualizarFuncionario(data, id) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE FUNCIONARIOS SET NOME = (?), EMAIL = (?) TELEFONE = (?), CARGO = (?), CPF = (?) WHERE ID = (?)`;
      const patch = [data[0], data[1], data[2], data[3], data[4], id];

      this.bd.run(query, patch, (error) => {
        if (error)
          reject(
            `Erro ao fazer a atualização dos dados do Funcionario. ${error}.`
          );
        else resolve(`Atualização realizada com sucesso.`);
      });
    });
  }
}

export default FuncionariosD;
