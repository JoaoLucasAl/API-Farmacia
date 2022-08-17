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
    
  ● GET/clientes (para visualizar todos os clientes do banco)

{
	"result": [
		{
			"ID": "88882c64-4aef-47ba-a467-745c4c7cce6b",
			"NOME": "Lucas Ribeiro",
			"EMAIL": "lllucas312@gmail.com",
			"TELEFONE": "99485165",
			"CPF": "01148151643"
		},
		{
			"ID": "508f5086-dd87-4066-831c-f47ef39138e2",
			"NOME": "Leonardo Matias",
			"EMAIL": "leomatias12zz@gmail.com",
			"TELEFONE": "994897438",
			"CPF": "3211681580"
		},
		{
			"ID": "20527646-7d36-4b66-ad5b-9c9fe5c8f228",
			"NOME": "Patrick Dias",
			"EMAIL": "patrick.dias@gmail.com",
			"TELEFONE": "998543833",
			"CPF": "5629248620"
		}
	],
	"countBd": 3,
	"error": false
}

  ● GET/clientes/:id (para visualizar através do id um cliente específico)

    {
	"result": {
		"ID": "88882c64-4aef-47ba-a467-745c4c7cce6b",
		"NOME": "Lucas Ribeiro",
		"EMAIL": "lllucas312@gmail.com",
		"TELEFONE": "99485165",
		"CPF": "01148151643"
	},
	"error": false
}
   
  ● POST/clientes (para adicionar um novo cliente)

   {
	"result": "Novo cliente adicionando com sucesso ao BD."
}

  ● PUT/clientes/:id (para atualizar um cliente existente)

  {
	"result": "Atualização realizada com sucesso."
}

  ● DELETE/clientes/:id (para deletar um cliente existente)

  {
	"result": "Cliente com ID:{id} deletado com sucesso"
}
        
● FUNCIONÁRIOS

  ● GET/funcionarios (para visualizar todos os funcionários do banco)

  {
	"result": [
		{
			"ID": "41b5071d-3fae-438b-be7a-7641546aeb82",
			"NOME": "João Lucas",
			"EMAIL": "joao.lucas@gmail.com",
			"TELEFONE": "998667248",
			"CARGO": "Gerente",
			"CPF": "01232114790"
		},
		{
			"ID": "52645d6f-0d85-4a78-845e-dae61c172a46",
			"NOME": "Rio Ribeiro",
			"EMAIL": "rio.ribeiro@gmail.com",
			"TELEFONE": "994895138",
			"CARGO": "Farmaceutico",
			"CPF": "32115998780"
		},
		{
			"ID": "aa931f49-3baf-4f2a-9704-2bdf9dd6cd9d",
			"NOME": "Isadora SantAna",
			"EMAIL": "isadora.santana@gmail.com",
			"TELEFONE": "998620133",
			"CARGO": "Fiscal",
			"CPF": "14785248620"
		}
	],
	"countBd": 3,
	"error": false
}

  ● GET/funcionarios/:id (para visualizar um funcionário através do id)

  {
	"result": {
		"ID": "41b5071d-3fae-438b-be7a-7641546aeb82",
		"NOME": "João Lucas",
		"EMAIL": "joao.lucas@gmail.com",
		"TELEFONE": "998667248",
		"CARGO": "Gerente",
		"CPF": "01232114790"
	},
	"error": false
}

  ● POST/funcionarios (para adicionar um novo funcionário)

  {
	"result": "Novo funcionário adicionando com sucesso ao BD."
}
  ● PUT/funcionarios/:id (para atualizar um funcionário existente)

  {
	"result": "Atualização realizada com sucesso."
}
  ● DELETE/funcionarios/:id (para deletar um funcionário existente)

  {
	"result": "Usuário com ID:{id} deletado com sucesso"
}

● REMÉDIOS

  ● GET/remedios (para visualizar todos os remédios do banco)

    {
	"result": [
		{
			"ID": "c6bd83f9-74d7-4793-aabc-a8311644fbf6",
			"NOME": "Neosaldina 30 drágeas",
			"PRINCIPIO_ATIVO": "Dipirona 300mg, mucato de isometepteno 30mg, cafeína 30mg",
			"LABORATORIO": "Takeda",
			"PRECO": 27.59,
			"ESTOQUE": 100
		}
	],
	"countBd": 1,
	"error": false
}

  ● GET/remedios/:id (para visualizar um remédio através do id)

  {
	"result": {
		"ID": "c6bd83f9-74d7-4793-aabc-a8311644fbf6",
		"NOME": "Neosaldina 30 drágeas",
		"PRINCIPIO_ATIVO": "Dipirona 300mg, mucato de isometepteno 30mg, cafeína 30mg",
		"LABORATORIO": "Takeda",
		"PRECO": 27.59,
		"ESTOQUE": 100
	},
	"error": false
}

  ● POST/remedios (para adicionar um novo remédio)

  {
	"result": "Novo remédio adicionando com sucesso ao BD."
}

  ● PUT/remedios/:id (para atualizar um remédio existente)

  {
	"result": "Atualização realizada com sucesso."
}

  ● DELETE/funcionarios/:id (para deletar um remédio existente)

  {
	"result": "Remédio com ID:{id} deletado com sucesso"
}

● VENDAS

  ● GET/vendas

  {
	"result": [
		{
			"ID": "71e090d8-a919-4dea-b2ae-dcd39bb0a391",
			"REMEDIO_ID": "c6bd83f9-74d7-4793-aabc-a8311644fbf6",
			"QUANTIDADE": 4,
			"PRECO": 22.34,
			"DESCONTO": "5%",
			"FUNCIONARIO_ID": "52645d6f-0d85-4a78-845e-dae61c172a46",
			"CLIENTE_ID": "88882c64-4aef-47ba-a467-745c4c7cce6b"
		},
		{
			"ID": "a455184e-5441-4794-9944-727ad5fc1167",
			"REMEDIO_ID": "c6bb83f9-74d7-4793-aabc-a8311644fbf6",
			"QUANTIDADE": 4,
			"PRECO": 22.34,
			"DESCONTO": "5%",
			"FUNCIONARIO_ID": "52645d6f-0d85-4a78-845e-dae61c172a46",
			"CLIENTE_ID": "88882c64-4aef-47ba-a467-745c4c7cce6b"
		}
	],
	"countBd": 2,
	"error": false
}

  ● GET/vendas/:id (para visualizar uma venda através do id)

  {
	"result": {
		"ID": "71e090d8-a919-4dea-b2ae-dcd39bb0a391",
		"REMEDIO_ID": "c6bd83f9-74d7-4793-aabc-a8311644fbf6",
		"QUANTIDADE": 4,
		"PRECO": 22.34,
		"DESCONTO": "5%",
		"FUNCIONARIO_ID": "52645d6f-0d85-4a78-845e-dae61c172a46",
		"CLIENTE_ID": "88882c64-4aef-47ba-a467-745c4c7cce6b"
	},
	"error": false
}

  ● POST/vendas (para adicionar uma nova venda)

  {
	"result": "Nova venda adicionada com sucesso ao BD."
}

  ● PUT/vendas/:id (para atualizar uma venda existente)

  {
	"result": "Atualização realizada com sucesso."
}

  ● DELETE/funcionarios/:id (para deletar uma venda existente)

  {
	"result": "Venda com ID:{id} deletado com sucesso"
}


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
