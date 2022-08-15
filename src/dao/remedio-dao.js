// Remedio-DAO concluido

class Remedios {
  constructor(bd) {
    this.bd = bd;
  }

  verRemedios() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM remedios";

      this.bd.all(query, (error, response) => {
        if (error) reject(`Erro ao acessar o BD. ${error}`);
        else resolve(response);
      });
    });
  }

  verRemediosById(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM remedios WHERE id = (?)";

      this.bd.get(query, id, (error, response) => {
        if (error) reject(`Erro ao acessar o BD. ${error}`);
        else resolve(response);
      });
    });
  }

  addRemedios(remedio) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO remedios (nome, principio_ativo, laboratorio, preco, quantidade)
               VALUES (?,?,?,?,?)`;

      let obj = Object.values(remedio);
      this.bd.run(query, obj, (error) => {
        if (error) reject(`Erro ao adicionar novo Funcionário. ${error}`);
        else resolve(`Novo funcionário adicionando com sucesso ao BD.`);
      });
    });
  }

  deleteRemedio(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM remedios WHERE id = (?)`;

      this.bd.run(query, id, (error) => {
        if (error)
          reject(`Erro ao deletar o usuário de ID:${id}, error:${error}`);
        else resolve(`Usuário com ID:${id} deletado com sucesso`);
      });
    });
  }

  atualizarRemedio(dados, id) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE remedios SET nome = (?), principio_ativo = (?), laboratorio = (?), preco = (?), quantidade = (?) WHERE id = (?)`;
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

export { Remedios };
