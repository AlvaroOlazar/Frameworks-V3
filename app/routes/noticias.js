module.exports=(app)=>{
//Rota da página em sentido a noticias
	app.get('/noticias',(req,res)=>{
		app.app.controllers.noticias.noticias(app,req,res);
	});

	//Rota da página em sentido a noticia
	app.get('/noticia',(req,res)=>{
		app.app.controllers.noticias.noticia(app,req,res);
	});

	app.get('/excluir',(req,res)=>{
		app.app.controllers.noticias.excluir(app,req,res);
	});

	app.get('/editar',(req,res)=>{
		app.app.controllers.noticias.editar(app,req,res);
	});

	app.post('/busca', (req,res)=>{
		app.app.controllers.noticias.busca(app,req,res);
	});
}