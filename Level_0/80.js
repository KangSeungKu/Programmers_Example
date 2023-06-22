/**
 * [특정한 문자를 대문자로 바꾸기]
 * 
 * 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 
 * 이루어진 문자열 alp가 매개변수로 주어질 때, 
 * my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 
 * return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, alp) => [...my_string].map((ch) => ch === alp ? ch.toUpperCase() : ch).join('');

console.time();
console.log(solution("programmers", "p"));	// "Programmers"
console.log(solution("lowercase", "x"));	// "lowercase"
console.timeEnd();      // 14.395ms

// 단순 문자열 replace를 사용해도 됨. -> 훨씬 효율이 좋음.
const solution2 = (my_string, alp) => my_string.replaceAll(alp, alp.toUpperCase());

console.time();
console.log(solution2("programmers", "p"));	// "Programmers"
console.log(solution2("lowercase", "x"));	// "lowercase"
console.timeEnd();      // 1.532ms