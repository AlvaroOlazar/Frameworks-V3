module.exports=(app)=>{
//Rota da página em sentido ao formulário de inclusão de notícia
	app.get('/formularioinclusaonoticia',(req,res)=>{
		app.app.controllers.admin.formularioinclusaonoticia(app,req,res);
	});

	app.post('/noticias/salvar',(req,res)=>{
		app.app.controllers.admin.noticias_salvar(app,req,res);
	});

	app.post('/atualizar',(req,res)=>{
		app.app.controllers.admin.noticias_atualizar(app,req,res);
	});
}