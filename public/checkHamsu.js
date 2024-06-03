const luck = require("./lucky");
const a = luck.getColor();
function check() {
    if (a === "빨간색") {
        const b = `<h2 style="color:red">${a}<span style="color:black">입니다!</span></h2>`
        return b
    }
    else if (a === "노란색") {
        const b = `<h2 style="color:yellow">${a}<span style="color:black">입니다!</span></h2>`
        return b
    }
    else if (a === "초록색") {
        const b = `<h2 style="color:green">${a}<span style="color:black">입니다!</span></h2>`
        return b
    }
    else if (a === "파란색") {
        const b = `<h2 style="color:blue">${a}<span style="color:black">입니다!</span></h2>`
        return b
    }
    else if (a === "검정색") {
        const b = `<h2 style="color:black">${a}<span style="color:black">입니다!</span></h2>`
        return b
    }
    else if (a === "보라색") {
        const b = `<h2 style="color:purple">${a}<span style="color:black">입니다!</span></h2>`
        return b
    }
}

module.exports=check;