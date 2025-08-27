--Criar banco de dados

CREATE DATABASE blog;

--Criar uma tabela com colunas

CREATE TABLE blog (
Id INT(10) AUTO_INCREMENT PRIMARY KEY,
Titulo VARCHAR(40) NOT NULL,
Txtcurto VARCHAR(80) NOT NULL,
Conteudo VARCHAR(1000) NOT NULL
);

--Inserir dados no banco de dados via código SQL (CREATE)
INSERT INTO blog (Titulo,Txtcurto, Conteudo)
VALUES("O Céu está azul","falando sobre o clima hoje.","O céu está azul, limpo e radiante, com poucas nuvens espalhadas."),

("What is Lorem Ipsum?","text of the printing ","Lorem Ipsum is simply dummy and typesetting industry."),

("Where can I get some?","There are many"," All the Lorem Ipsum generators on the making this the first true generator on the Internet.");


--Selecionando todos dados da tabela estudante (READ)
SELECT * FROM estudante;

--selecionando uma coluna na tabela estudante
SELECT email FROM estudante;

--selecionando mais de uma coluna na tabela estudante
SELECT nomecompleto, email FROM estudante;