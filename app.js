var conexao =require("./conexao");
const express = require('express');
const app = express();

var bodyParser = require(`body-parser`);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));


//registrar a visualização da engenharia
app.set('view engine', 'ejs');


conexao.connect(function(error){
if(error){
    console.error("Não foi possivel conectar ao banco de dados:", error);
    process.exit(); 
}
});



//ouvindo as requisições na porta
app.listen(3002);









//acessando a rota
app.get('/', (req, res) => {

        app.get(`/`, function(req, res){
    res.sendFile(__dirname+`/criar.ejs`);

});

app.post(`/`, function(req, res) {
   var titulo = req.body.titulo;
   var txtcurto = req.body.txtcurto;
   var conteudo = req.body.conteudo;



   //prevenindo SQL injection
   var sql = "INSERT INTO blog(titulo, txtcurto, conteudo) VALUES (?, ?, ?)";
   conexao.query(sql, [titulo, txtcurto, conteudo], function(error, result){
    if(error) throw error;

    // res.send("Estudante cadastrado com sucesso!" + result.insertId);

    res.redirect(`/blog`);
  });


});


//Passando parâmetros para o body
const blogs = [
 {titulo: `Charmander`, conteudo: `A ponta de seu rabo está constantemente em chamas e se for apagada pode resultar em sua morte`}, 
{titulo: `Squirdle`, conteudo: `Seus casco reduz a resistência contra a água fazendo com que ele nade mais rápido.`},
{titulo: `Bulbasaur`, conteudo: `Ao evoluir o bulbo começa a desabrochar até se tornar uma grande flor na evolução final.`}
];

res.render(`index`, { titulo: `Home`, blogs});
});

//nova rota
app.get('/sobre', (req, res) => {
res.render('sobre', { titulo: 'Sobre Nós' });
});

app.get('/blog/criar', (req, res) => {
res.render('criar', { titulo: 'Novo Blog' });
});

//redirecionamento de página
app.get('/sobrenos', (req, res) => {
    res.redirect('/sobre');
});

//erro 404
app.use((req, res) => {
    res.status(404).render('404');
});