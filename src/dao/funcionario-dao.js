// Funcionario-DAO concluido

class Funcionarios {
  constructor(bd) {
    this.bd = bd;
  }

  verFuncionarios() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM funcionarios";

      this.bd.all(query, (error, response) => {
        if (error) reject(`Erro ao acessar o BD. ${error}`);
        else resolve(response);
      });
    });
  }

  verFuncionarioById(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM funcionarios WHERE id = (?)";

      this.bd.get(query, id, (error, response) => {
        if (error) reject(`Erro ao acessar o BD. ${error}`);
        else resolve(response);
      });
    });
  }

  addFuncionario(funcionario) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO funcionarios (nome, email, cargo, cpf, telefone)
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
      const query = `DELETE FROM funcionarios WHERE id = (?)`;

      this.bd.run(query, id, (error) => {
        if (error)
          reject(`Erro ao deletar o usuário de ID:${id}, error:${error}`);
        else resolve(`Usuário com ID:${id} deletado com sucesso`);
      });
    });
  }

  atualizarFuncionario(dados, id) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE funcionarios SET nome = (?), email = (?), cargo = (?), cpf = (?), telefone = (?) WHERE id = (?)`;
      const patch = [dados[0], dados[1], dados[2], dados[3], dados[4], id];

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

export { Funcionarios };
