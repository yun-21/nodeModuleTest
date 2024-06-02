const check = require('./public/checkHamsu');
const http = require('http');
const path = require('path');

const mimeType = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".ico": "image/x-icon; charset=utf-8"
}

const fileUtils = {
    getFilePath: (url) => {
        let filePath;
        if (url === "/") {
            filePath = "./public/main.html";
        }
        else {
            filePath = "./public" + url;
        }
        return filePath;
    },
    getFileExtension: (filePath) => {
        let ext = path.extname(filePath);
        return ext.toLowerCase();
    },
    getContentType: (ext) => {
        if (mimeType.hasOwnProperty(ext)) {
            return mimeType[ext];
        }
        else {
            return "text/plain";
        }
    }
}

const server = http.createServer((req, res) => {
    let filePath = fileUtils.getFilePath(req.url);
    let ext = fileUtils.getFileExtension(filePath);
    let contentType = fileUtils.getContentType(ext);
    res.writeHead(200, { contentType });
    const htmlcontent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          </head>
          <body>
            <h1>오늘 당신의 행운 색깔은?</h1>
            ${check()}
          </body>
          </html>`
    res.write(htmlcontent);
    res.end();
});

server.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("http://localhost:8080");
    }
})