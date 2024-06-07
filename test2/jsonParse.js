const fs = require('fs');
const json = fs.readFileSync("./test2/JsonCall.json","utf-8");

JSON.parse(json,(key, value)=>{
    if(typeof(value)==='number'){
        console.log(key,value)
    }
});