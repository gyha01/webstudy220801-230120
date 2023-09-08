const a='Hello';
console.log(`${a} Javascript`);

const name='민수';
const age=20;
const message=`${name}는 ${age}세 입니다.`;  
console.log(message);


//어째서 name이 void로 출력되는 걸까?
/* 출력 메세지
'name' is deprecated.ts(6385)
lib.dom.d.ts(27028, 5): The declaration was marked as deprecated here.
const name: void
@deprecated

No quick fixes available
*/
/*
인터넷 검색 결과 
VSCode 확장자 중 Eslint를 사용할 경우 Typescript 에러로 잡힌다고 한다.
settings>javscript.validate.enable>false로 설정하니 해결됨.

관련 검색 결과
https://www.codeit.kr/community/questions/UXVlc3Rpb246NjNiMjdjYmNhZGQ5NDA0MjJlZThiODc0

*/
