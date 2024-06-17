const http=require('http')
const roundRobin=require('./round_robin')
const serverConfig=require('./config.json').serversDetails

const servers= serverConfig.map(serversDetails =>({
    ...serversDetails
}))

const loadBalancer='rountRobin'

const server=http.createServer((req,res)=>{
    if(loadBalancer==='rountRobin'){
        roundRobin(servers,req,res)
    }else{
        res.writeHead(500)
        res.end("Round Robin is not working")
    }
})

server.listen(3000,()=>{
    console.log("Serving HTTP on :: 3000")
})