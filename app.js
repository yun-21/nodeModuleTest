const luck = require('./public/lucky');
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

const a = luck.getColor();
    function check() {
        if (a === "빨간색") {
            b = `<h2 style="color:red">${a}<span style="color:black">입니다!</span></h2>`
        }
        else if (a === "노란색") {
            b = `<h2 style="color:yellow">${a}<span style="color:black">입니다!</span></h2>`
        }
        else if (a === "초록색") {
            b = `<h2 style="color:green">${a}<span style="color:black">입니다!</span></h2>`
        }
        else if (a === "파란색") {
            b = `<h2 style="color:blue">${a}<span style="color:black">입니다!</span></h2>`
        }
        else if (a === "검정색") {
            b = `<h2 style="color:black">${a}<span style="color:black">입니다!</span></h2>`
        }
        else if (a === "보라색") {
            b = `<h2 style="color:purple">${a}<span style="color:black">입니다!</span></h2>`
        }
        return b
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