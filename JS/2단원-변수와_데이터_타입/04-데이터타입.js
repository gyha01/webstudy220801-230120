'use strict';

// Number
let sampleValue1=123;
console.log(typeof sampleValue1);

// Boolean, 논리값(true(참), false(거짓)만 표현 가능)
let sampleValue2=true;
console.log(typeof sampleValue2);

// 쌍, 홑 따움표로 감싼 경우 문자열(문장, 글자의 집합)로 인식
let sampleValue3='hello world';
console.log(typeof sampleValue3);

// 객체(Object) 
// 키와 값으로 구성된 프로퍼티
// 다양한 값을 하나의 단위로 구성한 복합적인 자료 구조
// 변경 가능한 값
let sampleValue4=new Date();
//console.log(new Date());
console.log(typeof sampleValue4);

// null->비어있는(=아무런 기능이 없는 상태) 객체 타입
let sampleValue5=null;
//console.log(sampleValue5);
console.log(typeof sampleValue5);

// 선언만 하고 값이 정의되지 않는 상태(undefined)
let sampleValue6;
console.log(typeof sampleValue6);