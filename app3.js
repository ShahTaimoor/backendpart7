
const http = require('http')
const url = require('url')
// ?Define The Handler
const requestHandler = (req,res)=>{
      
   //    pass the url

const passUrl = url.parse(req.url, true)
   const pathname = passUrl.pathname

//    split the path name

   const pathComponent = pathname.split('/').filter(Boolean)
 if (pathComponent[0] === 'product' && pathComponent[1]) {
    //   Take the product and send to the user
    // perform db query
    const productId = pathComponent[1]

    // send to the user
     res.writeHead(200,{'contentType' :'text/plain'})
    res.end(`PRODUCT ID ${productId}`)
 }else{
    res.writeHead(200,{'contentType' :'text/plain'})
    res.end('NOT FOUND')
 }
}

// ? Create the server

const server =http.createServer(requestHandler)


// ? start our server

const PORT = 3000
server.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`);
})