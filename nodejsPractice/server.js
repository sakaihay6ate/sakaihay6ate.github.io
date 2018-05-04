const http = require("http");
const url = require("url");

start = (route, handle) => {
    const onRequest = (request, response) => {

        let pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received.`);
        route(handle, pathname, response, request);
    }
    http.createServer(onRequest).listen(8888);
    //（請注意，當我們在伺服器存取網頁時，我們的伺服器可能會輸出兩次 "Request received." 。那是因為大部分伺服器都會在你存取 http://localhost:8888 /時嘗試讀取 http://localhost:8888/favicon.ico )
    console.info(`Server has started.`);
}
exports.start = start;
