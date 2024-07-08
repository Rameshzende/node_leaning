const fs = require('fs')

const handleRoutes = (req, res) => {
    const {url, method} = req

    if (req.url === '/') {
       
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method  === 'POST') {
        const body = []
        
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFileSync('message.txt', message)
            res.statusCode = 302;
            res.setHeader('Location', '/')
            return res.end()
        })
    }

    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end();
}

// module.exports = {
//     handle: handleRoutes,
//     rawTest: 'raw test'
// }

exports.handle = handleRoutes
exports.rawTest = 'raw test'