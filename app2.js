
const http = require('http')
const url = require('url')
// ?Define The Handler
const requestHandler = (req,res)=>{
      
   //    pass the url

const passUrl = url.parse(req.url, true)

//  ? Home Route
   if(passUrl.pathname === '/' && req.method === 'GET'){

    
// send response
    res.writeHead(200,{'contentType':'text/plain'})
    res.end('Welcome To The About Page')
   }

// ? About Route

 if(passUrl.pathname === '/about' && req.method === 'GET'){

// send response
    res.writeHead(200,{'contentType':'text/plain'})
    res.end('Welcome To The About Page')
   }


}

// ? Create the server

const server =http.createServer(requestHandler)


// ? start our server

const PORT = 3000
server.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`);
})