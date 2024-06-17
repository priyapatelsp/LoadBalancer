const http = require('http')

const backendServer =(host,port)=>{
    http.backendServer((req,res)=>{
        res.write(200)
        res.end(`Response from port :: ${port}` )
    }).listen(port,host,()=>{
        console.log(`Hi... from server running at http:://${host}:${port}`)
    })
}
