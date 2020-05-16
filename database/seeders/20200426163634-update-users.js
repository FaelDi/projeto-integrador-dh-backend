'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('usuario', 
  [
    {
        "nome": "Priscila Vanessa Baptista",
        "idade": 60,
        "cpf": "841.392.858-34",
        "rg": "15.666.171-8",
        "data_nasc": "25/04/1960",
        "email": "priscilavanessabaptista_@i9pneus.com.br",
        "senha": "BCtW86LeGU",
        "cep": "05267-175",
        "rua": "Rua Dezesseis",
        "numero": 616,
        "bairro": "Jardim Anhangüera",
        "cidade": "São Paulo",
        "uf": "SP",
        "telefone": "(11) 2706-3342",
        "celular": "(11) 98392-5156"
      },
      {
        "nome": "Rita Melissa Agatha Almeida",
        "idade": 60,
        "cpf": "536.829.348-80",
        "rg": "29.997.455-8",
        "data_nasc": "18/12/1960",
        "email": "ritamelissaagathaalmeida__ritamelissaagathaalmeida@puenteimoveis.com.br",
        "senha": "8m9i6maMgz",
        "cep": "04902-902",
        "rua": "Avenida Guarapiranga 1671",
        "numero": 552,
        "bairro": "Parque Alves de Lima",
        "cidade": "São Paulo",
        "uf": "SP",
        "telefone": "(11) 3946-0973",
        "celular": "(11) 99139-8867"
      },
      {
        "nome": "Clarice Emily Liz Nogueira",
        "idade": 60,
        "cpf": "028.068.948-91",
        "rg": "11.671.982-5",
        "data_nasc": "12/05/1960",
        "email": "cclariceemilyliznogueira@esctech.com.br",
        "senha": "08E4j2zASf",
        "cep": "01231-904",
        "rua": "Rua Baronesa de Itu 821",
        "numero": 981,
        "bairro": "Santa Cecília",
        "cidade": "São Paulo",
        "uf": "SP",
        "telefone": "(11) 2718-2880",
        "celular": "(11) 99368-3872"
      },
      {
        "nome": "Daiane Antonella Mariah Monteiro",
        "idade": 60,
        "cpf": "112.470.758-18",
        "rg": "41.012.375-4",
        "data_nasc": "11/10/1960",
        "email": "daianeantonellamariahmonteiro__daianeantonellamariahmonteiro@balaiofilmes.com.br",
        "senha": "jCusIAL0D7",
        "cep": "03627-080",
        "rua": "Rua José de Antonio",
        "numero": 759,
        "bairro": "Vila Buenos Aires",
        "cidade": "São Paulo",
        "uf": "SP",
        "telefone": "(11) 2629-1326",
        "celular": "(11) 99671-9294"
      },
      {

        "nome": "Ryan Luís Heitor Pinto",
        "idade": 60,
        "cpf": "279.850.878-93",
        "rg": "12.236.377-2",
        "data_nasc": "13/06/1960",
        "email": "ryanluisheitorpinto_@oana.com.br",
        "senha": "RYbiIUbpZO",
        "cep": "08280-070",
        "rua": "Rua Gengibira",
        "numero": 189,
        "bairro": "Cidade Líder",
        "cidade": "São Paulo",
        "uf": "SP",
        "telefone": "(11) 2520-2002",
        "celular": "(11) 98822-4222"
      }
  ], {}),

down: (queryInterface) => queryInterface.bulkDelete('usuario', null, {}),
};