 var mysql = require("mysql"); 

 var conecteConexao = mysql.createConnection({
 host: "localhost", 
 user: "root", 
 password: "", 
 database: "blog" 
 });
 

 module.exports = conecteConexao; 