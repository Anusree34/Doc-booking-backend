//import jsonserver
const jsonserver=require('json-server')

//create a server application using jsonserver
const server=jsonserver.create()

//setup a path
const router=jsonserver.router('db.json')

//return a middleware
const middleware=jsonserver.defaults()

//setup a portnumber
const port=process.env.PORT || 3001

//use in server
server.use(middleware)
server.use(router)

//run the port
server.listen(port,()=>{
    console.log('listening on port'+ port);
})

