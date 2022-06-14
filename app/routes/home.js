module.exports=(app)=>{
//Rota da página em sentido ao app, na qual é a página principal 
	app.get('/',(req,res)=>{
		app.app.controllers.home.index(app,req,res);
	});
}