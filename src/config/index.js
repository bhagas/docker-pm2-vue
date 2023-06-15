const http = require('http')
const app = require('../app')
const server = http.createServer(app)
const PORT = process.env.PORT || 8855

server.listen(PORT, () => {
    console.log(`Server Running On PORT `, PORT)
})
