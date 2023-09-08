//1)사칙연산 출력하기
const a=5;
const b=3;
console.log(a+b);  //8
console.log(a-b);  //2
console.log(a*b);  //15


//2)연산 결과를 다른 변수에 할당
const x=5;
const y=3;
const z=x+y-2;
console.log(z);  //6

//3)나눗셈 (주의사항: /와 %의 차이를 생각해야 한다.)

//일반적인 나눗셈
const myValue1=10;
const myValue2=4;
console.log(myValue1/myValue2); //2.5
console.log(myValue1 % myValue2);  //2

//나누어 떨어지지 않는 나눗셈
const myValue3=4;
const myValue4=3;
console.log(myValue3 / myValue4); //1.333
console.log(myValue3 % myValue4); //1

//4)문자열 연산

//4-1)문자열 끼리의 덧셈
const myString1='Hello';
const myString2='World';
console.log(myString1 + myString2); //Hello World

//4-2)문자열과 다른 타입의 덧셈
console.log('안녕하세요'+123);  //안녕하세요123
console.log('안녕하세요'+true);  //안녕하세요true
console.log('안녕하세요'+null);  //안녕하세요null

//문자열과 연산되는 다른 타입은 모두 문자열로 자동 변환된다.
//결국 문자열끼리의 덧셈과 동일한 결과를 낸다.

//문장간에는 다른 연산자는 불가능함
console.log(myString1 - myString2);  //NaN