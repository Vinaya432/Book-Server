const BookJsonServer=require('json-server')
const BKServer = BookJsonServer.create()
const router= BookJsonServer.router("database.json")
const middleware= BookJsonServer.defaults()
const PORT = 3000 || process.env.PORT

BKServer.use(middleware)
BKServer.use(router)

BKServer.listen(PORT,()=>{
    console.log(`Book Server started at port :${PORT} and waiting for client !!!`);
})