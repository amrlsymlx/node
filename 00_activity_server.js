//import http package
let http = require("http")

let fs = require("fs")

let server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"})

    //read file
    fs.readFile("activitytext.txt", (error, data)=>{
        if(error){
            throw error
        }
        console.log("File read is success!")
        let content = data.toString()
        res.write(content)
        res.end()
    })
})

let PORT = 8888
server.listen(PORT, ()=>{
    console.log("Listening on port: " + PORT)
})
























// function iAmCallBackFunction(request, response){
//     let fs = require("fs")

// fs.readFile("activitytext.txt", (error, data)=>{
//     if(error){
//         throw error
//     }
//     console.log("File read is success!!!!")
//     console.log(data)
//     console.log(data.toString())
// })
// }



// //use http to create server
// //createServer will create the server using call back function
// //callback function does the actual job
// let firstServer = http.createServer(iAmCallBackFunction)

// firstServer.listen(8181)