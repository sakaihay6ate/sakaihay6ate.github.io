// const exec=require("child_process").exec;
const querystring=require("querystring"),
        fs=require("fs"),
        formidable=require("formidable");
let start=(response)=> {
    console.log("Request handler 'start' was called.");
    let body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        // '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="file" name="upload">' +
        '<input type="submit" value="Submit Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
}

 let upload=(response,request)=>{
    console.log(`Request handler 'upload' was called.`);

    let form = new formidable.IncomingForm();
    console.log(`about to parse`);
    form.parse(request,(error,fields,files)=>{
        console.log(`parsing done`);
        fs.renameSync(files.upload.path,"./tmp/test.png");
        response.writeHead(200, { "content-Type": "text/html" });
        response.write(`received image:<br/>`);
        response.write(`<img src='/show' />`);
        response.end();
    })

}

let show=(response)=> {
    console.log("Request handler 'show' was called.");
    fs.readFile("./tmp/test.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "image/png" });
            response.write(file, "binary");
            response.end();
        }
    });
}
exports.start=start;
exports.upload=upload;
exports.show=show;