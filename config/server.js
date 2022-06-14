const express=require('express');//Importação do express
const consign=require('consign');
const bodyParser=require('body-parser');
const expressValidator=require('express-validator');//Importação do módulo expressValidator
const app=express();//Execução do express
app.set('view-engine', 'ejs');//Configuração do ejs como motor de telas do projeto
app.set('views', './app/views');//Configuração do novo diretório na pasta views

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));
//O bodyParser irá tratar os formulários
//O parâmetro extend:true irá permitir que seja forjado através de JSON
//As URL codificadas

app.use(expressValidator());
//Execução do expressValidator;

consign()
	.include('app/routes')
	.then('config/dbConnection.js')//Conexão com o banco no consign
	.then('app/models')//Diretório models
	.then('app/controllers')//Diretório de controllers
	.into(app);
//O consign lê todos os arquivos da pasta routes, usa esses módulos e insere dentro do servidor

module.exports=app;//O módulo vai retornar a variável app