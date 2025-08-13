const express = require('express');

//Express aplicativo - configurando o acesso as funções
const app = express();

//registrar a visualização da engenharia
app.set('view engine', 'ejs');

//ouvindo as requisições na porta
app.listen(3001);

//acessando a rota
app.get('/', (req, res) => {


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


//redirecionamento de página
app.get('/sobrenos', (req, res) => {
    res.redirect('/sobre');
});

//erro 404
app.use((req, res) => {
    res.status(404).render('404');
});