/**
 * [문자열을 정수로 변환하기]
 * 
 * 숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.
 */

const solution = (n_str) => +n_str;

console.time();
console.log(solution("10"));	// 10
console.log(solution("8542"));	// 8542
console.timeEnd();

// 이런 것도 가능 ㅎㅎ;;;
const solution2 = Number;
// const soluttion2 = new Number(str);

console.time();
console.log(solution2("10"));	// 10
console.log(solution2("8542"));	// 8542
console.timeEnd();