// Dado o seguinte objeto:
const company = {
  nome: 'TechCorp',
  fundacao: 2000,
  ceo: 'Alice Silva',
  endereco: {
    cidade: 'CidadeTech',
    estado: 'TecLand',
    pais: 'Techlandia'
  },
  departamentos: [
    { nome: 'Desenvolvimento', funcionarios: 120 },
    { nome: 'Vendas', funcionarios: 50 },
    { nome: 'Suporte', funcionarios: 30 }
  ]
};

const {nome: companyName, ceo: ceoName, endereco: {cidade: companyCity}, departamentos: [{ funcionarios: numFuncionariosSuporte }]} = company

function seeCompanyDatas(company) {
    console.log(`\nCompany name: ${companyName}
Ceo name: ${ceoName}\nCompany City: ${companyCity}
Employees in development: ${numFuncionariosSuporte}\n`)
}

seeCompanyDatas(company)