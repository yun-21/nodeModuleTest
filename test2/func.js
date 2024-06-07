const fs = require('fs');
function hamsuPrac(names, value) {
    const nameArr = [];
    names.forEach((element) => {
        nameArr.push(element);
    });

    const valueArr = [];
    value.map((element) => {
        valueArr.push(element / 2)
    })

    //allData라는 객체 초기화
    const allData = {};

    //.shift()를 사용함으로 배열에서 첫번째 요소를 제거하고 제거된 요소를 반환한다.
    const indexNameZero = nameArr.shift();
    const indexValueZero = valueArr.shift();

    //위 shift()메서드를 사용함으로 인덱스 1번에 위치하는 정보들이 인덱스 0번이 되었다.
    //.slice()를 사용함으로 추출 시작점 인덱스 0번에서부터 추출을 종료할 인덱스 1번까지를 변수에 할당해줬다.    
    const indexNameFirst = nameArr.slice(0, 1);
    const indexValueFirst = valueArr.slice(0, 1);
    //0번째 인덱스 삭제
    nameArr.splice(0,1);
    valueArr.splice(0,1);

    
    
    //.pop()메서드는 배열에서 마지막 요소를 제거하고 반환한다.
    const indexNameLast = nameArr.pop();
    const indexValueLast = valueArr.pop();
    
    //프로퍼티 값에 쓰일 객체 초기화
    const mid = {};
    //정보라는 프로퍼티키가 있고 프로퍼티 값으론 객체를 가진다.
    allData['정보'] = mid;
    //이름 인덱스 0번이 프로퍼티 키가 되고 값 인덱스 0번이 프로퍼티 값이 된다.
    mid[indexNameZero] = indexValueZero;
    //자리를 지정해주면서 object타입을 string타입으로 지정
    mid[indexNameFirst[0]] = indexValueFirst[0];
    
    mid[indexNameLast] = indexValueLast;
    
    //.forEach()메서드는 각 배열 요소에 대해 실행할 함수이다. 
    //element매개변수는 배열에서 처리중인 현재요소를 뜻합니다.
    nameArr.forEach((element)=>{
        valueArr.forEach((elements)=>{
            //name배열과 value배열의 인덱스가 같을때 실행한다.
            if(nameArr.indexOf(element)===valueArr.indexOf(elements)){
                mid[element]=elements
            }
        })
    })
    return allData;
}
const names = ["신지윤", "송강", "이종석", "배인혁", "변우석"];
const value = [312, 376, 374, 352, 380]
const call = hamsuPrac(names, value)
console.log(call)

const JsonCall = JSON.stringify(call,null,2);
fs.writeFileSync("./test2/JsonCall.json",JsonCall);
