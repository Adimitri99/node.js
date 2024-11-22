const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'nada324533',{
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(function(){
    console.log('feito')
}).cath(function(erro){
    console.log("falha ao se conectar "+erro)
})