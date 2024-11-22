const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root','nada324533',{
    host: 'localhost',
    dialect: 'mysql'
})

//Model de uma postagem de um blog

const Postagem = sequelize.define('Postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('Usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.INTEGER
    }
})

Usuario.create({
    nome:"Maida Almeida Pires",
    email:"alanisemaida@gmail.com",
    cpf: 67
})

//Usuario.sync({force:true})