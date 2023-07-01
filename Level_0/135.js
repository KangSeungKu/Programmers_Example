/**
 * [문자열안에 문자열]
 * 
 * 문자열 str1, str2가 매개변수로 주어집니다. 
 * str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (str1, str2) => str1.includes(str2) ? 1 : 2;

console.time();
console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));	// 1
console.log(solution("ppprrrogrammers", "pppp"));	// 2
console.log(solution("AbcAbcA", "AAA"));	// 2
console.timeEnd();