function hamsuPrac(names, value) {
    const nameArr = [];
    names.forEach((element) => {
        nameArr.push(element);
    });

    const valueArr = [];
    value.map((element) => {
        valueArr.push(element/2)
    })
    
    //allData라는 객체 초기화
    const allData = {};

    //.shift()를 사용함으로 배열에서 첫번째 요소를 제거하고 제거된 요소를 반환한다.
    const indexNameZero = nameArr.shift();
    const indexValueZero = valueArr.shift();

    //위 shift()메서드를 사용함으로 인덱스 1번에 위치하는 정보들이 인덱스 0번이 되었다.
    //.slice()를 사용함으로 추출 시작점 인덱스 0번에서부터 추출을 종료할 인덱스 1번까지를 변수에 할당해줬다.    
    const indexNameFirst = nameArr.slice(0,1);
    const indexValueFirst = valueArr.slice(0,1);

    //프로퍼티 값에 쓰일 객체 초기화
    const mid = {};
    //정보라는 프로퍼티키가 있고 프로퍼티 값으론 객체를 가진다.
    allData['정보']=mid;
    mid[indexNameZero]=indexValueZero;
    //자리를 지정해주면서 object타입을 string타입으로 지정
    mid[indexNameFirst[0]]=indexValueFirst[0];

    return allData;
}
const names = ["신지윤", "송강", "이종석", "배인혁", "변우석"];
const value = [312, 376, 374, 352, 380]
const call = hamsuPrac(names, value)
console.log(call)