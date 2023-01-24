const http = require("http");
const host = 'localhost';
const port = 8123;

console.log('in the listener code');


const requestListener = function (req, res) {
    // console.log(req);
    
    switch (req.url) {
        case "/success":
            res.writeHead(200);
            res.end('your call succeeded');
            break
            case "/wait":
                setTimeout(() => {
                    console.log('timeout function'); 
                    res.writeHead(200);
                res.end('your wait succeeded');
                
                }, 20000);
                
                break
        case "/failure":
            res.writeHead(400);
            res.end('your call failed');
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }


    // res.writeHead(200);
    // res.end("Reply!");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});