
const http = require('http')
const url = require('url')
// ?Define The Handler
const requestHandler = (req,res)=>{
      
   //    pass the url

const passUrl = url.parse(req.url, true)
 
//  queryParameters

const queryparameters = passUrl.query
console.log(queryparameters);
 
    res.writeHead(200,{'contentType' :'text/plain'})
    res.end('Welcome')
 
}

// ? Create the server

const server =http.createServer(requestHandler)


// ? start our server

const PORT = 3000
server.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`);
})