const app=require('./config/server.js');//Importação do módulo
//Gera um servidor rodando na porta 3000
app.listen('3000', ()=>{
	console.log('Servidor rodando na porta 3000');
});
