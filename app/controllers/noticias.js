module.exports.noticias=(app,req,res)=>{
		const connection=app.config.dbConnection();//Recebe o app em um parâmetro
		//Assim é possível recuperar o módulo presente dentro do app
		const noticiasModel=new app.app.models.NoticiasDAO(connection);
		//app.app indica: primeiro sendo a aplicação e o segundo onde é a pasta app

		//Ficando desta forma: O select (regra) passou em sentido no arquivo de model

			noticiasModel.getNoticias((error,result)=>{
			res.render('noticias/noticias.ejs',{noticias:result}); //Renderização da tela noticia.ejs junto com o despacho da variável result
			});
}
	//Rota em sentido da página noticia
module.exports.noticia=(app,req,res)=>{
		const connection=app.config.dbConnection();//Recebe o app em um parâmetro, 
		//Assim é possível recuperar o módulo presente dentro do app
		const noticiasModel= new app.app.models.NoticiasDAO(connection);
		if (req.query.id_noticia){
			var id_noticia=req.query//O parâmetro enviado pela views é recebido pelo id_noticia, na qual contém o id da notícia a ser vista
		}else{
			res.redirect('/noticias');
			return;
		}
			noticiasModel.getNoticia(id_noticia, (error,result)=>{
			res.render('noticias/noticia.ejs',{noticia:result}); //Renderização da tela noticia.ejs junto com o despacho da variável result
			});
}

module.exports.busca=(app,req,res)=>{
	const pesquisa=req.body.pesquisa;
	const connection=app.config.dbConnection();
	const noticiasModel=new app.app.models.NoticiasDAO(connection);

	noticiasModel.buscaNoticias(pesquisa, (error,result)=>{
		res.render('noticias/noticias.ejs', {noticias:result});
	});
}

module.exports.excluir=(app,req,res)=>{
	const pesquisa=req.body.pesquisa;
	const connection=app.config.dbConnection();
	const noticiasModel=new app.app.models.NoticiasDAO(connection);

	if (req.query.id_noticia) {
		var id_noticia=req.query;
	}
	else{
		res.redirect('/noticias');
		return;
	}
	noticiasModel.excluiNoticia(id_noticia, (error,result)=>{
		res.redirect('/noticias');
	});
}

module.exports.editar=(app,req,res)=>{
	const pesquisa=req.body.pesquisa;
	const connection=app.config.dbConnection();
	const noticiasModel=new app.app.models.NoticiasDAO(connection);

	if (req.query.id_noticia) {
		var id_noticia=req.query;
	}
	else{
		res.redirect('/noticias');
		return;
	}
	noticiasModel.getNoticia(id_noticia, (error,result)=>{
		res.render('admin/form_update_noticia.ejs', {validacao:{}, noticia : result});
	});
}