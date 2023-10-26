// 1) and
//--> 전체가 참인 경우만 결과가 참
console.group('1)and');
    console.log(true && true);
    console.log(true && false);
    console.log(false && true);
    console.log(false && false);
console.groupEnd();

//2)and연산 여러 개 사용
//모든 값이 참이어야 결과가 참
console.group('2) and연산 여러 개 사용');
    console.log(true && true && true);
    console.log(true && true && false);
    console.log(true && false && false);
    console.log(false && false && false);
console.groupEnd();

//3)or
//--> 하나라도 참이 포함되어 있다면 결과는 참
console.group('3) or');
    console.log(true || true);
    console.log(true || false);
    console.log(false || true);
    console.log(false || false);
console.groupEnd();

//4)or연산 여러 개 사용
console.group('4) or연산 여러 개 사용');
    console.log(true || true || true);
    console.log(true || true || false);
    console.log(true || false || false);
    console.log(false || false || false);
console.groupEnd();

// 5)복합 사용
console.group('5) 복합사용');
    //and가 or보다 항상 우선시 한다.
    console.log(true && true || true); // true && true = true / true || true = true
    console.log(true && true || false); // true && true = true / true || false = true
    console.log(true && false || true); // true && false = false / false || true = true
    console.log(false && false || true); // false && false = false / false || true = true

    console.log(true || true && true); // true && true = true / true || true = true
    console.log(true || true && false); // true && false = false / true || false = true
    console.log(true || false && true); // true && false = false / true || false = true
    console.log(false || false && true); // false && false = false / false || false =false
console.groupEnd();

// 6)not
console.group('6) not');
    let success = true;
    let fail = !success;   //not true 이므로 false
    console.log(fail);

    let k = 1;
    console.log(!k);  //숫자 1은 true에 대응하므로 not true -> false
    
    let l = 0;
    console.log(!l);  //숫자 0은 false에 대응하므로 not false -> true;

    let str1='hello';
    console.log(!str1); //내용이 있는 문장은 true. not true -> false

    let str2 = '';
    console.log(!str2);  //내용이 없는 문장은 false. not false -> true
console.groupEnd();