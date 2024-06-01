const color = [
    "빨간색",
    "노란색",
    "초록색",
    "파란색",
    "검정색",
    "보라색"
]
exports.getColor=()=>{
    //?Math.floor() : 정적 메서드로 항상 반올림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환한다. 
    const clr = Math.floor(Math.random()*color.length);
    return color[clr];
}