
const http = require('http')
const url = require('url')
// ?Define The Handler
const requestHandler = (req,res)=>{
      
const data = {
    id: 1,
    name: 'Laptop',
    email: 'laptop@gmail.com'
};

// set the response headerto application/json

 res.setHeader('contentType' , 'application/json')
res.end(JSON.stringify(data))
 
   
 
}

// ? Create the server

const server =http.createServer(requestHandler)


// ? start our server

const PORT = 3000
server.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`);
})