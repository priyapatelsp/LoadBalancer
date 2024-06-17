const httpProxy=require('http-proxy')

const proxy=httpProxy.createProxyServer({})

let curr=0;
const roundRobin = (server,req,res) =>{
    const target=server[curr]
    console.log("RoundRobin target")
    console.log(`./be
Received request from ${target.port}
GET / HTTP/1.1
Host: ${target.host}
User-Agent: curl/7.85.0
Accept: */*
Replied with a hello message`)
    console.log(target)
    curr=(curr+1)%server.length
    proxy.web(req,res,{target: `http://${target.host}:${target.port}`})

    }

module.exports=roundRobin

