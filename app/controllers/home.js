module.exports.index=(app,req,res)=>{
	var connection=app.config.dbConnection();
	var noticiasModel= new app.app.models.NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias((error,result)=>{
		res.render('home/index.ejs', {noticias:result});
	});
}