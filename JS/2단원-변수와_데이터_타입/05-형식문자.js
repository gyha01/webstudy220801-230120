//기본 데이터 타입
const num=123.45;
const str='hello';
const bool=true;
const obj=new Date();  //현재 날짜 및 시간 등 출력(객체)
const arr=[1,2,3];  //배열(객체의 일종)
const json={'a':123, 'b':234}  //JSON(객체의 일종)

//1)숫자 표현을 위한 문자:%d
console.group('숫자값 출력하기');
    console.log('숫자값 출력하기=%d', num);  //123.45
    console.log('숫자값 출력하기=%d', str);  //NaN(숫자가 아니라서 NaN)
    console.log('숫자값 출력하기=%d', bool);  //1(0은 거짓, 0이외의 모든 수는 참)
    console.log('숫자값 출력하기=%d', obj);  //객체에 대한 Hash값 출력(1693747310350)/Hash값: 유일한 값을 저장하기 위한 자료구조)
    console.log('숫자값 출력하기=%d', arr);  //NaN(숫자가 아니라서 NaN)
    console.log('숫자값 출력하기=%d', json);  //NaN(숫자가 아니라서 NaN)
console.groupEnd();

//2)문자열 표현을 위한 문자:%s
console.group('문자열 출력하기');
    console.log('문자열 출력하기=%s', num);  //123.45
    console.log('문자열 출력하기=%s', str);  //hello(''표 생략)
    console.log('문자열 출력하기=%s', bool);  //true
    console.log('문자열 출력하기=%s', obj); //2023-09-03T13:21:50.350Z(출력하는 날짜에 따라 값이 다름)
    console.log('문자열 출력하기=%s', arr); //[1,2,3]
    console.log('문자열 출력하기=%s', json); //{a:123, b:234}(''표 생략)
console.groupEnd();

//3)객체 표현을 위한 문자:%o
console.group('객체 출력하기');
    console.log('객체 출력하기=%o', num); //123.45
    console.log('객체 출력하기=%o', str); //'hello'
    console.log('객체 출력하기=%o', bool); //true
    console.log('객체 출력하기=%o', obj); //2023-09-03T13:21:50.350Z(출력하는 날짜에 따라 값이 다름)
    console.log('객체 출력하기=%o', arr); //[1,2,3, [length]:3](arr의 배열 내용 출력 및 배열 길이 출력)
    console.log('객체 출력하기=%o', json); //{a:123, b:234}
console.groupEnd();

//4)JSON표현을 위한 문자: %j
console.group('JSON 출력하기');
    console.log('JSON 출력하기=%j', num); //123.45
    console.log('JSON 출력하기=%j', str); //"hello"
    console.log('JSON 출력하기=%j', bool); //true
    console.log('JSON 출력하기=%j', obj); //"2023-09-03T13:21:50.350Z"(출력하는 날짜에 따라 값이 다름)
    console.log('JSON 출력하기=%j', arr); //[1,2,3]
    console.log('JSON 출력하기=%j', json); //{"a":123, "b":234}
console.groupEnd();

//사용예시
const student='자바스크립트 학생';
const age=20;
console.group('복합사용');
    console.log('%s님의 나이는 %d세 입니다.', student, age);
console.groupEnd();
//출력결과: (자바스크립트 학생)님의 나이는 (20)세 입니다.
