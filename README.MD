# <h1 align="center"> API - Farmácia ⚕️ </h1>  
Projeto desenvolvido no curso de Desenvolvimento Web, Instituição de Ensino: Resilia Eduçação.
Sendo este proposto como projeto do Módulo 4 do curso.

# O Projeto 📋
A SQUAD 4 foi desafiada a desenvolver uma API com o produto mínimo viável de uma farmácia.
<p> 🦾 Nesse desafio, a nossa facilitadora tech, Karlla Souzza, solicitou que desenvolvessemos o conteúdo do módulo em equipe.
<p>
- DEMANDAS:
<p>✔️ Utilizar o padrão MVC;
<p>✔️ Utilizar os verbos HTTP seguindo o padrão REST;
<p>✔️ Implementar todas as operações de CRUD;
<p>✔️ Utilizar o padrão de projeto (design pattern) DAO para abstração de transações
no banco, com Promises;
<p>✔️ Utilizar o README.md do repositório para documentação.
<p>✔️ Utilização de async/await para operações no banco (DAO)
<p>✔️ Ter o código fonte hospedado em um repositório no Github.

<P> - ROTAS SOLICITADAS:
<P>● Listagem de todos os registros;
<P>● Listagem de um único registro com base em um parâmetro de rota;
<P>● Inserção de um registro;
<P>● Modificação de um registro;
<P>● Deleção de um registro.
  
# Instalção da Aplicação:
  <p>● Abra o terminal e executeos seguintes comandos:
  <p>
 - git clone https://github.com/JoaoLucasAl/API-Farmacia.git
  <p>
    ● Entre na pasta:
  <p>
 - cd API-Farmacia
  <p>
   ● Instale os pacotes:
  <p>
 - npm install
  <p>
   ● Crie e Popule o Banco de Dados:
  <p>
 - npm run database
    <p>
   ● Execute o Projeto:
      <p>
 - npm start
    
# Quais são as rotas possíveis:
● CLIENTES
  //rota que cria o cadastro de um novo funcionario
  app.post("/clientes", async (req, res) => {
    try {
      const { NOME, EMAIL, TELEFONE, CPF } = req.body;

      let cliente = new ClientesM(NOME, EMAIL, TELEFONE, CPF);

      let resposta = await DaoFunc.addClientes(cliente);
      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que deleta um funcionário pelo ID
  app.delete("/clientes/:ID", async (req, res) => {
    try {
      const id = req.params.ID;
      const resposta = await DaoFunc.deleteCliente(id);

      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });
   
        
● FUNCIONÁRIOS
        //rota que busca todos funcionários
  app.get("/funcionarios", async (req, res) => {
    try {
      const resposta = await DaoFunc.verFuncionarios();
      res.json({
        result: resposta,
        countBd: resposta.length,
        error: false,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que busca o funcionário a partir do ID
  app.get("/funcionarios/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const resposta = await DaoFunc.verFuncionarioById(id);
      res.json({
        result: resposta,
        error: false,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que cria o cadastro de um novo funcionario
  app.post("/funcionarios", async (req, res) => {
    try {
      const { NOME, EMAIL, TELEFONE, CARGO, CPF } = req.body;

      let funcionario = new FuncionariosM(NOME, EMAIL, TELEFONE, CARGO, CPF);

      let resposta = await DaoFunc.addFuncionario(funcionario);
      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que deleta um funcionário pelo ID
  app.delete("/funcionarios/:ID", async (req, res) => {
    try {
      const id = req.params.ID;
      const resposta = await DaoFunc.deleteFuncionario(id);

      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });
        
        ● REMÉDIOS
        //rota que cria o cadastro de um novo remedio
  app.post("/remedios", async (req, res) => {
    try {
      const { NOME, PRINCIPIO_ATIVO, LABORATORIO, PRECO, ESTOQUE } = req.body;

      let remedio = new RemediosM(NOME, PRINCIPIO_ATIVO, LABORATORIO, PRECO, ESTOQUE);

      let resposta = await DaoRmd.addRemedios(remedio);
      
      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

 //rota que deleta um remedio pelo ID
 app.delete("/remedios/:ID", async (req, res) => {
  try {
    const id = req.params.ID;
    const resposta = await DaoRmd.deleteRemedios(id);

    res.json({
      result: resposta,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});
        
       ● VENDAS
        //Exibe todas as vendas
  app.get("/vendas", async (req, res) => {
    try {
      const resposta = await DaoVend.verVendas();
      res.json({
        result: resposta,
        countBd: resposta.length,
        error: false,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });


  //Exibe Venda pelo ID
  app.get("/vendas/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const resposta = await DaoVend.verVendasById(id);
      res.json({
        result: resposta,
        error: false,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

    //Inserir venda
  app.post("/vendas", async (req, res) => {
    try {
      const { remedio_id, quantidade, preco, desconto, funcionario_id, cliente_id } = req.body;

      let venda = new VendasM(remedio_id, quantidade, preco, desconto, funcionario_id, cliente_id);

      let resposta = await DaoVend.addVendas(venda);
      
      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

 //rota que deleta uma venda pela ID
 app.delete("/vendas/:ID", async (req, res) => {
  try {
    const id = req.params.ID;
    const resposta = await DaoVend.deleteVendas(id);

    res.json({
      result: resposta,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

app.put("/vendas/:ID", async (req, res) => {
  try {
    const id = req.params.ID
    const body = req.body
    const parametros = [body.remedio_id, body.quantidade, body.preco, body.desconto, body.funcionario_id, body.cliente_id]

    let resposta = await DaoVend.atualizarVendas(parametros, id);

    res.json({
      result: resposta,
    });
  } catch (e) {
    res.json({
      error: e.message,
    });
  }
});

# Status do Projeto 🚀
`Finalizado`

# Ferramentas Utilizadas ⚙️🛠️
- VISUAL STUDIO CODE
- GIT
- GIT HUB
- DISCORD
- GOOGLE PLANILHAS
- GOOGLE MEET
- CANVA
- SQLITE
- NOTION
- NODE JS
- INSOMNIA

# Nossa Equipe 👧🏾👦🏽👧🏾👦🏽
| [<img src="https://avatars.githubusercontent.com/u/104860523?v=4" width=115><br><sub>Isadora Sant'Ana</sub>](https://github.com/isadora30) |  [<img src="https://avatars.githubusercontent.com/u/89653897?v=4" width=115><br><sub>João Lucas</sub>](https://github.com/JoaoLucasAl) |  [<img src="https://avatars.githubusercontent.com/u/75572493?v=4" width=115><br><sub>Raíssa Dias</sub>](https://github.com/Jackiesants) | [<img src="https://avatars.githubusercontent.com/u/103144665?v=4" width=115><br><sub>Rio Ribeiro</sub>](https://github.com/rioribeirods)
| :---: | :---: | :---: | :---: |

# Conclusões 🎯
Logo, conseguimos desenvolver, além de todas as habilidades com as ferramentas e com conteúdo passado, 
<p> harmonia e parceria no trabalho em equipe, bem como, a capacidade de aprender a aprender e de ajudar uns aos outros compartilhando conhecimentos.

Esperamos demonstrar nosso desenvolvimento enquanto aprendizes e contribuir como um bom exemplo de projeto!
<p>SQUAD 4.</p>
