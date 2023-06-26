/**
 * [정수 부분]
 * 
 * 실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (flo) => Math.floor(flo);

console.time();
console.log(solution(1.42));	// 1
console.log(solution(69.32));	// 69
console.timeEnd();

// Math에 trunc도 존재
const solution2 = (tru) => Math.trunc(tru);

console.time();
console.log(solution2(1.42));	// 1
console.log(solution2(69.32));	// 69
console.timeEnd();

