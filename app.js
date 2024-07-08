const http = require('http');
const routes = require('./routes')

console.log(routes.rawTest)

const server = http.createServer(routes.handle)

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})