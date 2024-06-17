const http = require('http')
const serverConfig=require("./config.json").serversDetails;

const createServer =(host,port)=>{
    http.createServer((req,res)=>{
        res.writeHead(200)
        res.end(`Response from port :: ${port}` )
    }).listen(port,host,()=>{
        console.log(`Received request from  ${port} \n GET / HTTP/1.1 \n Host: ${host}  User-Agent: curl/7.85.0 \n Accept: */*`)
    })
}


serverConfig.forEach(backendServer=>createServer(backendServer.host,backendServer.port))

//node server_backend.js