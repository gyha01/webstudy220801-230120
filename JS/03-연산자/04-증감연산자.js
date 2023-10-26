/* 1) 변수 스스로 1씩 증가함 */
let selfPlus=1;
console.log(selfPlus);

selfPlus++;
console.log(selfPlus);

++selfPlus;
console.log(selfPlus);

// ++가 연속으로 붙으면 스스로 1씩 증가한다

// 2) 뱐수 스스로 1씩 감소
let selfMinus=1;
console.log(selfMinus);

selfMinus--;
console.log(selfMinus);

--selfMinus;
console.log(selfMinus);

//--가 연속으로 붙으면 스스로 1씩 감소한다

// 3)전위 증감 연산자
let prevValue=1;

// prevValue를 먼저 1 증가 시키고 전체 수식을 처리한다
let prevResult=100+ ++prevValue;

console.log(prevValue);
console.log(prevResult);

// 4) 후위 증감 연산자
let nextValue=1;

//100+nextValue를 먼저 처리하고 나중에서야 nextValue가 1 증가한다.
let nextResult=100+ nextValue++;

console.log(nextValue);
console.log(nextResult);

//증감연산자가 앞으로 오면 먼저 계산하고 그렇지 않는 경우 계산이 끝난 후에 적용한다