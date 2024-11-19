var http = require('http');
// essa var vai chamar o módulo http nativo do node.

http.createServer(function(req,res){
    res.end('Ola')
}).listen(8080)
// usa o módulo para criar um servidor na porta 8081

console.log('Server rodando!')    